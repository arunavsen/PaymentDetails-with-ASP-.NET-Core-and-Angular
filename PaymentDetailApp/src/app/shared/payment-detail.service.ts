import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor(private http: HttpClient) {}

  formData: PaymentDetail = new PaymentDetail();
  readonly baseURl = 'http://localhost:58167/api/PaymentDetails';
  list: PaymentDetail[];

  postPaymentDetail() {
    return this.http.post(this.baseURl, this.formData);
  }

  refreshList() {
    this.http
      .get(this.baseURl)
      .toPromise()
      .then((res) => (this.list = res as PaymentDetail[]));
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURl}/${this.formData.pmid}`,this.formData);
  }

  deletePaymentDetail(id:number){
    return this.http.delete(`${this.baseURl}/${id}`);
  }
}
