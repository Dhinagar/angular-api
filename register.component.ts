import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Router } from "@angular/router";
import { AuthserviceService } from "../auth/authservice.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  regUser = { firstname: "", lastname: "", email: "", password: "" };
  constructor(private _auth: AuthserviceService, private _router: Router) {}
  register() {
    this._auth.regsisterUser(this.regUser).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this._router.navigate(["/login"]);
      },
      err => console.log(err)
    );
  }
  ngOnInit() {}
}
