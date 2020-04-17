import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthserviceService } from "../auth/authservice.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginUser = { email: "", password: "" };
  constructor(private _auth: AuthserviceService, private _router: Router) {}

  ngOnInit() {}
  login() {
    this._auth.loginUser(this.loginUser).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/event"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
