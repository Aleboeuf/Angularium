import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickheaderComponent } from './stickheader.component';

describe('StickheaderComponent', () => {
  let component: StickheaderComponent;
  let fixture: ComponentFixture<StickheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
