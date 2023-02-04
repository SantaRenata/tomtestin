import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bodyindex',
  templateUrl: './bodyindex.component.html',
  styleUrls: ['./bodyindex.component.scss']
})
export class BodyindexComponent implements OnInit {
  kg = new FormControl('');
  height = new FormControl('');
  bodyindex = new FormControl('');

  bodyindexVisible = false;
  
  ngOnInit(): void {
    
  }

  onKeyup(event:any){
    if(event.key == "Enter"){
      this.onEnter();
    }
  }

  onEnter(){
    this.startCalc();
  }

  onClickButton(){
    this.startCalc();
  }

  startCalc(){
    let kg = Number(this.kg.value);
    let height = Number(this.height.value);
    let bodyindex = this.calcBodyIndex(kg,height);
    this.bodyindex.setValue(String(bodyindex));
    this.bodyindexVisible = true;
  }

  calcBodyIndex(kg:number,height:number){
    let bodyindex = kg/Math.pow(height,2);
    return bodyindex;
  }

}
