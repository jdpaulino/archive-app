import { Archive } from '../common/models/archive.model';
import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivesService {

  constructor() { }

  getAll() {
    return of([
      new Archive(2022,1),
      new Archive(2022,2),
      new Archive(2022,3),
    ]);
  }
}
