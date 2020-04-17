import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
// import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AuthGuard } from "./auth.guard";

import { EventComponent } from "./event/event.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },

  { path: "login", component: LoginComponent },

  { path: "register", component: RegisterComponent },
  { path: "event", canActivate: [AuthGuard], component: EventComponent }
  // { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
