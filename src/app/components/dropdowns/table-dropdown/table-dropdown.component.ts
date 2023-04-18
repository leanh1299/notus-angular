import { Component, AfterViewInit, ViewChild, ElementRef, Input, OnInit } from "@angular/core";
import { createPopper } from "@popperjs/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-table-dropdown",
  templateUrl: "./table-dropdown.component.html",
})
export class TableDropdownComponent implements OnInit, AfterViewInit {
  @Input() userId;
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;

  constructor(private apiService: ApiService){}

  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  ngOnInit(){

  }

  deleteUser(id:any){
    this.apiService.deleteUser(id).subscribe( _res => {
      if(_res){
        console.log("Delete user" + id + "successful");
        
      }
    })
  }

}
