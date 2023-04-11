import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

const httpOptions = {   
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }
  getTasks():Observable<Task[]> {
    return this.http.get(this.apiUrl) as Observable<Task[]>;
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete(url) as Observable<Task>;
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put(url, task, httpOptions) as Observable<Task>;
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post(this.apiUrl, task, httpOptions) as Observable<Task>;
  }
}
