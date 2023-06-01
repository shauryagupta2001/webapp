import { Component,OnInit } from '@angular/core';
import { MyService } from '../service/myService';
import {Router} from '@angular/router';
import {HttpService} from '../service/httpSevice';


@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css']
})
export class LogicComponent implements OnInit {
  age='';
  password='';

  
  name='';
  phoneno='';
  male='';
  address='';
  country:any =[];
  state:any=[];
 
  
  
  constructor(private r: Router,private ms:MyService,private http: HttpService){}

  ngOnInit(): void {
    // this.username=localStorage.getItem('username') || '';
    // this.username=localStorage.getItem('password') || '';
    // this.ms.getData().subscribe(data => {
    //   this.male = data;
    // })
  }
  onLogin(){
    // localStorage.setItem('username',this.username);
    // localStorage.setItem('password',this.password);
    const userData={
      'name':this.name,
      'password':this.password,
      'age':this.age,
      
      'state':this.state,
      'phoneno':this.phoneno,
      'address':this.address

    }
    this.ms.setData(userData);
    this.r.navigate(['home'],{queryParams:{'name':this.name,'password':this.password}});
    

  }
  // onFetch(){
  //   this.ms.getData().subscribe(data => {
  //     this.male = data;
  //   })
  //}
  // onLogin(){
  //   const formData={
  //     'name':this.name,
  //     'age':this.age,
  //     'state':this.state
  //   }
  //   this.ms.setData(formData);
  //   this.r.navigate(['home']);
  //   console.log(this.name)
    
  // }

  
  
  onLogi(){
    this.http.getLoginData().subscribe(data =>{
      this.name = data['firstname'];
      this.password = data['lastname'];
      this.country.push(data['country']);
      this.state.push(data['state']);
      console.log(data);
      })

     
  }
}
