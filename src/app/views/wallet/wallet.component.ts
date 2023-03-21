import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.component.html",
})
export class WalletComponent implements OnInit {
  constructor() {}

  accountNumber: string = '1234 5678 9012 3456';
  titleNumber: string = 'Ẩn';
  showAccountNumber: boolean = false;
  cardNum: string = '0123 4567 8901 2345';
  cardDate: string = '05/23';
  cardName: string = 'Nguyen Van A';
  
  ngOnInit(): void {}

  
}
