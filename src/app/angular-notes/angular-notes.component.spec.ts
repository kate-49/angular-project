import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNotesComponent } from './angular-notes.component';

describe('AngularNotesComponent', () => {
  let component: AngularNotesComponent;
  let fixture: ComponentFixture<AngularNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
