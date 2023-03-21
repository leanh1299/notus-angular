import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loan",
  templateUrl: "./loan-register.component.html",
})
export class LoanComponent implements OnInit {
  constructor() {}

  currentStep = 1;

  
  ngOnInit(): void {}

  nextStep() {
    this.currentStep += 1;
  }

  backStep() {
    this.currentStep -= 1;
  }
  
}
