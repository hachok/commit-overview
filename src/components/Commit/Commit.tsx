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
    listItem: {
        height: '45px',
        overflow: 'hidden',
        '& p': {
            display: 'inline-block',
            width: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    }
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
                    primary={info.commit.author.name}
                    className={classes.listItem}
                    secondary={
                        <Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {format(Date.parse(info.commit.author.date), 'dd-MM-yyyy')}
                            </Typography>
                            {' - '}
                            {info.commit.message}
                        </Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset"/>
        </div>
    );
}
export default Commit;