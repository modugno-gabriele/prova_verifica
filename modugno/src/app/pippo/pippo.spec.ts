import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pippo } from './pippo';

describe('Pippo', () => {
  let component: Pippo;
  let fixture: ComponentFixture<Pippo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pippo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pippo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
