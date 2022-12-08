import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private api:ApiService){}

  name=""
  doctor=""
  age=""
  img=""

  readValues = ()=>{
    let data={
      "name": this.name,
      "doctor": this.doctor,
      "age": parseInt(this.age),
      "img": this.img
  }

    console.log(data)
    this.api.addPatients(data).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
  }

}
