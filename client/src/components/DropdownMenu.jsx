/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { ExpansionPanel } from '@material-ui/core';
import { ExpansionPanelDetails } from '@material-ui/core';
import { ExpansionPanelSummary } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
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
  droppableIvents: {
    pointerEvents: 'none',
    backgroundColor: grey[100],
    width: 'auto',
    boxShadow: newTheme.shadows[0],
  },
  notDroppableIvents: {
    backgroundColor: grey[100],
    width: 'auto',
    boxShadow: newTheme.shadows[0],
  },
  details: {
    flexBasis: '100%',
    flexWrap: 'wrap',
  },
  button: {
    flexWrap: 'wrap',
    marginTop: '50px',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  form: { width: '100%' },
  textField: { marginTop: '20px', width: '100%' },
}));

export default function DropdownMenu(props) {
  const classes = useStyles();
  const [task, setTask] = useState('Введите задание');
  const [date, setDate] = useState(1);

  const addTask = () => {
    props.addTask({ task: task, date: date });
  };

  return (
    <ThemeProvider theme={newTheme}>
      <div className={classes.root}>
        <ExpansionPanel
          className={
            !props.droppable
              ? classes.droppableIvents
              : classes.notDroppableIvents
          }
        >
          <ExpansionPanelSummary
            className={classes.root}
            expandIcon={props.droppable ? <AddIcon /> : null}
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
          <ExpansionPanelDetails className={classes.details}>
            <div>
              Введите в следующие поля задачу и выставите срок, за который
              задача должна быть выполнена
            </div>

            <TextField
              id="standard-basic"
              label="Описание задачи"
              name="task"
              className={classes.textField}
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="Срок выполнения работ (в днях)"
              type="number"
              name="date"
              value={date}
              onChange={(e) => {
                e.target.value >= 1 ? setDate(e.target.value) : setDate(1);
              }}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div className={classes.button}>
              <Button type="submit" form="taskForm" onClick={addTask}>
                создать
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </ThemeProvider>
  );
}
