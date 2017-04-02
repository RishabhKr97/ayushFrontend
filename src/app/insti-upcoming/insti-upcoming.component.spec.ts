import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstiUpcomingComponent } from './insti-upcoming.component';

describe('InstiUpcomingComponent', () => {
  let component: InstiUpcomingComponent;
  let fixture: ComponentFixture<InstiUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstiUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstiUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
