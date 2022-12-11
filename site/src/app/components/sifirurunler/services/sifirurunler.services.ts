import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    'providedIn': 'root',
})
export class SifirUrunlerService {

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<any>('assets/sifir-veriler/sifirurunler.json')
        .toPromise()
        .then(res => <any[]>res.data)
        .then(data => { return data; });
    }


}