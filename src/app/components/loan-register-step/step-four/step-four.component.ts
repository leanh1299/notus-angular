import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-step-four",
  templateUrl: "./step-four.component.html",
})
export class StepFourComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor() {}

  ngOnInit(): void {}
}
