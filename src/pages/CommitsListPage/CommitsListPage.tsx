import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {Box, List, makeStyles, TextField, Typography} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {
    DateRangePicker,
    DateRangeDelimiter,
    RangeInput, LocalizationProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';
import {format} from 'date-fns';

import Commit from 'src/components/Commit/Commit';
import {API_URL} from 'src/constants';
import {CommitData} from 'src/types';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
}));

const CommitsListPage: React.FC = () => {
    const [commits, setCommits] = useState([]);
    const [selectedDate, handleDateChange] = React.useState<RangeInput<null>>([null, null]);
    const classes = useStyles();
    const history = useHistory();

    const onCommitClick = (commitId: string) => {
        history.push('/commit/' + commitId);
    };

    const fetchCommitsList = useCallback(async () => {
        const [startDate, endDate] = selectedDate;
        const urlParams = new URLSearchParams();

        if (startDate) urlParams.set('since', format(startDate as Date, 'yyyy-MM-dd'));
        if (endDate) urlParams.set('until', format(endDate as Date, 'yyyy-MM-dd'));

        const urlParamsString = urlParams.toString() ? `?${urlParams.toString()}` : '';
       try {
           const res = await fetch(`${API_URL}/commits` + urlParamsString);
           return await res.json();
       } catch (e) {
           console.log(e);
       }
    }, [selectedDate]);

    useEffect(() => {
        fetchCommitsList().then((commits) => setCommits(commits));
    }, [fetchCommitsList]);

    return (
        <Fragment>
            <Typography variant="h6" color="inherit" noWrap>
                <Box mt={1} mb={2}><strong>facebook / react</strong></Box>
                <LocalizationProvider dateAdapter={DateFnsUtils}>
                    <DateRangePicker
                        startText="Start date"
                        endText="End date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        renderInput={(startProps, endProps) => (
                            <Fragment>
                                <TextField {...startProps} />
                                <DateRangeDelimiter> to </DateRangeDelimiter>
                                <TextField {...endProps} />
                            </Fragment>
                        )}
                    />
                </LocalizationProvider>
            </Typography>
            <Box mt={2} width="100%">
                <List className={classes.root}>
                    {!!commits.length &&
                    commits.map((commit: CommitData) =>
                        <Commit
                            key={commit.sha}
                            info={commit}
                            onClick={onCommitClick}/>)}
                </List>
            </Box>
        </Fragment>);
};

export default CommitsListPage;