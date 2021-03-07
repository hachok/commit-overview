import React, {Fragment} from 'react';
import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText, makeStyles,
    Typography
} from '@material-ui/core';
import {CommitInfo} from 'src/pages/CommitsListPage/CommitsListPage';

interface Props {
    info: CommitInfo

    onClick?(commitId: string): void
}

const useStyles = makeStyles(() => ({
    wrapper: {
        cursor: 'pointer',
    },
    inline: {
        display: 'inline',
    },
}));

const Commit: React.FC<Props> = ({info, onClick}) => {
    const classes = useStyles();

    const handleClick = () => {
        onClick && onClick(info.sha);
    }

    return (
        <div className={classes.wrapper} onClick={handleClick}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Avatar" src={info.author.avatar_url}/>
                </ListItemAvatar>
                <ListItemText
                    primary={info.sha}
                    secondary={
                        <Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {info.commit.author.name}
                            </Typography>
                            {' - '}
                            {info.commit.author.date}
                        </Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset"/>
        </div>
    );
}
export default Commit;