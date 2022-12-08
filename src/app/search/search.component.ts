import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private api:ApiService){

  }

  id=""

  readValues=()=>{
    let data:any={
      "id":this.id
    }
    console.log(data)
    this.api.searchPatients(data).subscribe(
      (res)=>{
        this.data=res
      }
    )
  }

  data:any=[]

  deleteValue=(id:any)=>{
    let data:any={
      "id":id
    }

    this.api.deletePAtients(data).subscribe(
      (res)=>{
        console.log(res)
      }
    )
  }
}
