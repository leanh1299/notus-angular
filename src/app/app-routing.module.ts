import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StepFourComponent } from "./components/loan-register-step/step-four/step-four.component";
import { StepOneComponent } from "./components/loan-register-step/step-one/step-one.component";
import { StepThreeComponent } from "./components/loan-register-step/step-three/step-three.component";
import { StepTwoComponent } from "./components/loan-register-step/step-two/step-two.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// user views
import { SettingsComponent } from "./views/userDetail/profile/settings.component";
import { TablesComponent } from "./views/userDetail/tables/tables.component";

//admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { InstallmentComponent } from "./views/admin/installment/installment.component";


// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LoanComponent } from "./views/loan-register/loan-register.component";
import { WalletComponent } from "./views/wallet/wallet.component";
import { UserComponent } from "./layouts/user/user.component";

const routes: Routes = [
  // chi tiết thông tin
  {
    path: "detail",
    component: UserComponent,
    children: [
      { path: "profile", component: SettingsComponent },
      { path: "installment", component: TablesComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },

  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "installment", component: InstallmentComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // đăng nhập và đăng ký tài khoản mới
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  { path: "dashboard", component: DashboardComponent },

  { path: "register", component: RegisterComponent },

  // ví 
  { path: "home", component: IndexComponent },
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
