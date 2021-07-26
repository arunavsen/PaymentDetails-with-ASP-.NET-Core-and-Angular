import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import{HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  formData: PaymentDetail = new PaymentDetail();
  readonly baseURl = "http://localhost:58167/api/PaymentDetails";

  postPaymentDetail(){
    return this.http.post(this.baseURl,this.formData);
  }
}
