import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-notice',
  standalone: true,
  imports: [],
  templateUrl: './view-notice.component.html',
  styleUrl: './view-notice.component.css'
})
export class ViewNoticeComponent {
  notices:any;
  constructor(private http:HttpClient){};
  ngOnInit(){
    this.http.get("http://www.gpadp.org.in/noticedata.php").subscribe(res=>{
      console.log(res)
      this.notices=res
    })
  }
}
