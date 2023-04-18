import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-social-traffic",
  templateUrl: "./card-social-traffic.component.html",
})
export class CardSocialTrafficComponent implements OnInit {
  @Input() abc;
 
  public installmentApproval: any;
  public detailInstallment: any;

  constructor() { }

  ngOnInit(): void {
    // call api
    // cần convert dạng money
    this.installmentApproval = [
      {
        name: "Khoản vay lớn",
        amount: "10,000,000",
        currency: "VND",
        status: true,
        period: 12,
        donePercent: 100,
        startDate: '19/03/2023',
        dueDate: '20/09/2023',
      },
      {
        name: "Khoản vay nhỏ",
        amount: "500,000",
        currency: "VND",
        status: false,
        period: 3,
        donePercent: 20,
        startDate: '19/03/2023',
        dueDate: '20/09/2023',
      },
      {
        name: "Khoản vay tạm ứng",
        amount: "1,500,000",
        currency: "VND",
        status: false,
        period: 2,
        donePercent: 100,
        startDate: '19/03/2023',
        dueDate: '20/09/2023',
      },
      {
        name: "Vay mua điện thoại",
        amount: "500,000",
        currency: "VND",
        status: false,
        period: 6,
        donePercent: 70,
        startDate: '19/03/2023',
        dueDate: '20/09/2023',
      },
      {
        name: "Vay mua nhà",
        amount: "500,000,000",
        currency: "VND",
        status: false,
        period: 24,
        donePercent: 20,
        startDate: '19/03/2023',
        dueDate: '20/09/2023',
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
