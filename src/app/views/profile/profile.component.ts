import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  birthDay: any;
  address: string;
  fullname: string;
  income: number;
  identify: string;
  relation: string;
  phone: string;
  email: string;
  username: string;
  job: string;
  gender: string;
constructor(public apiService: ApiService, private router: Router){}
public userProfile: {
    "address": "Số 8, Phan Đình Giót, Giải Phóng, Hà Nội",
    "birthDate": "2023-04-08T04:40:14.499Z",
    "block": true,
    "fullName": "Trần Khánh Long",
    "gender": true,
    "id": 69,
    "identify": "001034534572",
    "income": 20000000,
    "job": "Solution Developer - OnePAY",
    "reason": 0,
    "relation": "available",
    "relativePhoneNumber": "0966069299",
    "username": "longtk",
    "email": "longtk@gmail",
    "appUserRoles": [
      "ROLE_ADMIN"
    ]
}

  ngOnInit(): void {
    // this.apiService.getUserProfile().subcrible(_res => {
    //   this.birthDay = this.getBirthday(_res.birthDate);
    //   this.fullname = _res.fullName;
    //   this.gender = _res.gender ? 'Nam' : 'Nữ';
    //   this.username = _res.username;
    //   this.identify = _res.identify;
    //   this.income = _res.income;
    //   this.relation = _res.relation;
    //   this.phone = _res.relativePhoneNumber;
    //   this.email = _res.email;
    //   this.address = _res.address;
    //   this.job = _res.job;

    // });
    this.birthDay = this.getBirthday(this.userProfile.birthDate);

  }
   getBirthday(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  getIncome(income:any){
    
  }
  
  
  
  
  
}
