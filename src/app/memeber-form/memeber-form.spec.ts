import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeberForm } from './memeber-form';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MemeberForm', () => {
  let component: MemeberForm;
  let fixture: ComponentFixture<MemeberForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeberForm,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeberForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
