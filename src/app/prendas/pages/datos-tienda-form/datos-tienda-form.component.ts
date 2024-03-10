import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datos-tienda-form',
  templateUrl: './datos-tienda-form.component.html',
  styles: ``
})
export class DatosTiendaFormComponent {
  tiendaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tiendaForm = this.fb.group({
      pais: [''],
      provincia: [''],
      ciudad: [''],
      nombreRecoge: [''],
      identificacion: [''],
      telefonoRecoge: [''],
      diaRecogida: [''],
      centroComercial: [''],
      envolverRegalo: [false],
      tiempoRetencion: ['']
    });
  }
}
