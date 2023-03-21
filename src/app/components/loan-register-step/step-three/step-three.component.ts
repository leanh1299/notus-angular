import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-step-three",
  templateUrl: "./step-three.component.html",
})
export class StepThreeComponent implements OnInit {

  @Input() currentStep: number;
  @Output() previousStep = new EventEmitter();
  @Output() complete = new EventEmitter();

  loanAmount: number;
  loanDuration: number;

  constructor() { }

  ngOnInit(): void {
  }

  nextStep() {
    this.currentStep += 1;
  }

  backStep() {
    this.currentStep -= 1;
  }

  submit(): void {
    // Do something with loanAmount and loanDuration
    this.complete.emit();
  }
  
}
