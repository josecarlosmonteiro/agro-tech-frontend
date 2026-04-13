import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { AuthLoginBody, AuthRegistrationBody, AuthResponse } from '../models/auth.model';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { baseUrl } from '../constants/url';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${baseUrl}/auth`;
  private http = inject(HttpClient);

  #isLogged = signal<boolean>(false);
  public isLogged = this.#isLogged.asReadonly();

  private onLogin(token: string) {
    localStorage.setItem('token', token);
    this.#isLogged.set(true);
  }

  verifyToken(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    const token = localStorage.getItem('token');

    if (!token) return null;

    const decode: any = jwtDecode(token);

    return decode.role || null;
  }

  logout() {
    localStorage.removeItem('token');
    this.#isLogged.set(false);
  }

  login(data: AuthLoginBody): Observable<AuthResponse | null> {
    return this.http.post<AuthResponse | null>(`${this.url}/login`, data).pipe(
      tap(response => {
        if (response) {
          this.onLogin(response.accessToken);
        }
      }),
    );
  }

  registration(data: AuthRegistrationBody): Observable<AuthResponse | null> {
    return this.http.post<AuthResponse | null>(`${this.url}/register`, data).pipe(
      tap(result => {
        if (result) this.onLogin(result.accessToken);
      }),
    );
  }
}
