import { Router } from "@angular/router";
import { AuthserviceService } from "./auth/authservice.service";
import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _authservice: AuthserviceService,
    private _router: Router
  ) {}
  canActivate(): boolean {
    if (this._authservice.loggedIn()) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      this._router.navigate(["/login"]);
      return false;
    }
  }
}
