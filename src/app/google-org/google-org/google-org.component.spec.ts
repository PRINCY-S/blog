import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleOrgComponent } from './google-org.component';

describe('GoogleOrgComponent', () => {
  let component: GoogleOrgComponent;
  let fixture: ComponentFixture<GoogleOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
