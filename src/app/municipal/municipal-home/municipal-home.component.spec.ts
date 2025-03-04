import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalHomeComponent } from './municipal-home.component';

describe('MunicipalHomeComponent', () => {
  let component: MunicipalHomeComponent;
  let fixture: ComponentFixture<MunicipalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipalHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
