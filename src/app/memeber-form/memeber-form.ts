import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MemberService } from '../../service/member';

@Component({
  selector: 'app-memeber-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './memeber-form.html',
  styleUrl: './memeber-form.css'
})
export class MemeberForm implements OnInit {
  form!: FormGroup;

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      cin: new FormControl(''),
      name: new FormControl(''),
      type: new FormControl(''),
      createdDate: new FormControl('')
    });
  }

  sub(): void {
    console.log(this.form.value);
    this.memberService.addMemeber(this.form.value).subscribe(() => {
      this.router.navigate(['/members']);
    });
  }
}