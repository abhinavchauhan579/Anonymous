import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  // Forms initialization
  public dropdownsForm: any;

  // Variables initialization
  public dropList: any;
  public dataSource: any;

  constructor(public service: SharedService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.dropdownsForm = this.fb.group({
      dropdown: new FormControl(null, Validators.required)
    });
    
    this.dropList = [
      {id: '1', name: 'English'},
      {id: '2', name: 'Hindi'},
      {id: '3', name: 'French'},
    ];

    const ELEMENT_DATA: any[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];

    this.dataSource = ELEMENT_DATA;
  }

  displayedColumns: string[] = ['customerName', 'projectName', 'globalMaster', 'indicator', 'technicalPerson', 'forecastGenerated', 'actions'];

  showData() {
    // NAVIGATE TO EDIT-VIEW-CUSTOMER COMPONENT WITH SHOW ONLY MODE
  }

  editData() {
    // NAVIGATE TO EDIT-VIEW-CUSTOMER COMPONENT WITH EDIT MODE
  }

  deleteData() {
    // DELETE THE ROW
  }

}
