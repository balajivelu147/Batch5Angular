import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageManualComponent } from './first-page-manual.component';

describe('FirstPageManualComponent', () => {
  let component: FirstPageManualComponent;
  let fixture: ComponentFixture<FirstPageManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
