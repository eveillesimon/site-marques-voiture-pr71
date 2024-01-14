import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {
  }
  home(): void {
    this.router.navigate(["/", "brands"]);
  }

  addBrand(): void {
    this.router.navigate(["/", "addbrand"])
  }

  addModel(): void {
    this.router.navigate(["/", "addmodel"]);
  }

  contact(): void {
    this.router.navigate(["/", "contact"]);
  }
}
