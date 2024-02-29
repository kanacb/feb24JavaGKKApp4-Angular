import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-headerpage',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './headerpage.component.html',
  styleUrl: './headerpage.component.scss',
})
export class HeaderpageComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-Home',
        routerLink: '/',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-phone',
        routerLink: '/contact',
      },
      {
        label: 'Login',
        icon: 'pi pi-fw pi-sign-in',
        routerLink: '/login',
      },
      {
        label: 'Sign Up',
        icon: 'pi pi-fw pi-sign-in',
        routerLink: '/signup',
      },
    ];
  }
}
