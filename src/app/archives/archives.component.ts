import { ArchivesService } from './../services/archives.service';
import { Component, OnInit } from '@angular/core';
import { Archive } from '../common/models/archive.model';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  archives:Archive[]=[];
  constructor(private service: ArchivesService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(e=> {
        this.archives=e;
      });
  }
}
