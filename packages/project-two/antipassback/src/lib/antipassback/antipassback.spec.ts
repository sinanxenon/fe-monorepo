import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Antipassback } from './antipassback';

describe('Antipassback', () => {
  let component: Antipassback;
  let fixture: ComponentFixture<Antipassback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Antipassback],
    }).compileComponents();

    fixture = TestBed.createComponent(Antipassback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
