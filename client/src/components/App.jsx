import '../App.css';

import React, { Component } from 'react';
import initialData from './initial-data.jsx';

import styled from 'styled-components';

import { DragDropContext } from 'react-beautiful-dnd';

import Column from './Column.jsx';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 1000px) and (max-width: 1300px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
  }
  state = initialData;

  onDragEnd = (result) => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (source.droppableId <= destination.droppableId) {
      const columnForDrag = this.state.columns[source.droppableId];
      const columnForDrop = this.state.columns[destination.droppableId];

      const taskIdForDrag = Array.from(columnForDrag.taskIds);
      let taskIdForDrop = Array.from(columnForDrop.taskIds);

      if (source.droppableId === destination.droppableId) {
        taskIdForDrag.splice(source.index, 1);
        taskIdForDrag.splice(destination.index, 0, draggableId);
        taskIdForDrop = taskIdForDrag;
      } else {
        taskIdForDrag.splice(source.index, 1);
        taskIdForDrop.splice(destination.index, 0, draggableId);
      }

      const newColumnForDrag = { ...columnForDrag, taskIds: taskIdForDrag };
      const newColumnForDrop = { ...columnForDrop, taskIds: taskIdForDrop };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumnForDrag.id]: newColumnForDrag,
          [newColumnForDrop.id]: newColumnForDrop,
        },
      };

      this.setState(newState);
    }
  };

  addTask(newTaskData) {
    const lengthOfTask = Object.keys(this.state.tasks).length + 1;
    const taskName = 'task-' + lengthOfTask;
    const newTaskObj = {
      [taskName]: {
        id: taskName,
        content: newTaskData.task,
        deadlineTime: newTaskData.date,
        idForComments: '',
      },
    };

    const newColumnObj = {
      'column-1': {
        id: 'column-1',
        title: 'Наряды',
        taskIds: [...this.state.columns['column-1'].taskIds, taskName],
        color: '#c4c8d1',
      },
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        ...newColumnObj,
      },
      tasks: {
        ...this.state.tasks,

        ...newTaskObj,
      },
    };
    this.setState(newState);
  }

  a = {};
  render() {
    const lenghtOfTask = Object(this.state.tasks).length;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId) => this.state.tasks[taskId]
            );
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                firstColumnId={this.state.columnOrder[0]}
                addTask={this.addTask}
              />
            );
          })}
        </Container>
      </DragDropContext>
    );
  }
}

export default App;
