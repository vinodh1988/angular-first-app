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
}
