import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeberForm } from './memeber-form';

describe('MemeberForm', () => {
  let component: MemeberForm;
  let fixture: ComponentFixture<MemeberForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeberForm]
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
