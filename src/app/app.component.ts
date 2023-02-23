import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'XYZ APP'
  menuitems:string[]=["Home","Projects","About","Contact","Products","Achievements"]
  boxtitles:string[]=["Vegetables","Fruits","Electronic Gadgets","Sport Goods",
   "Books"]
  homebg:string="gray"
  bgcolors=["gray","#E3E7EA","#BEEAD5"]
  boxitems:string[][]=[
    ["Potato","Tomato","Onion","Beans"],
    ["Oranges","Apple","Banana","Gauva","JackFruit"],
    ["Mobile Phone","PenDrive","SSD","Smart Watch"],
    ["Cricket  Bat","Basket ball","Cricket Ball"],
    ["Book1","Book2","Book3"]
  ]
  selected:string="Nothing"
  boxname:string="Un Available"

  receiveInfo(item:string,boxname:string):void{
    this.selected=item
    this.boxname=boxname
  }
}
