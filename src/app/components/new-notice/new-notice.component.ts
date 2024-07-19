import { Component } from '@angular/core';
import { NoticeService } from '../../services/notice.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-new-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-notice.component.html',
  styleUrl: './new-notice.component.css'
})
export class NewNoticeComponent {
  notices:any;
  constructor(private noticeService:NoticeService){}
  ngOnInit(){
    this.noticeService.getAll().subscribe(res=>{
      console.log(res)
      this.notices=res
    })
  }

}
