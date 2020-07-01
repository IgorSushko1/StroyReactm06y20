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

    const column = this.state.columns[source.droppableId];
    // debugger;
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    // newTaskIds.splice(destination.index, 0, draggableId);

    const columnD = this.state.columns[destination.droppableId];
    // debugger;
    const newTaskIdsD = Array.from(columnD.taskIds);
    // newTaskIds.splice(source.index, 1);
    newTaskIdsD.splice(destination.index, 0, draggableId);

    const newColumn = { ...column, taskIds: newTaskIds };
    const newColumnD = { ...columnD, taskIds: newTaskIdsD };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
        [newColumnD.id]: newColumnD,
      },
    };

    this.setState(newState);
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
