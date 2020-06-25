import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsQuotaComponent } from './sports-quota.component';

describe('SportsQuotaComponent', () => {
  let component: SportsQuotaComponent;
  let fixture: ComponentFixture<SportsQuotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsQuotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsQuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
