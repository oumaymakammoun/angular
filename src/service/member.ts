import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemberModel } from '../Models/MemberModel';


@Injectable({ //decorator le sercice accepte  d etre injecter (appeler) dans les composants ou d'autres services 
  providedIn: 'root', //sur toute la route du projet
})
export class MemberService { 
  constructor(private http:HttpClient){} 
  //generer lles requetes http pour consommer les api du backend
  getALLMembers(){
    return this.http.get<MemberModel[]>('http://localhost:3500/members') ; //etape 2 5arjana requete
  }
  addMemeber(member:MemberModel){
  return this.http.post<void>('http://localhost:3500/members',member) ; 
} //fleche 2
deleteMember(id:string){
  return this.http.delete<void>(`http://localhost:3500/members/${id}`) ;
}
getMemberById(id:string){
  return this.http.get<MemberModel>(`http://localhost:3500/members/${id}`) ;


}
}

