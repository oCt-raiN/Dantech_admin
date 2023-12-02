import { Component } from '@angular/core';
import { clinicdat, clinicdata } from './checklist-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent {
  clinicdetails: clinicdata[];
  clinicdatalist: any[] = [];

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    this.clinicdetails = clinicdat;
  }
  ngOnInit(): void {
    this.clinicdatalist = this.clinicdetails;
  }
}
