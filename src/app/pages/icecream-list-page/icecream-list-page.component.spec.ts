import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamListPageComponent } from './icecream-list-page.component';

describe('IcecreamListPageComponent', () => {
  let component: IcecreamListPageComponent;
  let fixture: ComponentFixture<IcecreamListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcecreamListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcecreamListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
