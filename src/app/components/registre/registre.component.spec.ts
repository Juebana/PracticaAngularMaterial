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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title Inscripció proves atletismes', () => {
    expect(compiled.querySelector('h1')?.textContent).toBe('Inscripció proves atletismes');
  });
});
