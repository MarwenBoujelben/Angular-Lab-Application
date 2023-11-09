import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembreComponent } from './membre/membre.component';
import { MemberFormComponent } from './member-form/member-form.component';

const routes: Routes = [
{
  path:'members',
  pathMatch:'full',
  component:MembreComponent
},
{
  path:'',
  redirectTo:'members',
  pathMatch:'full'
 },
{
  path:'create',
  pathMatch:'full',
  component:MemberFormComponent
},
{
  path:'**',
  redirectTo:'members'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
