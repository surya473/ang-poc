import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RemoteServiceService } from './remote-service.service';
import {User} from './user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'ang-poc';
  
  filterForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl('')
  });
  public filterData:User[]=[];
  constructor(private _remoteService : RemoteServiceService){

  }
  ngOnInit(){
    // this._remoteService.getData().subscribe((res:User[]) => {
    //   this.filterData=res;
    // });
    
  }

  onSubmit(){
    console.log(this.filterForm.value);
    this._remoteService.submitForm(this.filterForm.value).subscribe((res:User[]) => {
         this.filterData=res;
       });
  }

}
