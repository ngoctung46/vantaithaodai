import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
const apiKey = `oACmHhkBLWP1cJKQpX-rrA88rgsHROS6`;
const baseUrl = `https://api.mlab.com/api/1/databases/vantaithaodai/collections/contacts?apiKey=${apiKey}`;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: Contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  };
  submitted = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post<Contact>(baseUrl, this.model, httpOptions).subscribe();
    this.submitted = true;
  }
}

interface Contact {
  name: String;
  email: String;
  subject: String;
  message: String;
  phone: String;
}
