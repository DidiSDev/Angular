import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pueblo',
  standalone: true,
  imports: [],
  templateUrl: './pueblo.component.html',
  styleUrl: './pueblo.component.css'
})
export class PuebloComponent {

  @Input() ciudadQueRecojo:string;

  constructor()
  {
    this.ciudadQueRecojo="";
  }
  ngOnInit():void 
  {
      
  }
}
