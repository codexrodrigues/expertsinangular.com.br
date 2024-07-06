import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'nave-mae',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <input #naveInput type="text" placeholder="Comando para Nave-Mãe..." class="nave-input">
      <button #commandButton class="command-button">Enviar Comando</button>
      <button (click)="adicionarElemento()" class="command-button">Adicionar Elemento</button>
      <button (click)="removerElemento()" class="command-button">Remover Elemento</button>
      <p #naveResponse class="nave-response">Nave-Mãe: "Aguardando comandos."</p>
      <div #dynamicContainer></div>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      margin-top: 50px;
    }
    .nave-input {
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
    .nave-response {
      margin-top: 20px;
      font-size: 18px;
      color: #900;
    }
    .dynamic-element {
      margin-top: 10px;
      padding: 10px;
      background-color: lightgray;
    }
  `],
})
export class NaveMaeComponent implements AfterViewInit {
  @ViewChild('naveInput') naveInput!: ElementRef;
  @ViewChild('commandButton') commandButton!: ElementRef;
  @ViewChild('naveResponse') naveResponse!: ElementRef;
  @ViewChild('dynamicContainer') dynamicContainer!: ElementRef;

  private dynamicElement: ElementRef | null = null;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.naveInput.nativeElement, 'border', '2px solid blue');
    this.renderer.listen(this.commandButton.nativeElement, 'click', () => this.changeInputColor());
  }

  changeInputColor() {
    this.renderer.setStyle(this.naveInput.nativeElement, 'backgroundColor', 'lightgreen');
    this.renderer.setProperty(this.naveResponse.nativeElement, 'textContent', 'Nave-Mãe: "Comando recebido. Executando..."');
  }

  adicionarElemento() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Elemento Dinâmico Adicionado');
    this.renderer.addClass(div, 'dynamic-element');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.dynamicContainer.nativeElement, div);
    this.dynamicElement = div;
  }

  removerElemento() {
    if (this.dynamicElement) {
      this.renderer.removeChild(this.dynamicContainer.nativeElement, this.dynamicElement);
      this.dynamicElement = null;
    }
  }
}
