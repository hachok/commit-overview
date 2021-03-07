import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Box, Button, Card, CardContent, makeStyles, Typography} from '@material-ui/core';

import CommitFile from 'src/components/CommitFile/CommitFile';
import Commit from 'src/components/Commit/Commit';

export interface FileInfo {
    sha: string
    filename: string
    patch: string
}

interface CommitData {
    sha: string
    commit: {
        author: {
            name: string,
            email: string,
            date: string
        },
        message: string
    }
    author: {
        avatar_url: string
    }
    files: FileInfo[]
}

interface Params {
    id: string
}

const useStyles = makeStyles(() => ({
    card: {
        width: '100%',
    }
}));

const CommitDetailsPage: React.FC = () => {
    const {id} = useParams<Params>();
    const [commit, setCommit] = useState<CommitData>();
    const history = useHistory();
    const classes = useStyles();

    const fetchCommitDetails = useCallback(async () => {
        const res = await fetch('https://api.github.com/repos/facebook/react/commits/' + id);
        return await res.json();
    }, []);

    useEffect(() => {
        fetchCommitDetails().then((commit: CommitData) => setCommit(commit));
    }, [fetchCommitDetails]);

    return (
        <Fragment>
            <Button variant="contained" onClick={() => history.push('/')}>Go back</Button>
            {commit && <Fragment>
                <Box m={2} width="100%">
                    <Typography variant="h6" color="inherit" noWrap>Info: </Typography>
                </Box>
                <Card className={classes.card}>
                    <CardContent>
                        <Commit info={commit}/>
                        <Box mt={2}><Typography color="textSecondary">
                            <pre><code>{commit.commit.message}</code></pre>
                        </Typography></Box>
                    </CardContent>
                </Card>
                <Box m={2}>
                    <Typography variant="h6" color="inherit" noWrap>Files: </Typography>
                </Box>
                {!!commit.files.length && commit.files.map((file: FileInfo) => <CommitFile info={file}/>)}
            </Fragment>}
        </Fragment>
    );
};

export default CommitDetailsPage;