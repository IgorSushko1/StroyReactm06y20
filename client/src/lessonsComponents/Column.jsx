import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

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

class Column extends React.Component {
  render() {
    const { classes } = this.props;
    debugger;
    return (
      <Container>
        <Title>
          <Avatar className={classes.small} />
          {this.props.column.title}
        </Title>
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

export default withStyles(styles)(Column);
