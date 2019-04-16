import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EducationModuleModule } from './education-module/education-module.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EducationListComponent } from './education-list/education-list.component';
import { EducationEditComponent } from './education-edit/education-edit.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { EducationCreateComponent } from './education-create/education-create.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationListComponent,
    EducationEditComponent,
    EducationDetailComponent,
    EducationCreateComponent
  ],
  imports: [
    BrowserModule, EducationModuleModule,  HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
