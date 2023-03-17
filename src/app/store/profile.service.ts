import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIUrl } from '../apiUrl';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userId = '1';
  bearerToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huQHVzZXIuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkREs4VjBDOUhOYXA0Q2pWZTllSEpZT2NLb3lMWktMVUZlakU3ZUtJSzFYeXdoU3d6bVZQQk8iLCJyb2xlIjoiVVNFUiIsImNyZWF0ZWRBdCI6IjIwMjMtMDItMTNUMTE6NTQ6NDkuNTUyWiIsInByb2ZpbGUiOnsidXNlcklkIjoxLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJIYXJ2ZXkiLCJhZGRyZXNzIjoiMzEzNiBIYXZlbiBMYW5lLCBNdWxsaWtlbiwgTUkgNDg4NjEifSwiY2FydCI6W3siaWQiOjEsInF1YW50aXR5Ijo2LCJ0b3RhbFByaWNlIjo1OS45NCwiY3JlYXRlZEF0IjoiMjAyMy0wMy0wNFQwOToxMTozNi44NzNaIiwicHJvZHVjdElkIjoxLCJvcmRlcklkIjpudWxsLCJ1c2VySWQiOjF9LHsiaWQiOjIsInF1YW50aXR5Ijo2LCJ0b3RhbFByaWNlIjoxNDk5Ljk0LCJjcmVhdGVkQXQiOiIyMDIzLTAzLTA0VDA5OjE0OjMzLjg1OFoiLCJwcm9kdWN0SWQiOjIsIm9yZGVySWQiOm51bGwsInVzZXJJZCI6MX0seyJpZCI6MywicXVhbnRpdHkiOjEsInRvdGFsUHJpY2UiOjc5Ljk5LCJjcmVhdGVkQXQiOiIyMDIzLTAzLTA0VDA5OjE1OjU0LjE0M1oiLCJwcm9kdWN0SWQiOjMsIm9yZGVySWQiOm51bGwsInVzZXJJZCI6MX0seyJpZCI6NCwicXVhbnRpdHkiOjEsInRvdGFsUHJpY2UiOjQuOTksImNyZWF0ZWRBdCI6IjIwMjMtMDMtMDRUMDk6MTU6NTUuODUxWiIsInByb2R1Y3RJZCI6NSwib3JkZXJJZCI6bnVsbCwidXNlcklkIjoxfSx7ImlkIjo1LCJxdWFudGl0eSI6MSwidG90YWxQcmljZSI6MjkuOTksImNyZWF0ZWRBdCI6IjIwMjMtMDMtMDRUMDk6MTU6NTcuMjQxWiIsInByb2R1Y3RJZCI6Niwib3JkZXJJZCI6bnVsbCwidXNlcklkIjoxfV0sImlhdCI6MTY3NzkzNDU0MX0.RULFcFR_1LgNcMs_azUT4W4WV7MPqkEeg87e2PhN0KQ';

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<any>(APIUrl + `/users/${this.userId}`, {
      headers: {
        authorization: `Bearer ${this.bearerToken}`,
      },
    });
  }

  updateProfile(firstName: string, lastName: string, address: string) {
    return this.http.put<any>(
      APIUrl + `/users/${this.userId}`,
      {
        firstName,
        lastName,
        address,
      },
      {
        headers: {
          authorization: `Bearer ${this.bearerToken}`,
        },
      }
    );
  }
}
