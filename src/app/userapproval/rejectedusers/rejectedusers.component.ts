import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { userapprovaldata, approvallist } from '../userapproval-data';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

function mergeDictionaries(dict1 :any, dict2:any) {
  const mergedList = [];

  for (const key in dict1) {
      if (dict1.hasOwnProperty(key)) {
          const mergedDict = { ...dict1[key] };

          if (dict2.hasOwnProperty(key)) {
              // Merge properties from dict2 when the key exists in both dictionaries
              Object.assign(mergedDict, dict2[key]);
          }

          mergedList.push(mergedDict);
      }
  }

  return mergedList;
}



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
  // user details
  user_data: any;
  user_datas:any;
  user_details: any;
  user_status : any;
  userdatasubscribtion: Subscription;



  

  constructor(    public router: Router,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private authservice: AuthService) {
    
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
          item.address
            .toLowerCase()
            .includes(this.searchText.toLowerCase()) ||
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

  // //startevent
  // start(event: Event) {
  //   const workOrderNumber = (event.target as HTMLButtonElement).value; // Typecast event.target to HTMLButtonElement
  //   console.log(workOrderNumber);
  //   // sessionStorage.setItem('workOrderNumber', JSON.stringify(workOrderNumber));
  //   this.router.navigate(['/pages/orderdetail/', workOrderNumber]);
  // }

  //init
  ngOnInit(): void {
    const { adminToken }= JSON.parse(localStorage.getItem('user') ?? '{}');
    // console.log(adminToken)

    this.userdatasubscribtion =this.authservice.getallusers(adminToken).subscribe(
      (res:any)=>{
        this.user_details = res;
        this.user_datas = this.user_details["user"];
        this.user_status = this.user_details["state"]
        this.user_data = mergeDictionaries(this.user_datas,this.user_status);
        this.filteredData =this.user_data;
        // console.log(this.filteredData)
        
      },
      (error: any)=>{
        console.log(error)
      }
    );

  }
}