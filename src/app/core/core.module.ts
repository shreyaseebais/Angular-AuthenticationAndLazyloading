import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatMenuModule
  ],
  declarations: [
    CoreComponent, 
    SidebarComponent, 
    HeaderComponent, 
    FooterComponent, 
    LayoutComponent, NavbarComponent
  ]
})
export class CoreModule { }
