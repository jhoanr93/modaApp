import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrendasRoutingModule } from './prendas-routing.module';
import { ListComponent } from './pages/list/list.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { DatosClienteFormComponent } from './pages/datos-cliente-form/datos-cliente-form.component';
import { DatosTiendaFormComponent } from './pages/datos-tienda-form/datos-tienda-form.component';
import { DatosEnvioFormComponent } from './pages/datos-envio-form/datos-envio-form.component';
import { DatosPagoFormComponent } from './pages/datos-pago-form/datos-pago-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    LayoutPageComponent,
    DatosClienteFormComponent,
    DatosTiendaFormComponent,
    DatosEnvioFormComponent,
    DatosPagoFormComponent
  ],
  imports: [
    CommonModule,
    PrendasRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PrendasModule { }
