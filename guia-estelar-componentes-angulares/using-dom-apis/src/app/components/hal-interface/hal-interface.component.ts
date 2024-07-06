import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'hal-interface',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <input #halInput type="text" placeholder="Comando para HAL 9000..." class="hal-input">
      <button (click)="changeInputColor()" class="command-button">Enviar Comando</button>
      <p #halResponse class="hal-response">HAL 9000: "Estou esperando o seu comando, Dave."</p>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      margin-top: 50px;
    }
    .hal-input {
      width: 300px;
      padding: 10px;
      font-size: 16px;
    }
    .command-button {
      margin-left: 10px;
      padding: 10px 20px;
      font-size: 16px;
      background-color: #333;
      color: #fff;
      border: none;
      cursor: pointer;
    }
    .command-button:hover {
      background-color: #555;
    }
    .hal-response {
      margin-top: 20px;
      font-size: 18px;
      color: #900;
    }
  `],
})
export class HalInterfaceComponent implements AfterViewInit {
  @ViewChild('halInput') halInput!: ElementRef;
  @ViewChild('halResponse') halResponse!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.halInput.nativeElement.focus();
    console.log('Elemento raiz do componente:', this.elementRef.nativeElement);
  }

  changeInputColor() {
    this.halInput.nativeElement.style.backgroundColor = 'lightblue';
    this.halResponse.nativeElement.textContent = 'HAL 9000: "Comando recebido, Dave. Executando..."';
  }
}
