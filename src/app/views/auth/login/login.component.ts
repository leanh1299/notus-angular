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

  constructor(, private authService: AuthService
    , private router: Router) {}

  ngOnInit(): void {
    if (this.authService.getToken()) {
      this.router.navigate(['/home']);
    }

  }

  login() {
    this.authService.signIn(this.username, this.password).subscribe(
      res => {
        // Nếu đăng nhập thành công, chuyển hướng đến trang chủ
        this.router.navigate(['/home']);
      },
      error => {
        // Xử lý lỗi đăng nhập
        console.log(error);
      }
    );
  }
}
