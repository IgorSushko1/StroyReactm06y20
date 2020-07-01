import '../App.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data.jsx';

import { DragDropContext } from 'react-beautiful-dnd';

import Column from './Column.jsx';

class App extends Component {
  state = initialData;

  onDragStart = () => {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  };

  onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };

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
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
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
