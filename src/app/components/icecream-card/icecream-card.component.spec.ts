import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamCardComponent } from './icecream-card.component';

describe('IcecreamCardComponent', () => {
  let component: IcecreamCardComponent;
  let fixture: ComponentFixture<IcecreamCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcecreamCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcecreamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
