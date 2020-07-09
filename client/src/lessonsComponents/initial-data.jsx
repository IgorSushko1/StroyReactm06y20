const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'Сделать выемку грунта под фундаменты',
      deadlineTime: 3,
      idForComments: '',
    },
    'task-2': {
      id: 'task-2',
      content: 'Сделать гравийную подготовку под фундаменты',
      deadlineTime: 2,
      idForComments: '',
    },
    'task-3': {
      id: 'task-3',
      content: 'Сделать песчаную подготовку под фундаменты',
      deadlineTime: 2,
      idForComments: '',
    },
    'task-4': {
      id: 'task-4',
      content: 'Сделать гидроизоцию подошвы фундамента',
      deadlineTime: 2,
      idForComments: '',
    },
    'task-5': {
      id: 'task-5',
      content: 'Установить блоки фундамента',
      deadlineTime: 4,
      idForComments: '',
    },
    'task-6': {
      id: 'task-6',
      content: 'Выполнить обмазочную гидроизоляцию битумом на два раза',
      deadlineTime: 3,
      idForComments: 'rtrt',
    },
    'task-7': {
      id: 'task-7',
      content: 'Закрыть фундаменты защитной мембраной',
      deadlineTime: 1,
      idForComments: '',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Наряды',
      taskIds: ['task-7', 'task-6'],
      color: '#c4c8d1',
    },
    'column-2': {
      id: 'column-2',
      title: 'В работе',
      taskIds: ['task-5', 'task-4'],
      color: '#7dd7aa',
    },
    'column-3': {
      id: 'column-3',
      title: 'Приёмка',
      taskIds: ['task-3', 'task-2'],
      color: '#f6ab39',
    },
    'column-4': {
      id: 'column-4',
      title: 'Завершено',
      taskIds: ['task-1'],
      color: '#1e5ef4',
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

export default initialData;
