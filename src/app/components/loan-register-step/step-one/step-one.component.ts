import { Component, OnInit, Input } from "@angular/core";

interface PersonalInfo {
  name: string;
  dob: Date;
  phone: string;
  email: string;
  address: string;
  idNumber: string;
  idIssueDate: Date;
  job: string;
  maritalStatus: string;
}

@Component({
  selector: "app-step-one",
  templateUrl: "./step-one.component.html",
})
export class StepOneComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  personalInfo: PersonalInfo = {
    name: '',
    dob: new Date(),
    phone: '',
    email: '',
    address: '',
    idNumber: '',
    idIssueDate: new Date(),
    job: '',
    maritalStatus: ''
  };
  currentStep = 1;

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  backStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submit() {
    // Handle form submission here
    console.log(this.personalInfo);
  }
}
