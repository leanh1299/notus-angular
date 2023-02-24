import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.component.html",
})
export class WalletComponent implements OnInit {
  constructor() {}

  cardNumber: string = '1234 5678 9012 3456';
  showCardNumber: boolean = false;
  
  ngOnInit(): void {}

  
}
