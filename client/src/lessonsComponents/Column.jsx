import React from 'react';

import Task from './Task';

import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddIcon from '@material-ui/icons/Add';

const ColumnContainer = styled(Container)({});
const GridForHeader = styled(Grid)({
  padding: ' 0 0 0 2% ',
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
          <Grid xs={12} sm={1}>
            <FiberManualRecordIcon
              fontSize="small"
              style={{ color: this.props.column.color }}
            />
          </Grid>

          <Grid xs={12} sm={8}>
            <CardHeader title={this.props.column.title} />
          </Grid>
          {this.props.column.id === 'column-1' ? (
            <Grid xs={12} sm={2}>
              <AddIcon />
            </Grid>
          ) : null}
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
