import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SifirurunlerComponent } from './sifirurunler.component';

describe('SifirurunlerComponent', () => {
  let component: SifirurunlerComponent;
  let fixture: ComponentFixture<SifirurunlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SifirurunlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SifirurunlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
