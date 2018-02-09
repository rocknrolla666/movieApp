import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFavoriteComponent } from './toggle-favorite.component';

describe('ToggleFavoriteComponent', () => {
  let component: ToggleFavoriteComponent;
  let fixture: ComponentFixture<ToggleFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
