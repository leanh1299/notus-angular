import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StepFourComponent } from "./components/loan-register-step/step-four/step-four.component";
import { StepOneComponent } from "./components/loan-register-step/step-one/step-one.component";
import { StepThreeComponent } from "./components/loan-register-step/step-three/step-three.component";
import { StepTwoComponent } from "./components/loan-register-step/step-two/step-two.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { SettingsComponent } from "./views/admin/profile/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LoanComponent } from "./views/loan-register/loan-register.component";
import { WalletComponent } from "./views/wallet/wallet.component";

const routes: Routes = [
  // chi tiết thông tin
  {
    path: "detail",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "profile", component: SettingsComponent },
      { path: "installment", component: TablesComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // đăng nhập và đăng ký tài khoản mới
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // ví 
  { path: "", component: IndexComponent },
  { path: "wallet", component: WalletComponent },
  { path: "loan-register", component: LoanComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },

  //đăng ký khoản vay
  { path: 'loan-register', component: LoanComponent },
  { path: 'stepone', component: StepOneComponent },
  { path: 'steptwo', component: StepTwoComponent },
  { path: 'stepthree', component: StepThreeComponent },
  { path: 'stepfour', component: StepFourComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
