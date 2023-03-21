import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-card-settings",
  templateUrl: "./card-settings.component.html",
})
export class CardSettingsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  
  redirectTo(link: string) {
    this.router.navigate([link]);
  }
}
