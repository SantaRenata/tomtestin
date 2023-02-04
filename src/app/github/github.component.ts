/*
* File: github.component.ts
* Author: Sánta Renáta Diána
* Copyright: 2023, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-02-04
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  url!:String;
  
  ngOnInit():void{
    this.url="https://github.com/SantaRenata/tomtestin"
  }
}
