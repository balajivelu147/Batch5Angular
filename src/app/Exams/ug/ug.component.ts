import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ug',
  templateUrl: './ug.component.html',
  styleUrls: ['./ug.component.scss']
})
export class UGComponent implements OnInit {
  passoutYear: string;
  studentName: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.passoutYear = params.get('year');
      this.studentName = params.get('name');
    });
  }

}
