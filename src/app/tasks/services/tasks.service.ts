import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Task } from '../interfaces/taks.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class TasksService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseUrl}/tasks`);
  }
  
  getTaskById( id: string ):Observable<Task | undefined >{
    return this.httpClient.get<Task>(`${this.baseUrl}/tasks/${id}`)
      .pipe(
        // of -> forma de crear observables basado en el valor que especifico en ()
        // Es decir, si da error, retorno un observable con valor undefined
        catchError ( error => of (undefined) )
      )
  }


  getTaskByCategory( category: string ):Observable<Task| undefined >{
    return this.httpClient.get<Task>(`${this.baseUrl}/tasks?category=${category}`)
      .pipe(
        // of -> forma de crear observables basado en el valor que especifico en ()
        // Es decir, si da error, retorno un observable con valor undefined
        catchError ( error => of (undefined) )
      )
  }

  getSuggestions( query: string ): Observable<Task[]> {
    // Aunque no retorne nada, siempre retorna un []
    return this.httpClient.get<Task[]>(`${this.baseUrl}/tasks/?q=${ query }&_limit=10`)
  }


  addTask ( task: Task ):Observable<Task>{
    return this.httpClient.post<Task>(`${this.baseUrl}/tasks`, task );
  }

  updateTask ( task: Task ):Observable<Task>{
    if ( !task.id ) throw Error('Task id is required');
    return this.httpClient.patch<Task>(`${this.baseUrl}/tasks/${ task.id }`, task );
  }

  deleteTaskByID ( id: string ):Observable<boolean>{
    // Esta petición http retorna un objeto vacío o un error en caso de que no exista
    return this.httpClient.delete(`${this.baseUrl}/tasks/${ id }`)
      .pipe(
        // Si hay un error, devuelvo false -> no se borró. 
        catchError ( err => of(false) ),
        // Si no lanza un error, transformo la respuesta con map y devuelvo true
        map (resp => true )
      );
  }




  
  
}