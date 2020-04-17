import { Component } from "@angular/core";
import { AuthserviceService } from "./auth/authservice.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "finalproject1";
  constructor(private _authservice: AuthserviceService) {}
}
