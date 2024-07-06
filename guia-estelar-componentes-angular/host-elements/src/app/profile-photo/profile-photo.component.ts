import { Component } from '@angular/core';

/**
 * ProfilePhotoComponent
 *
 * Este componente é responsável por exibir a foto de perfil do usuário.
 * Ele é um componente standalone e não importa nenhum outro módulo.
 */
@Component({
  selector: 'profile-photo', // Seletor do componente utilizado no HTML
  standalone: true,
  imports: [],
  template: `
    <!-- Template que define o layout do componente -->
    <img src="assets/images/profile-photo.jpg" alt="Your profile photo" />
  `,
  styles: [`
    /* Estilos aplicados ao componente */
    img {
      width: 300px;           /* Largura da imagem */
      height: 300px;          /* Altura da imagem */
      border: 1px solid #000; /* Define a cor e a espessura da moldura */
      border-radius: 10%;     /* Deixa a imagem circular, se desejado */
    }
  `],
  host: {
    'role': 'presentation', // Define o papel de acessibilidade do elemento
    '[id]': 'id',           // Define o ID do elemento como a propriedade 'id' do componente
  }
})
export class ProfilePhotoComponent {
  /**
   * ID do elemento, utilizado para acessibilidade e identificação.
   */
  id = 'profile-photo-1';
}
