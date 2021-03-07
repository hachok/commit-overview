import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {List, makeStyles, Typography} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

import Commit from 'src/components/Commit/Commit';

export interface CommitInfo {
    sha: string
    commit: {
        author: {
            name: string
            email: string,
            date: string
        }
    }
    author: {
        avatar_url: string
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
}));

const CommitsListPage: React.FC = () => {
    const [commits, setCommits] = useState([]);
    const classes = useStyles();
    const history = useHistory();

    const onCommitClick = (commitId: string) => {
        history.push('/commit/' + commitId);
    };

    const fetchCommitsList = useCallback(async () => {
        const res = await fetch('https://api.github.com/repos/facebook/react/commits');
        return await res.json();
    }, []);

    useEffect(() => {
        fetchCommitsList().then((commits) => setCommits(commits));
    }, [fetchCommitsList]);

    return (
        <Fragment>
            <Typography variant="h6" color="inherit" noWrap>
                <strong>facebook / react</strong>
            </Typography>
            <List className={classes.root}>
                {!!commits.length &&
                commits.map((commit: CommitInfo) =>
                    <Commit
                        key={commit.sha}
                        info={commit}
                        onClick={onCommitClick}/>)}
            </List>
        </Fragment>);
};

export default CommitsListPage;