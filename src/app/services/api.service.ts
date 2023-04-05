import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  // private subject = new Subject<any>();


  private baseUrl = environment.apiUrl;
  // private GENERATE_HEAD_PHONE = this.baseUrl + "api/v1/common";
  private GENERATE_NOTI = this.baseUrl + "api/v1/common/loan-notification";
  private UPLOAD_FILE = this.baseUrl + "api/v1/files/upload-file";
  // private IMPORT_PROFILE = this.baseUrl + "api/v1/files/import-file";
  private SEND_OTP = this.baseUrl + "api/v1/otp/send-otp";
  private VERIFY_OTP = this.baseUrl + "api/v1/otp/verify-otp";
  private USER_INFOR = this.baseUrl + "user/me";
  private LOGIN = this.baseUrl + "user/signin";
  private REGISTER = this.baseUrl + "user/signup";
  // THIẾU 1 số api liên quan đến quyền / phân quyền và admin do chưa design
  private CREATE_LOAN = this.baseUrl + "user/create-loan";
  private CHECK_LOAN = this.baseUrl + "user/is-exist-loan";
  private UPDATE_INFOR = this.baseUrl + "user/update-base-information";
  private CHECK_PHOTO = this.baseUrl + "user/update-kyc-image";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
      return this.http.get<any>(this.USER_INFOR, { observe: 'response', });
  }

  register(username: string, password:string, phoneNumber: string, email: string): Observable<any> {
    return this.http.post<any>(this.REGISTER,{username, password, phoneNumber, email}, { observe: 'response', });
}

 






  // sendData(message: string) {
  //   this.subject.next(message);
  // }

  // clearData() {
  //   this.subject.next();
  // }

  // getData(): Observable<any> {
  //   return this.subject.asObservable();
  // }

}
