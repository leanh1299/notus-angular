import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

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
import { ProfileComponent } from "./views/profile/profile.component";
import { WalletComponent } from "./views/wallet/wallet.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./components/cards/card-line-chart/card-line-chart.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { LoanComponent } from "./views/loan-register/loan-register.component";
import { StepOneComponent } from "./components/loan-register-step/step-one/step-one.component";
import { StepTwoComponent } from "./components/loan-register-step/step-two/step-two.component";
import { StepThreeComponent } from "./components/loan-register-step/step-three/step-three.component";
import { StepFourComponent } from "./components/loan-register-step/step-four/step-four.component";
import { HeaderLoansComponent } from "./components/header-loans/header-loans.component";
import { CardTableHistoryComponent } from "./components/cards/card-table-history/card-table-history.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtModule } from "@auth0/angular-jwt";
import { TokenInterceptor } from './token-interceptor';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { FormsModule } from "@angular/forms";

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent, 
    CardBarChartComponent, 
    CardLineChartComponent, 
    IndexDropdownComponent, 
    PagesDropdownComponent, 
    TableDropdownComponent, 
    NotificationDropdownComponent, 
    UserDropdownComponent, 
    SidebarComponent, 
    FooterComponent, 
    FooterSmallComponent, 
    FooterAdminComponent, 
    CardProfileComponent, 
    CardSettingsComponent, 
    CardSocialTrafficComponent, 
    CardStatsComponent, 
    CardTableComponent, 
    CardTableHistoryComponent, 
    HeaderStatsComponent, 
    AuthNavbarComponent, 
    AdminNavbarComponent, 
    IndexNavbarComponent, 
    AdminComponent, 
    AuthComponent, 
    SettingsComponent, 
    TablesComponent, 
    LoginComponent, 
    RegisterComponent, 
    IndexComponent, 
    ProfileComponent,
    WalletComponent,
    LoanComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    HeaderLoansComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule , JwtModule.forRoot({
    config: {
      tokenGetter: tokenGetter,
      allowedDomains: ['your-api.com'],
      disallowedRoutes: ['your-api.com/auth/login'],
    },
  })],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, ApiService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
