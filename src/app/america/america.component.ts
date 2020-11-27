import { Component } from '@angular/core';

@Component({
  selector: 'app-america',
  template: `
  
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31536306.714862086!2d-54.01447990393665!3d-20.38062741924525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1583676893900!5m2!1ses!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
<ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link" routerLink="chile">Chile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="argentina">Argentina</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" routerLink="uruguay">Uruguay</a>
      </li>    
  </ul>
  <router-outlet></router-outlet>

  `,
  styles: ['']
})
export class AmericaComponent {}