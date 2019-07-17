import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScfLibComponent } from './scf-lib.component';

describe('ScfLibComponent', () => {
  let component: ScfLibComponent;
  let fixture: ComponentFixture<ScfLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScfLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScfLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
