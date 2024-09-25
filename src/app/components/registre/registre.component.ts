import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent {
  dni: string = '';

  onDNIInput(): void {
    if (this.dni.length === 8 && /^[0-9]+$/.test(this.dni)) {
      const dniNumber = parseInt(this.dni, 10);
      const letra = this.calculateDNILetter(dniNumber);
      this.dni = `${this.dni}${letra}`;
      const dniInput = document.querySelector('input[type="text"]') as HTMLInputElement;
      dniInput.value = this.dni;
    }
  }

  calculateDNILetter(dni: number): string {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return letras[dni % 23];
  }
}
