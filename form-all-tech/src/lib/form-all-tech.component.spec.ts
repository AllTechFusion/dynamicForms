import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAllTechComponent } from './form-all-tech.component';

describe('FormAllTechComponent', () => {
  let component: FormAllTechComponent;
  let fixture: ComponentFixture<FormAllTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAllTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAllTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
