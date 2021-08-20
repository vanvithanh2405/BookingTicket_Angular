import { DanhSachGheComponent } from './../danh-sach-ghe/danh-sach-ghe.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-dsghe',
  templateUrl: './edit-dsghe.component.html',
  styleUrls: ['./edit-dsghe.component.scss']
})
export class EditDSGheComponent implements OnInit {

  @ViewChild(DanhSachGheComponent) tagDanhSachGhe!:DanhSachGheComponent;
  constructor() { }
  themGheParent = (...thamSo:any[]) => {
    let gheDuocThem = {
      SoGhe: thamSo[0],
      TenGhe: thamSo[1],
      gia: thamSo[2],
      trangThai: thamSo[3]
    }
    if (thamSo[3] === 'false'){
      gheDuocThem.trangThai = false;
    } else if(thamSo[3] === 'true'){
      gheDuocThem.trangThai = true;
    }
    this.tagDanhSachGhe.ThemGhe(gheDuocThem)
    console.log(gheDuocThem)
  }
  ngOnInit(): void {
  }

}
