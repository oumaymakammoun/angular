import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MemberModel } from '../../Models/MemberModel';
import { MemberService } from '../../service/member';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import{RouterLink} from '@angular/router';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-member',
  imports: [CommonModule,MatTableModule,MatIconModule,RouterLink],
  templateUrl: './member.html',
  styleUrl: './member.css'
})
export class Member implements OnInit {

  dataSource: MemberModel[] = [];

  constructor(private MS: MemberService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.MS.getALLMembers().subscribe((response) => {
      this.dataSource = response;
    });
  }
  displayedColumns: string[] = ['1', '2', '3', '4', '5'];
  delete(id: string): void {
    //ouvrir la boite 
    let dialogRef = this.dialog.open(ConfirmDialog);
    // lancement du thread 

    //attendre le click 
    dialogRef.afterClosed().subscribe((v)=> {
      if (v) {
        
           this.MS.deleteMember(id).subscribe(() => { ///////////
      this.ngOnInit();
           }
           
      );
      }
    });
  }
}
