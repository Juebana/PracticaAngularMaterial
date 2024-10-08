import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [FormsModule],
  template: `<h2>Registre</h2>`,
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

  maxDistance = 1200;
  selectedDistances: number[] = [];
  races = [
    { name: '100m llisos', distance: 100 },
    { name: '200m llisos', distance: 200 },
    { name: '400m llisos', distance: 400 },
    { name: '800m llisos', distance: 800 },
    { name: '1000m llisos', distance: 1000 }
  ];

  onCheckboxChange(event: any, raceDistance: number): void {
    if (event.target.checked) {
      this.selectedDistances.push(raceDistance);
    } else {
      const index = this.selectedDistances.indexOf(raceDistance);
      if (index > -1) {
        this.selectedDistances.splice(index, 1);
      }
    }
  }

  get totalDistance(): number {
    return this.selectedDistances.reduce((a, b) => a + b, 0);
  }

  isDisabled(raceDistance: number): boolean {
    return this.totalDistance + raceDistance > this.maxDistance;
  }
}
