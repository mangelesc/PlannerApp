import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Task } from '../interfaces/taks.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class TasksService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseUrl}/tasks`);
  }

  getTaskByCategory( category: string ):Observable<Task | undefined >{

    return this.httpClient.get<Task>(`${this.baseUrl}/tasks/?category=${category}`)
      .pipe(
        // of -> forma de crear observables basado en el valor que especifico en ()
        // Es decir, si da error, retorno un observable con valor undefined
        catchError ( error => of (undefined) )
      )
  }
  
}