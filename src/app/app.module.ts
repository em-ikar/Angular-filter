import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LectureComponent } from './components/lecture/lecture.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxFieldComponent } from './common/components/checkbox-field/checkbox-field.component';
import { InputFieldComponent } from './common/components/input-field/input-field.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LectureComponent,
    FilterComponent,
    CardComponent,
    CheckboxFieldComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
