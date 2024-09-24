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

  it('should have a subtitle Dades identificatives', () => {
    expect(compiled.querySelector('h2')?.textContent).toBe('Dades identificatives');
  });

  it('should have the labels DNI:, Codi de federat:, Nom i cognoms:, Telèfon:, Email:', () => {
    expect(getNthLabelContent(0)?.textContent).toBe('DNI: ');
    expect(getNthLabelContent(1)?.textContent).toBe('Codi de federat: ');
    expect(getNthLabelContent(2)?.textContent).toBe('Nom i cognoms: ');
    expect(getNthLabelContent(3)?.textContent).toBe('Telèfon: ');
    expect(getNthLabelContent(4)?.textContent).toBe('Email: ');
  })
});
