import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPege } from './hero-pege';

describe('HeroPege', () => {
  let component: HeroPege;
  let fixture: ComponentFixture<HeroPege>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroPege],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroPege);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
