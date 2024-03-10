import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-envio-form',
  templateUrl: './datos-envio-form.component.html',
  styles: ``
})
export class DatosEnvioFormComponent {
  envioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.envioForm = this.fb.group({
      pais: ['', Validators.required],
      provincia: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      conjuntoCasa: [''],
      nombreEdificio: [''],
      apartamento: [''],
      codigoPostal: ['', Validators.required],
      horasDisponibilidad: [''],
      recepcion: ['persona', Validators.required]
    });
  }
}
