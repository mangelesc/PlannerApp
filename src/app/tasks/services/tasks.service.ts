import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/taks.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class TasksService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseUrl }/tasks`);
  }
  
}