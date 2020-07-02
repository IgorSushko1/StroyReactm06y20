import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';

import styles from './styles';
import { Droppable } from 'react-beautiful-dnd';
import { withStyles } from '@material-ui/core/styles';

import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 450px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
`;
import { CardHeader } from '@material-ui/core';

const MyHeader = styled(CardHeader)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'black',
  height: 48,
  padding: '0 30px',
});

class Column extends React.Component {
  render() {
    return (
      <Container>
        <MyHeader title={this.props.column.title}>
          {/* <Avatar className={classes.small} /> */}
          {this.props.column.title}
        </MyHeader>
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
      </Container>
    );
  }
}
export default Column;
