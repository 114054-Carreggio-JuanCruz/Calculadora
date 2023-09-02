import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.css']
})
export class CalculadorComponent {

  @Input() num1:number=0;
  @Input() num2:number=0;
  resultado : number=0;
  @Output() onCalcularClick= new EventEmitter<number>();

  realizarCalculo(tipo:number){
    if(tipo==1){
      this.resultado=this.num1+this.num2
      this.onCalcularClick.emit(this.resultado)
    }
    if(tipo==2){
      this.resultado=this.num1-this.num2
      this.onCalcularClick.emit(this.resultado)
    }
    if(tipo==3){
      this.resultado=this.num1*+this.num2
      this.onCalcularClick.emit(this.resultado)
    }
    if(tipo==4){
      this.resultado=this.num1/this.num2
      this.onCalcularClick.emit(this.resultado)
    }
    if(tipo==5){
      this.resultado=this.num1^this.num2
      this.onCalcularClick.emit(this.resultado)
    }
  }
}
