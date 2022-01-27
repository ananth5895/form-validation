import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveDrivenFormComponent } from './reactive-driven-form/reactive-driven-form.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

const routes: Routes = [
  {
    path : 'template-driven-forms',
    component : TemplateDrivenFormsComponent
  },
  {
    path : 'reactive-driven-form',
    component : ReactiveDrivenFormComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
