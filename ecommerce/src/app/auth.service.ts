import {
  Injectable, EventEmitter
}

from '@angular/core';

import {
  Http,
  Response,
  Headers,
}

from '@angular/http';

import {
  map,
  catchError,
}

from 'rxjs/operators';

import {
  pipe,
  Observable,
  throwError
}

from 'rxjs';

import {
  HttpErrorResponse, HttpResponse
}

from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  }

) export class AuthService 
{
  private loginStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  url = 'http://localhost:3000/api/';

  constructor(private _http: Http) {}

  setLogIn(value: boolean, id: string,email:string) {
    this.loginStatus = value;
    localStorage.setItem('loggedIn', value.toString());
    localStorage.setItem('loginId', id)
    localStorage.setItem('userEmail', email);
  }

  setLogOut(value:boolean, id:string) 
  {
    localStorage.setItem('loggedIn', value.toString());
    localStorage.setItem('loginId', "");
    localStorage.setItem('userEmail',"")
  }

  isLoggedIn() 
  {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loginStatus.toString());
  }

  getlogin(data: any) 
  {
    //console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(this.url + "users/login", data).pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError))
  }

  getLogOut() {
    // console.log('getLogout method called with ID ' + localStorage.getItem('loginId'));
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let access_token = localStorage.getItem('loginId');
    return this._http.post(this.url + "/users/logout?access_token=" + access_token, "").pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError))
  }

  userRegister(data: any) {
    // console.log(data)
    let headers = new Headers();
    headers.append('Content-Type', 'application.json');
    return this._http.post(this.url + "users", data).pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError))
  }


  getUserDetails() {

  }

  saveProduct(data)
  {
    // console.log(data)
    let headers = new Headers();
    headers.append('Content-Type', 'application.json');
    return this._http.post(this.url+"products", data).pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError))
  }

  getProductData(): Observable<Response>
  {
    return this._http.get(this.url+"products").pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError));
  }


  saveProfile(data)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application.json');
    return this._http.put(this.url+"profiles", data).pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError))
  }

  updateProfile(data,id)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application.json');
    return this._http.put(this.url+"profiles/"+id, data).pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError))
  }

  retrieveProfile() :Observable<Response>
  {

    return this._http.get(this.url+"profiles").pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError));

  }



  deleteProduct(id)
  {
    return this._http.delete(this.url+"products/"+id).pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError));

  }


  updateProduct(data,id)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application.json');
    return this._http.put(this.url+"products/"+id, data).pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError))
  }


  saveToCart(data)
  {
    console.log(data)
    let headers = new Headers();
    headers.append('Content-Type', 'application.json');
    return this._http.post(this.url+"carts", data).pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError))
  }

  getFromCart()
  {
    return this._http.get(this.url+"carts").pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError));
  }


  updateCart(data,id)
  {
    // console.log(data)
    let headers = new Headers();
    headers.append('Content-Type', 'application.json');
    return this._http.put(this.url+"carts/"+id,data).pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError))
  }

  removeFromCart(id)
  {
    return this._http.delete(this.url+"carts/"+id).pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError));

  }


  setOrders(data)
  {
    // console.log(data)
    let headers = new Headers();
    headers.append('Content-Type', 'application.json');
    return this._http.put(this.url+"orders",data).pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError))
  }

  getOrders()
  {
    return this._http.get(this.url+"orders").pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError));

  }

  updateOrders(data,id)
  {
    // console.log(data)
    console.log("THis function")
    let headers = new Headers();
    headers.append('Content-Type', 'application.json');
    return this._http.put(this.url+"orders/"+id,data).pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError))
  }


  countCart()
  {
    return this._http.get(this.url+"carts/count").pipe(map((res: Response) => AuthService.json(res)), catchError(this.handleError));
  }
  
  private handleError(error) 
  {
    if (error.status == 422) {
      return throwError("Email Already Exists, Please Login");
    } else if (error.status == 401) {
      return throwError("Email/Password Incorrect!");
    } else {
      return throwError("Server Error, Try Again")
    }
  }

  private static json(res: Response): any {
    return res.text() === "" ? res : res.json();
  }
}
