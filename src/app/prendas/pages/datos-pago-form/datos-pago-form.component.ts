import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-pago-form',
  templateUrl: './datos-pago-form.component.html',
  styles: ``
})
export class DatosPagoFormComponent {
  pagoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.pagoForm = this.formBuilder.group({
      formaPago: ['', Validators.required],
      banco: [''],
      propietarioTarjeta: ['', Validators.required],
      numeroTarjeta: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{16}')])],
      fechaExpiracion: ['', Validators.required],
      codigoSeguridad: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{3}')])],
      cuotas: ['', Validators.required],
      facturaElectronica: [false],
      aceptarTerminos: [false, Validators.requiredTrue]
    });
   }

  ngOnInit() {
    
  }

  onSubmit() {
    if (this.pagoForm.valid) {
      // Procesar el formulario
      console.log(this.pagoForm.value);
    }
  }
}
