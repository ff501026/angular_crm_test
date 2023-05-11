import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, TemplateRef, ViewChild, ElementRef, ViewEncapsulation  } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  


}