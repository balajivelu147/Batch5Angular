import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UGComponent } from './ug.component';

describe('UGComponent', () => {
  let component: UGComponent;
  let fixture: ComponentFixture<UGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
