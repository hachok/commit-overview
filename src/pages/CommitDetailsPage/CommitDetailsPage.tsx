import React, {Fragment, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Box, Button, Card, CardContent, makeStyles, Typography} from '@material-ui/core';

import CommitFile from 'src/components/CommitFile/CommitFile';
import Commit from 'src/components/Commit/Commit';
import {API_URL} from 'src/constants';
import {CommitData} from 'src/types';

export interface FileInfo {
    sha: string
    filename: string
    patch: string
}

interface CommitInfo extends CommitData{
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
    const [commit, setCommit] = useState<CommitInfo>();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        const fetchCommitDetails = async () => {
            const res = await fetch(`${API_URL}/commits/` + id);
            return await res.json();
        };

        fetchCommitDetails().then((commit: CommitInfo) => setCommit(commit));
    }, [id]);

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
                        <Box mt={2}>
                                <pre>
                                    <code>{commit.commit.message}</code>
                                </pre>
                        </Box>
                    </CardContent>
                </Card>
                <Box m={2}>
                    <Typography variant="h6" color="inherit" noWrap>Files: </Typography>
                </Box>
                {!!commit.files.length && commit.files.map((file: FileInfo) => <CommitFile key={file.sha}
                                                                                           info={file}/>)}
            </Fragment>}
        </Fragment>
    );
};

export default CommitDetailsPage;
