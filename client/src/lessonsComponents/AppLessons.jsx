import '../App.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data.jsx';

import { DragDropContext } from 'react-beautiful-dnd';

import Column from './Column.jsx';

class App extends Component {
  state = initialData;

  onDragEnd = (result) => {
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
      const taskIdForDrag = Array.from(columnForDrag.taskIds);

      const columnForDrop = this.state.columns[destination.droppableId];
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

  a = {};
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => this.state.tasks[taskId]
          );
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

export default App;
