import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstiProfileComponent } from './insti-profile.component';

describe('InstiProfileComponent', () => {
  let component: InstiProfileComponent;
  let fixture: ComponentFixture<InstiProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstiProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
