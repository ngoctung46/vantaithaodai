import { Component, OnInit } from '@angular/core';

const SERVICES: Service[] = [
  {
    name: 'Đưa Rước Khách Tại Sân Bay',
    description: `Chúng tôi cung cấp dịch vụ đưa và đón khách tại sân bay với giá rẻ bất ngờ. Xe du lịch đời mới và tài xế thân thiện.
                 Chúng tôi đảm bảo các bạn sẽ hài lòng với dịch vụ mà chúng tôi cung cấp`
  },
  {
    name: 'Tour Tham Quan Thành Phố',
    description: `Vận Tải Thảo Đại tự hào cung cấp cho các bạn tour tham quan Thành Phố Hồ Chí Minh. Đưa các bạn tới bất cứ nơi đâu bạn muốn
                  với chi phí cực kỳ tiết kiệm. Hãy nhanh tay gọi hoặc đặt xe để trải nghiệm dịch vụ tuyệt vời này của chúng tôi`
  },
  {
    name: 'Tour Tham Quan Tỉnh',
    description: `Bạn và gia đình đang có kế hoạch đi chơi xa nhưng không biết phải tìm ở đâu một chiếc xe an toàn,
                  một tài xế thân thiện cho chuyến đi chơi của gia đình. Đừng lo, hãy đến với Vận Tải Thảo Đại,
                  chúng tôi tự hào sẽ mang đến cho bạn một chuyến đi an toàn và ấm cúng nhất`
  },
  {
    name: 'Chuyển nhà và văn phòng trọn gói',
    description: `Bạn đang cần chuyển nhà hay văn phòng mà không biết tìm ở đâu một dịch vụ tin cậy. Đến với vận tải
                  Thảo Sần, chúng tôi sẽ cung cấp cho bạn dịch vụ đóng hàng, bốc xếp và chuyển hàng trọn gói tới bất
                  cứ nơi đâu với giá rẻ giập mình. Đảm bảo sẽ không làm bạn thất vọng`
  },
  {
    name: 'Giao hàng bằng xe lôi',
    description: `Đặc biệt chúng tôi có hệ thống xe lôi hùng hậu, có thể vận chuyển những hàng hóa nhỏ gọn và nhanh chóng.
                  Đảm bảo luôn chính xác về thời gian và uy tín về dịch vụ. Thêm vào đó, giá cả sẽ cực kỳ rẻ, hợp lý, và
                  cạnh tranh. Đừng chần chờ gì nữa, hãy nhanh tay gọi cho chúng tôi`
  },
  {
    name: 'Vận chuyển hành khách rẻ hơn giá Grab',
    description: `Chúng tôi tự hào cung cấp cho các bạn dịch vụ vận chuyển hành khách theo giá của taxi công nghệ. Số tiền
                  bạn phải sẽ chúng tôi cam đoan luôn rẻ hơn giá Grab hiện tại.`
  }
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  services = SERVICES;
  constructor() { }

  ngOnInit() {
  }

}

interface Service {
  name: String;
  description: String;
}
