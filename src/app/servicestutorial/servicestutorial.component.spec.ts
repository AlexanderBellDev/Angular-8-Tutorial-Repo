import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicestutorialComponent } from './servicestutorial.component';

describe('ServicestutorialComponent', () => {
  let component: ServicestutorialComponent;
  let fixture: ComponentFixture<ServicestutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicestutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicestutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
