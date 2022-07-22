import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchivesComponent } from './archives/archives.component';
import { ArchiveInfoComponent } from './archive-info/archive-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchivesComponent,
    ArchiveInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'', component: ArchivesComponent},
      { path:'archive/:year/:month', component: ArchiveInfoComponent},
      { path:'**', component: NotFoundComponent},
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
