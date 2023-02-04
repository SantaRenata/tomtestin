/*
* File: about.component.ts
* Author: Sánta Renáta Diána
* Copyright: 2023, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-02-04
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  name!: String;
  date!:String;
  class!:String;

  ngOnInit(){
    this.name = "Sánta Renáta Diána";
    this.date = "2023.02.04";
    this.class = "Szoft II N";
  }
}
