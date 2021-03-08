import React, {Fragment} from 'react';
import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText, makeStyles,
    Typography
} from '@material-ui/core';
import {format} from 'date-fns';
import {CommitData} from 'src/types';

interface Props {
    info: CommitData

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
        <div data-testid="commit-element" className={classes.wrapper} onClick={handleClick}>
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
                            {format(Date.parse(info.commit.author.date), 'dd-MM-yyyy')}
                        </Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset"/>
        </div>
    );
}
export default Commit;