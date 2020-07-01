const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'Сделать выемку грунта под фундаменты',
    },
    'task-2': {
      id: 'task-2',
      content: 'Сделать гравийную подготовку под фундаменты',
    },
    'task-3': {
      id: 'task-3',
      content: 'Сделать песчаную подготовку под фундаменты',
    },
    'task-4': {
      id: 'task-4',
      content: 'Сделать гидроизоцию подошвы фундамента',
    },
    'task-5': {
      id: 'task-5',
      content: 'Установить блоки фундамента',
    },
    'task-6': {
      id: 'task-6',
      content: 'Выполнить обмазочную гидроизоляцию битумом на два раза',
    },
    'task-7': {
      id: 'task-7',
      content: 'Закрыть фундаменты защитной мембраной',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Наряды',
      taskIds: ['task-7', 'task-6'],
    },
    'column-2': {
      id: 'column-2',
      title: 'В работе',
      taskIds: ['task-5', 'task-4'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Приёмка',
      taskIds: ['task-3', 'task-2'],
    },
    'column-4': {
      id: 'column-4',
      title: 'Завершено',
      taskIds: ['task-1'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

export default initialData;
