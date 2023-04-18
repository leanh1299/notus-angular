import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})


export class LoginComponent implements OnInit {
public username: string;
public password: string;

  constructor(private authService: AuthService
    , private router: Router) {}

  ngOnInit(): void {
    // if (this.authService.isAuthenticated()) {
    //   this.router.navigate(['/home']);
    // }

  }

  login() {
    this.authService.signin(this.username, this.password).subscribe(
      res => {
        // Nếu đăng nhập thành công, chuyển hướng đến trang chủ
        if(res){
            this.router.navigate(['/home']);

          // if(res.data.role == 'admin'){
          //   this.router.navigate(['deatail/dashboard']);
          // } else {
          //   this.router.navigate(['/home']);
          // }

        }
      },
      error => {
        // Xử lý lỗi đăng nhập
        console.log(error);
      }
    );
  }
}
