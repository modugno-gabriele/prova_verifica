import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paperino } from './paperino';

describe('Paperino', () => {
  let component: Paperino;
  let fixture: ComponentFixture<Paperino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paperino]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paperino);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
