import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstiHistoryComponent } from './insti-history.component';

describe('InstiHistoryComponent', () => {
  let component: InstiHistoryComponent;
  let fixture: ComponentFixture<InstiHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstiHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstiHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
