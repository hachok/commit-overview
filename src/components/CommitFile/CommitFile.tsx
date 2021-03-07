import React from 'react';
import {
    Card, CardContent, makeStyles,
    Typography
} from '@material-ui/core';
import {FileInfo} from 'src/pages/CommitDetailsPage/CommitDetailsPage';

interface Props {
    info: FileInfo
}

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        marginBottom: 50,
        width: "100%",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CommitFile: React.FC<Props> = ({info}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {info.filename}
                </Typography>
                <pre><code>{info.patch}</code></pre>
            </CardContent>
        </Card>
    );
}
export default CommitFile;
