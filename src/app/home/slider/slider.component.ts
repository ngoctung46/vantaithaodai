import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
const apiKey = `oACmHhkBLWP1cJKQpX-rrA88rgsHROS6`;
const baseUrl = `https://api.mlab.com/api/1/databases/vantaithaodai/collections/bookings?apiKey=${apiKey}`;
const smsApiKey = ``;
const baseSmsUrl = `https://api.speedsms.vn/index.php/sms/send`;
const DISTRICT: String[] = [
  'Quận 1', 'Quận 2', 'Quận 3', 'Quận 4',
  'Quận 5', 'Quận 6', 'Quận 7', 'Quận 8',
  'Quận 9', 'Quận 10', 'Quận 11', 'Quận 12',
  'Quận Tân Bình', 'Quận Tân Phú', 'Quận Bình Tân', 'Quận Bình Thạnh',
  'Quận Gò Vấp', 'Huyện Bình Chánh', 'Huyện Hóc Môn', 'Các Tỉnh Thành Khác', 'TP. Hồ Chí Minh'
];

const PRICES: Price[] = [
  { type: 'Toyota Innova 2018 Du Lịch Có Lái', price1: 150000, price2: 250000, price3: 1300000 },
  { type: 'Xe Lôi Chở Hàng', price1: 5000, price2: 100000, price3: 500000 }
];
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  district: String[] = DISTRICT;
  prices: Price[] = PRICES;
  constructor(private http: HttpClient) { }
  submitted = false;
  booking: Booking;
  ngOnInit() {
    this.reset();
  }

  onSubmit() {
    this.submitted = true;
    this.http.post<Booking>(baseUrl, this.booking, httpOptions).subscribe();
    setTimeout(() => {
      this.submitted = false;
    }, 5000);
    this.reset();
  }
  reset() {
    this.booking = { name: '', phone: '', from: '', to: ''};
  }
}

interface Price {
  type: String;
  price1: Number;
  price2: Number;
  price3: Number;
}

interface Booking {
  name: String;
  phone: String;
  from: String;
  to: String;
}
