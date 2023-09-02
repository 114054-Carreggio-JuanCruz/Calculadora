import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  numero1:number= 0;
  numero2:number=0;
  @Input() resultado:number=0

  actualizarResultado(num:number ){
    this.resultado=num
    console.log(this.resultado);
  }


}
