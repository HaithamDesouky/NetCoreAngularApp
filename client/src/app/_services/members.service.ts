// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { Member } from '../_models/member';

// @Injectable({
//   providedIn: 'root',
// })
// export class MembersService {
//   baseUrl = environment.apiUrl;

//   constructor(private http: HttpClient) {}

//   getAllMembers() {
//     return this.http.get<Member[]>(this.baseUrl + 'users');
//   }

//   getSingleMember(username: Member) {
//     return this.http.get<Member>(this.baseUrl + 'users/' + username);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  getSingleMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
}
