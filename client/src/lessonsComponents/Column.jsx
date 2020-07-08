/* eslint-disable react/prop-types */
import React from 'react';

import Task from './Task';

import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddIcon from '@material-ui/icons/Add';
import DropdownMenu from './DropdownMenu';

import clsx from 'clsx';
import { ExpansionPanel } from '@material-ui/core';
import { ExpansionPanelDetails } from '@material-ui/core';
import { ExpansionPanelSummary } from '@material-ui/core';
import { ExpansionPanelActions } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const ColumnContainer = styled(Container)({});

const ExpansionPanelAddTask = styled(ExpansionPanel)({
  border: 'none',
  background: '#f5f5f5',
});

const GridForHeader = styled(Grid)({
  padding: ' 0 0 0 0 ',
  border: 0,
  borderRadius: 8,
  background: '#f5f5f5',
  margin: '25px 0 10px',
});

const ColumnDroppableContainer = styled(Container)({
  border: 0,
  borderRadius: 8,
  background: '#f5f5f5',
  padding: '8px 0 24px 0',
  minHeight: 300,
});
const TaskList = styled.div`
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? 'skyblue' : '#f5f5f5'};
  flex-grow: 1;
  min-height: 300px;
`;

class Column extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ColumnContainer maxWidth={'xs'}>
        <GridForHeader
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <DropdownMenu
            title={this.props.column.title}
            color={this.props.column.color}
            droppable={
              this.props.column.id == this.props.firstColumnId ? true : false
            }
            addTask={this.props.addTask}
          />
        </GridForHeader>
        <ColumnDroppableContainer>
          <Droppable droppableId={this.props.column.id}>
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </ColumnDroppableContainer>
      </ColumnContainer>
    );
  }
}
export default Column;
