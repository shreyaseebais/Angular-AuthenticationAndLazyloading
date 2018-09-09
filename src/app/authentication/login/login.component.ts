import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
  }

  login(){
    this.authService.login().subscribe(
      res=>{
        if(res.success == 'TRUE'){
          sessionStorage.setItem('token', 'ABCEFGH12334.324fsdfdsdfsfdf.sgogjernlk89');
        }
      },
      err=>{
        console.log(err);
      }
    )
  }
}
