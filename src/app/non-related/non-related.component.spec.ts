import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonRelatedComponent } from './non-related.component';

describe('NonRelatedComponent', () => {
  let component: NonRelatedComponent;
  let fixture: ComponentFixture<NonRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
