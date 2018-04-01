import { Component, OnInit } from '@angular/core';

const STAFFS: Staff[] = [
  { name: 'Nguyễn Trọng Đại', position: 'Chủ cơ sở', job: 'Tài xế xe du lịch', url: 'dai.jpg', phone: `0166 2733 163` },
  { name: 'Nguyễn Khương', position: 'Nhân viên', job: 'Tài xế xe lôi' , url: 'khuong.jpg', phone: `0938 809 6065`},
  { name: 'Đinh Thị Thảo Chinh', position: 'Nhân viên', job: 'Nhân viên chăm sóc khách hàng', url: 'thao.jpg', phone: `0906093002` },
  { name: 'Nguyễn Thị Hằng', position: 'Nhân viên', job: 'Nhân viên chăm sóc khách hàng', url: 'team4.jpg', phone: `01657115741`}
];
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staffs = STAFFS;
  constructor() { }

  ngOnInit() {
  }

}

interface Staff {
  name: String;
  position: String;
  job: String;
  phone: String;
  url: String;
}
