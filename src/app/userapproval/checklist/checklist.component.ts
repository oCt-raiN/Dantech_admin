import { Component } from '@angular/core';
import { clinicdat, clinicdata } from './checklist-data';
import { Router, ActivatedRoute } from '@angular/router';
import { userapprovaldata, approvallist } from '../userapproval-data';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent {
  clinicdetails: clinicdata[];
  clinicdatalist: any[] = [];
  searchText: string = '';
  filteredData: any[] = [];
  sortcolumn: string = '';
  sortDirection: string = 'asc';

  // user details
  user_data: any;
  user_datas: any;
  user_details: any;
  user_status: any;
  userdatasubscribtion: Subscription;

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    this.clinicdetails = clinicdat;
  }

  //sortcolumn
  sortColumn(column: string) {
    // Check if the column is already sorted
    if (this.sortcolumn === column) {
      // If the same column is clicked again, toggle the sorting order
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // If a different column is clicked, set the sorting column and direction
      this.sortcolumn = column;
      this.sortDirection = 'asc'; // Default to ascending order
    }

    // Sort the filtered data based on the chosen column and direction
    this.filteredData.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (this.sortDirection === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
  }

  //filterdata
  filterData() {
    if (this.searchText) {
      console.log('Hi');
      this.filteredData = this.user_data.filter((item: any) => {
        console.log('My data', this.filteredData);
        // Customize the filtering logic as needed
        return (
          item.address.toLowerCase().includes(this.searchText.toLowerCase()) ||
          item.email.includes(this.searchText) ||
          item.clinicid.includes(this.searchText) ||
          item.clinicName
            .toLowerCase()
            .includes(this.searchText.toLowerCase()) ||
          item.phonenumber.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    } else {
      this.filteredData = this.user_data; // If searchText is empty, show all data
    }
  }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.check-btn').on('click', function () {
        // Disable the check button
        $(this).prop('disabled', true);
        // Enable the cancel button
        $('.cancel-btn').prop('disabled', false);
      });

      $('.cancel-btn').on('click', function () {
        // Disable the cancel button
        $(this).prop('disabled', true);
        // Enable the check button
        $('.check-btn').prop('disabled', false);
      });
    });
    this.clinicdatalist = this.clinicdetails;
  }
}
