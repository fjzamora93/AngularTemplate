export interface Task{
    id: string;
    title: string;
    summary: string;
    userId: string;
    dueDate:string;
  }

  export interface NewTaskData{
    title: string;
    summary: string;
    dueDate:string;
  }