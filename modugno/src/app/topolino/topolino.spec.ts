import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topolino } from './topolino';

describe('Topolino', () => {
  let component: Topolino;
  let fixture: ComponentFixture<Topolino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topolino]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topolino);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
