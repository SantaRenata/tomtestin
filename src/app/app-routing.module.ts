/*
* File: app-routing.module.ts
* Author: Sánta Renáta Diána
* Copyright: 2023, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-02-04
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyindexComponent } from './bodyindex/bodyindex.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  {path:"bodyindex", component:BodyindexComponent},
  {path:"about", component:AboutComponent},
  {path:"github", component:GithubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
