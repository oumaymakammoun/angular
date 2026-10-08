import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../../service/member';

@Component({
  selector: 'app-memeber-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './memeber-form.html',
  styleUrl: './memeber-form.css'
})
export class MemeberForm implements OnInit {

  form!: FormGroup;
  idcourant!: string;

  constructor(
    private memberService: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    // Récupérer l'id de la route active
    this.idcourant =
      this.activatedRoute.snapshot.paramMap.get('id') || '';

    // Si un id existe => mode modification
    if (this.idcourant) {

      this.memberService.getMemberById(this.idcourant).subscribe(
        (member) => {
          this.form = new FormGroup({
            id: new FormControl(member.id),
            name: new FormControl(member.name),
            type: new FormControl(member.type),
            createdDate: new FormControl(member.createdDate)
          });
        }
      );

    } else {

      // Sinon => mode création
      this.form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(''),
        type: new FormControl(''),
        createdDate: new FormControl('')
      });

    }
  }

  sub(): void {
    console.log(this.form.value);

    this.memberService.addMemeber(this.form.value).subscribe(() => {
      this.router.navigate(['/members']);
    });
  }
}