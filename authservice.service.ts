import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class AuthserviceService {
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  constructor(private http: HttpClient, private _router: Router) {}

  regsisterUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }
  logoutUser() {
    localStorage.removeItem("token");
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
