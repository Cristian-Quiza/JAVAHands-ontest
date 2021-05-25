import { Injectable, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private baseUrl = "http://masglobaltestapi.azurewebsites.net/api/Employees";
  private baseUrl = "http://localhost:9007/api/Employees";
  // private baseUrl = "http://localhost:8080/api/users";


  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}`); 
  }
}

// metodo amarillo
// clase Verde 
// variable azul claro
// atributos o tipos de datos propios de angular en azul oscuro 
