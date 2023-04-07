import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private baseUrl = environment.apiUrl;
  private jwtToken: string;

  constructor(private http: HttpClient) { }

  signin(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, { username, password }).pipe(
      tap(res => {
        if (res.token) {
          // Lưu jwt token vào sessionStorage
          sessionStorage.setItem('jwtToken', res.token);
          this.jwtToken = res.token;
        }
      })
    );
  }

  signout() {
    // Xóa jwt token khỏi sessionStorage
    sessionStorage.removeItem('jwtToken');
    this.jwtToken = null;
  }

  isAuthenticated(): boolean {
    // Kiểm tra xem jwt token đã tồn tại trong sessionStorage hay chưa
    return !!sessionStorage.getItem('jwtToken');
  }

  getJwtToken(): string {
    return this.jwtToken || sessionStorage.getItem('jwtToken');
  }

  getHeaders(): HttpHeaders {
    // Thêm jwt token vào header trước khi gửi request
    return new HttpHeaders({ 'Authorization': `Bearer ${this.getJwtToken()}` });
  }
}
