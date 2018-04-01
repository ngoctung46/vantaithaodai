import { Component, OnInit } from '@angular/core';

const MENU: MenuItem[] = [
  { name: 'Trang Chủ', url: '/home', subMenu: [] },
  { name: 'Dịch Vụ', url: '/service', subMenu: [] },
  { name: 'Đội Ngũ', url: '/team', subMenu: [] },
  { name: 'Hình Ảnh', url: '/gallery', subMenu: [] },
  { name: 'Liên Hệ', url: '/contact', subMenu: [] }
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu: MenuItem[] = MENU;
  constructor() { }

  ngOnInit() {
  }

}

interface MenuItem {
  name: String;
  url: String;
  subMenu: MenuItem[];
}
