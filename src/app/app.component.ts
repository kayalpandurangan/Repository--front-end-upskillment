import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Series } from '../shared/model/series.model';
import { SeriesService } from '../shared/service/series.service';
import { Model } from '../shared/model/model.model';
import { Accessory } from '../shared/model/accessory.model';
import { Color } from '../shared/model/color.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  series:Series[]=[];
  model:Model[]=[];
  modeldata:Model[]=[];
  seriesId: number;
  accessory:Accessory[]=[];
  accessorydata:Accessory[]=[];
  color:Color[]=[];
  colordata:Color[]=[];
selectedseries: number;
selectedmodel:number;
selectedcolor:number;
selectedaccessory:number;
modelpricedata:Model[]=[];
colorpricedata:Color[]=[];
accessorypricedata:Accessory[]=[];
modelprice: number;
accessoryprice:number;
coprice:number;
totalprice:number;
  constructor(public dataService:SeriesService){

  }


ngOnInit()
{
this.loadService();
this.loadModel();
this.loadAccessory();
this.loadColor();
//this.loadPrice();

}
loadService()
{
    
  
  this.dataService.getSeries().subscribe(data=>{
    this.series=data;
    
  });
}

loadModel()
{
  
  this.dataService.getModel().subscribe(data=>{
    this.model=data;
    
  });
  console.log(this.selectedseries);
  
    this.modeldata = this.model.filter(x=>x.seriesId == this.selectedseries);
  
  console.log(this.modeldata);
}

loadAccessory(){
  this.dataService.getAccessory().subscribe(data=>{
    this.accessory=data;
    
  });
  console.log(this.selectedmodel);
  this.accessorydata = this.accessory.filter(x=>x.modelId == this.selectedmodel);
  console.log(this.accessorydata);
}

loadColor(){
  this.dataService.getColor().subscribe(data=>{
    this.color=data;
    
  });
  console.log(this.selectedmodel);
  console.log(this.selectedaccessory);
  this.colordata = this.color.filter(x=>x.modelId == this.selectedmodel);
  console.log(this.accessorydata);
}
loadPrice(){
 this.modelpricedata = this.model.filter(x=>x.modelId == this.selectedmodel);
 console.log(this.modelpricedata);
 this.modelpricedata.forEach(i => {
  this.modelprice = i.price;
 });
 console.log(this.modelprice);

console.log(this.selectedaccessory);
this.accessorypricedata=this.accessory.filter(x=>x.accessoryId == this.selectedaccessory);

console.log(this.accessorypricedata);
//this.accessoryprice=0;
this.accessorypricedata.forEach(i=>{
 
 
  this.accessoryprice  = i.accprice;
 

});
console.log(this.accessoryprice);

this.colorpricedata=this.color.filter(x=>x.colorId == this.selectedcolor);
console.log(this.colorpricedata);
this.colorpricedata.forEach(i=>{
  this.coprice = i.colorprice;
});
console.log(this.coprice);
this.totalprice=this.modelprice +this.accessoryprice+this.coprice;
console.log(this.totalprice)
}
clear()
{
  console.log("kaya");
    this.modelpricedata.forEach(i => {
    i.modelName=""
   });
}
sub()
{
  console.log("renu")
}
}
