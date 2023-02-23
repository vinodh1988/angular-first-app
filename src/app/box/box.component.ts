import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
   colors:string[]=["lightblue",'yellow',"lightgreen","tomato"]
   current:string="lightblue"
   @Input() title:string=""
   @Input("values") items:string[]=[]

   colorChange(color:string):void{
     this.current=color
   }
}
