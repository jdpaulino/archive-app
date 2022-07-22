import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-info',
  templateUrl: './archive-info.component.html',
  styleUrls: ['./archive-info.component.css']
})
export class ArchiveInfoComponent implements OnInit {
  year:any;
  month:any;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('ArchiveInfo on Init');
    this.route.paramMap
      .subscribe(q => {
        console.log('ArchiveInfo on info');
        this.year = q.get('year');
        this.month = q.get('month');
        console.log(q.keys);
      });
  }

  viewAll() {
    this.router.navigate(['']);
  }
}
