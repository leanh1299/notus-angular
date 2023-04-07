import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  @ViewChild('telephone') telephone: any;
  @ViewChild('password') password: any;
  @ViewChild('repassword') re_password: any;
  isChecked: boolean = false;
  isRegistered: boolean = false;
  errorMessage = '';

  constructor(public apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  verifyPassword(): boolean {
    const repassword = this.re_password.nativeElement.value;
    const password = this.password.nativeElement.value;
    return password === repassword;
  }

  signUp() {
    const tel = this.telephone.nativeElement.value;
    const password = this.password.nativeElement.value;
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
