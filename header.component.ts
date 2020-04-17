import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthserviceService } from "../auth/authservice.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private _authService: AuthserviceService
  ) {}

  ngOnInit() {}
}
