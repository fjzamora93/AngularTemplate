import { Inject, Injectable } from '@angular/core';
import { type Task } from './task/task.model';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  
  private taskList: Task[] = DUMMY_TASKS;

  constructor() {
    console.log('TaskService constructor');
  }

  //Devuelve la lista de tareas de cada persona
  getUserTasks(UserId: string){
    console.log(' ------->', UserId);
    return this.taskList.filter((task) => task.userId === UserId);
  }

  //Añade una tarea a la lista de tareas
  addTask(taskdata: NewTaskData, UserId: string){
    this.taskList.push({
      id: new Date().getTime().toString(),
      userId : UserId,
      title: taskdata.title,
      summary: taskdata.summary,
      dueDate: taskdata.dueDate,
    })
  }

  //Elimina (completa) una tarea de la lista de tareas

  removeTask(selectedTaskId: string){
    this.taskList = this.taskList.filter((task) => task.id !== selectedTaskId);
  }


}


export const DUMMY_TASKS = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]