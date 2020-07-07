import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { ExpansionPanel } from '@material-ui/core';
import { ExpansionPanelDetails } from '@material-ui/core';
import { ExpansionPanelSummary } from '@material-ui/core';
import { ExpansionPanelActions } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import newTheme from './Theme';
import AddIcon from '@material-ui/icons/Add';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((newTheme) => ({
  root: {
    backgroundColor: grey[100],
    width: 'auto',
    boxShadow: newTheme.shadows[0],
  },
  circleTitle: {
    margin: 'auto 0',
    paddingRight: '20px',
  },
  heading: {
    fontSize: newTheme.typography.pxToRem(20),
    fontWeight: newTheme.typography.fontWeightRegular,
  },
}));

export default function DropdownMenu(props) {
  const classes = useStyles();
  // const [firstColumnName] = useState(props.columnOrder);
  return (
    <ThemeProvider theme={newTheme}>
      <div className={classes.root}>
        <ExpansionPanel className={classes.root} defaultExpanded={false}>
          <ExpansionPanelSummary
            className={classes.root}
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <FiberManualRecordIcon
              fontSize="small"
              className={classes.circleTitle}
              style={{ color: props.color }}
            />
            <Typography variant="h5">{props.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </ThemeProvider>
  );
}
