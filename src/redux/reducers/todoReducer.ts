const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const ADD_TASK = 'ADD_TASK';

export interface ActionType {
  type: string
  payload: any
}

export interface TaskType {
  id: string
  name: string
  isDone: boolean
}

export interface TodoType {
  id: string
  title: string,
  tasks: TaskType[]
}

export interface TodosDefaultStateType {
  todos: TodoType[]
}

const todosDefaultState: TodosDefaultStateType = {
  todos: [{
    id: "1",
    title: "Website Creating",
    tasks: [
      {
        id: "1",
        name: "Website",
        isDone: false,
      },
      {
        id: "2",
        name: "Backend",
        isDone: false,
      }
    ]
  },
    {
      id: "2",
      title: "Zhenya frontend",
      tasks: []
    },
    {
      id: "3",
      title: "Writing a novel with a cool plot Writing a novel with a cool plotWriting a novel with a cool plotWriting a novel with a cool plot",
      tasks: []
    },
    {
      id: "4",
      title: "Website Creating",
      tasks: []
    },
    {
      id: "5",
      title: "Website Creating",
      tasks: []
    }]
}

interface AddTaskType {
  todoId: string,
  task: TaskType
}


export const addTodoAction = (payload: TodoType): ActionType => {
  return {type: ADD_TODO, payload: payload}
}

export const removeTodoAction = (id: string): ActionType => {
  return {type: REMOVE_TODO, payload: id}
}

export const addTaskAction = (payload: AddTaskType): ActionType => {
  return {type: ADD_TASK, payload: payload}
}

export const todoReducer = (state = todosDefaultState, action: ActionType): TodosDefaultStateType => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todos: [...state.todos, action.payload] }
    case REMOVE_TODO:
      return {...state, todos: state.todos.filter(todo => todo.id !== action.payload) }
    case ADD_TASK:
      console.log(action.payload.todoId)
      let tasks = {...state.todos.find(todo => todo.id === action.payload.todoId)?.tasks}
      console.log(tasks)
      if (tasks)
        return {...state,
                todos: [...state.todos.map(todo => {
            if (todo.id === action.payload.todoId)
              return {...todo, tasks: [...todo.tasks, action.payload.task]};
            else
              return todo;
          })]}
      return state
    default:
      return state;
  }
}