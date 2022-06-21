import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialToolbarStickyComponent } from './material-toolbar-sticky.component';

describe('MaterialToolbarStickyComponent', () => {
  let component: MaterialToolbarStickyComponent;
  let fixture: ComponentFixture<MaterialToolbarStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialToolbarStickyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialToolbarStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
