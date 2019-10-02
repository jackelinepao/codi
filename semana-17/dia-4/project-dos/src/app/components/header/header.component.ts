import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //title = 'Titulo de Proyecto';
  marca: string = "Codigo";
  sesion: boolean = true;
  links: Array<string> = ['Nosotros', 'Portafolio', 'contacto'];
}
