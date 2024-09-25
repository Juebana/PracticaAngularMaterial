import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreComponent } from './registre.component';

let component: RegistreComponent;
let fixture: ComponentFixture<RegistreComponent>;
let compiled:HTMLElement;

function getNthLabelContent(index:number){
  return compiled.querySelectorAll('label')[index];
};

function getInputFromLabel(index:number){
  return getNthLabelContent(index)!.querySelector("input");
};

function getNthSectionContent(index:number){
  return compiled.querySelectorAll('section')[index];
};

describe('RegistreComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled=fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title Inscripció proves atletisme', () => {
    expect(compiled.querySelector('h1')?.textContent).toBe('Inscripció proves atletisme');
  });

  it('should have a title Dades identificatives inside the first section', () => {
    expect(getNthSectionContent(0).querySelector('h1')?.textContent).toBe('Dades identificatives');
  });

  it('should have the labels DNI:, Codi de federat:, Nom i cognoms:, Telèfon:, Email:, inside the first section', () => {
    expect(getNthLabelContent(0)?.textContent).toBe('DNI: ');
    expect(getNthLabelContent(1)?.textContent).toBe('Codi de federat: ');
    expect(getNthLabelContent(2)?.textContent).toBe('Nom i cognoms: ');
    expect(getNthLabelContent(3)?.textContent).toBe('Telèfon: ');
    expect(getNthLabelContent(4)?.textContent).toBe('Email: ');
  })

  it('should have input fields for DNI, Codi de federat, Nom i cognoms, Telèfon i Email', () => {
    const inputDNI:HTMLInputElement|null = getInputFromLabel(0);
    const inputCodiFederat:HTMLInputElement|null = getInputFromLabel(1);
    const inputNomCognoms:HTMLInputElement|null = getInputFromLabel(2);
    const inputTelefon:HTMLInputElement|null = getInputFromLabel(3);
    const inputEmail:HTMLInputElement|null = getInputFromLabel(4);

    expect(inputDNI!.getAttribute('type')).toBe('text');
    expect(inputCodiFederat!.getAttribute('type')).toBe('text');
    expect(inputNomCognoms!.getAttribute('type')).toBe('text');
    expect(inputTelefon!.getAttribute('type')).toBe('text');
    expect(inputEmail!.getAttribute('type')).toBe('email');
  });

  it('should have a title Inscripció inside the second section', () => {
    expect(getNthSectionContent(1).querySelector('h1')?.textContent).toBe('Inscripció');
  })
  
  it('should have 5 checkboxes', () => {
    const checkboxes = compiled.querySelectorAll('input[type="checkbox"]');
    expect(checkboxes.length).toBe(5);
  });

  it('should have labels for the 5 checkboxes', () => {
    expect(getNthLabelContent(5)?.textContent).toBe('100m llisos ');
    expect(getNthLabelContent(6)?.textContent).toBe('200m llisos ');
    expect(getNthLabelContent(7)?.textContent).toBe('400m llisos ');
    expect(getNthLabelContent(8)?.textContent).toBe('800m llisos ');
    expect(getNthLabelContent(9)?.textContent).toBe('1000m llisos ');
  })

  it('should autocomplete the last letter of the DNI field when entered 8 numbers', () => {
    const inputDNI = getInputFromLabel(0)!;
    inputDNI.value = '12345678';
    inputDNI.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputDNI.value).toBe('12345678Z');
  })

});

describe('button component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled=fixture.nativeElement as HTMLElement;
  });

  it('should have a submit button', () => {
    const submitButton = compiled.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();
    expect(submitButton!.textContent).toBe('Inscripció');
  })
});
