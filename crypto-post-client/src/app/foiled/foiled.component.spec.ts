import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoiledComponent } from './foiled.component';

describe('FoiledComponent', () => {
  let component: FoiledComponent;
  let fixture: ComponentFixture<FoiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoiledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
