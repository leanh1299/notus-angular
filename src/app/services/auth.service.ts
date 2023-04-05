import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  signIn(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, { username, password }, { observe: 'response', }).pipe(
      tap(res => localStorage.setItem('jwt', res.token))
    );
  }

  getToken(): string {
    return localStorage.getItem('jwt');
  }
}
