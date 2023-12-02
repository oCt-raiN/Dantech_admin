import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { userapprovaldata, approvallist } from '../userapproval-data';

@Component({
  selector: 'app-rejectedusers',
  templateUrl: './rejectedusers.component.html',
  styleUrls: ['./rejectedusers.component.scss'],
})
export class RejectedusersComponent {
  userapprovaldetails: userapprovaldata[];
  searchText: string = '';
  filteredData: any[] = [];
  sortcolumn: string = '';
  sortDirection: string = 'asc';

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    this.userapprovaldetails = approvallist;
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
      this.filteredData = this.userapprovaldetails.filter((item) => {
        console.log('My data', this.filteredData);
        // Customize the filtering logic as needed
        return (
          item.organizationaddress
            .toLowerCase()
            .includes(this.searchText.toLowerCase()) ||
          item.organizationemail.includes(this.searchText) ||
          item.organizationid.includes(this.searchText) ||
          item.organizationname
            .toLowerCase()
            .includes(this.searchText.toLowerCase()) ||
          item.phonenumber.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    } else {
      this.filteredData = this.userapprovaldetails; // If searchText is empty, show all data
    }
  }

  //startevent
  start(event: Event) {
    const workOrderNumber = (event.target as HTMLButtonElement).value; // Typecast event.target to HTMLButtonElement
    console.log(workOrderNumber);
    // sessionStorage.setItem('workOrderNumber', JSON.stringify(workOrderNumber));
    this.router.navigate(['/pages/orderdetail/', workOrderNumber]);
  }

  //init
  ngOnInit(): void {
    this.filteredData = this.userapprovaldetails;
  }
}
