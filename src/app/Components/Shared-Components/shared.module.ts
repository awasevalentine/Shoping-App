import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/Core/Angular-material/angular-material.module';
import { MatCarouselModule } from '@ngbmodule/material-carousel';


const route: Routes = [
  {
    path: '', component: DefaultLayoutComponent,
    children: [
      {
        path: '', component: HomePageComponent
      }
    ]
  }
]

export const sharedModuleRouting = RouterModule.forChild(route);


@NgModule({
  declarations: [HeaderComponent, FooterComponent, DefaultLayoutComponent, HomePageComponent],
  imports: [
    CommonModule,
    sharedModuleRouting,
    AngularMaterialModule,
    MatCarouselModule.forRoot()
  ]
})
export class SharedModule { }
