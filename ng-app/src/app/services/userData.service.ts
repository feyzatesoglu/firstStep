import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
private userData:any;
constructor() { }

register(userData:any){
  this.userData=userData;
}
getUserData(){
  return this.userData;
}
}
