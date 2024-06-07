import { Inject, Injectable } from '@angular/core';
import { type Task } from './task/task.model';
import { type NewTaskData } from './task/task.model';


//NOTA: localStorage estará disponible SIEMPRE ya que forma parte de la API del navegador. No hay que importarlo ni nada.

@Injectable({ providedIn: 'root' })
export class TaskService {
  
  private taskList: Task[] = DUMMY_TASKS;

  //Nuestro constructor de la clase TaskService
  //Si hay tareas en el localStorage (y habrá en cuanto añadamos o quitamos), las cargamos en la lista de tareas.
  //La última parte del constructor "extrae" en JSON para que pueda leerse como un string en nuestro Array.
  constructor() {
    const taskList = localStorage.getItem('taskList');
    if (taskList) {
      this.taskList = JSON.parse(taskList);
    }
  }

  //creamos un método que se encargue de guardar el taskList y las convierta en JSON. Llamaremos a este método al añadir y al eliminar.
  private saveTaskList(){
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
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
    });
    this.saveTaskList();
  }

  //Elimina (completa) una tarea de la lista de tareas

  removeTask(selectedTaskId: string){
    this.taskList = this.taskList.filter((task) => task.id !== selectedTaskId);
    this.saveTaskList();
  }
}

/**
 * localStorage
Características de localStorage:

  -Persistencia: Los datos almacenados en localStorage persisten incluso después de cerrar el navegador. 

  -Permanecen allí hasta que sean eliminados explícitamente por el usuario o mediante código.

  -Capacidad: localStorage tiene una capacidad de almacenamiento de aproximadamente 5MB por dominio en la mayoría de los navegadores.

  -API Sencilla: La API de localStorage es muy sencilla, con métodos básicos como setItem, getItem, removeItem y clear.
 */

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