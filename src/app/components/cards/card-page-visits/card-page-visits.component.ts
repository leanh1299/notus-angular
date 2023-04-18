import { Component, OnInit, AfterViewInit } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-card-page-visits",
  templateUrl: "./card-page-visits.component.html",
})
export class CardPageVisitsComponent implements OnInit {
  public userList: any;
  public detailInstallment: any;
  constructor() {}

  ngOnInit() {
    this.userList = [
      {
        name: "Trần Khánh Long",
        amount: "10,000,000",
        currency: "VND",
        status: true,
        dateCreated: "23/06/2021",
        id: 1,
      },
      {
        name: "Trần Minh  Anh",
        amount: "2,000,000",
        currency: "VND",
        status: false,
        dateCreated: "16/07/2022",
        id: 2,
      },
      {
        name: "Nguyễn Khánh Linh",
        amount: "10,000,000",
        currency: "VND",
        status: false,
        dateCreated: "25/06/2021",
        id: 3,
      },
      {
        name: "Trần Á Minh",
        amount: "1,000,000",
        currency: "VND",
        status: false,
        dateCreated: "23/03/2022",
        id: 4,
      },
      {
        name: "Lê Đức Minh",
        amount: "10,000,000",
        currency: "VND",
        status: true,
        dateCreated: "13/08/2022",
        id: 5,
      },
      {
        name: "Cao Thế An",
        amount: "10,000,000",
        currency: "VND",
        status: true,
        dateCreated: "22/11/2022",
        id: 6,
      },
      {
        name: "Trần Linh Lung",
        amount: "10,000,000",
        currency: "VND",
        status: true,
        dateCreated: "11/12/2022",
        id: 7,
      },
      {
        name: "Trần Nhật Ninh",
        amount: "10,000,000",
        currency: "VND",
        status: true,
        dateCreated: "23/01/2023",
        id: 8,
      },
      {
        name: "Tạ Quang Thái",
        amount: "10,000,000",
        currency: "VND",
        status: false,
        dateCreated: "23/06/2021",
        id: 9,
      },
    ];

    this.detailInstallment = [
      {
        name: "Khoản vay lớn",
        amount: "10,000,000",
        currency: "VND",
        status: true,
        period: 12,
        donePercent: 80,
        fee: 1.5,
        amountPayment: "11,000,000",
        startDate: '19/03/2023',
        dueDate: '20/09/2023',
      }
    ]
  }
}

