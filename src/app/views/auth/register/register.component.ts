import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  @ViewChild('telephone', { static: false }) telephone: ElementRef;
  @ViewChild('password', { static: false }) password: ElementRef;
  @ViewChild('repassword', { static: false }) re_password: ElementRef;
  isChecked: boolean = false;
  isRegistered: boolean = false;
  errorMessage = '';
  tel: string;
  pwd: string;
  repwd: string;
  reinput: any;

  constructor(public apiService: ApiService, private router: Router) {}

  ngOnInit(): void {

    console.log(this.verifyPassword());
    

  }

  verifyPassword(): boolean {
    const password = this.pwd;
    const repassword = this.repwd;
    return password === repassword;
  }

  signUp() {
    const tel = this.tel;
    const password = this.pwd;
    console.log(this.verifyPassword());
    if(!this.verifyPassword()){
        this.reinput = true;
    }
    this.apiService.register(tel, password).subscribe(
      response => {
        // Đăng ký thành công
        this.isRegistered = true;
        // Chuyển hướng sang trang Home và truyền thông báo thành công
        this.router.navigate(['/home'], { queryParams: { success: true } });
      },
      error => {
        // Đăng ký thất bại
        this.errorMessage = error.message;
        // Hiển thị thông báo lỗi
      }
    );
    // Do something with tel and password values
  }

  validatePassword(password: string): boolean {
    const pattern = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$";
    const regex = new RegExp(pattern);
    return regex.test(password);
  }

  checkCheckBoxvalue(event: any){
    this.isChecked = event.target.checked;
  }
}
