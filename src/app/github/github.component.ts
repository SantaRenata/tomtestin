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
