import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewPatients = ()=>{
    return this.http.get("http://localhost:8080/view")
  }

  addPatients =(data:any)=>{
    return this.http.post("http://localhost:8080/add",data)
  }

  searchPatients = (data:any)=>{
    return this.http.post("http://localhost:8080/seaarch",data)
  }

  deletePAtients =(data:any)=>{
    return this.http.post("http://localhost:8080/delete",data)
  }
}
