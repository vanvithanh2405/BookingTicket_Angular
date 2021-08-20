import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {
  DanhSachGhe: any[] = [
    { SoGhe: 1, TenGhe: 'Số 1', Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: 'Số 2', Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: 'Số 3', Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: 'Số 4', Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: 'Số 5', Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: 'Số 6', Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: 'Số 7', Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: 'Số 8', Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: 'Số 9', Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: 'Số 10', Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: 'Số 11', Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: 'Số 12', Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: 'Số 13', Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: 'Số 14', Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: 'Số 15', Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: 'Số 16', Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: 'Số 17', Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: 'Số 18', Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: 'Số 19', Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: 'Số 20', Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: 'Số 21', Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: 'Số 22', Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: 'Số 23', Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: 'Số 24', Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: 'Số 25', Gia: 100, TrangThai: true },
    { SoGhe: 26, TenGhe: 'Số 26', Gia: 100, TrangThai: true },
    { SoGhe: 27, TenGhe: 'Số 27', Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: 'Số 28', Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: 'Số 29', Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: 'Số 30', Gia: 100, TrangThai: false },
    { SoGhe: 31, TenGhe: 'Số 31', Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: 'Số 32', Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: 'Số 33', Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: 'Số 34', Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: 'Số 35', Gia: 100, TrangThai: false },
  ]
  soGheDaDat: number = 0;
  soGheConLai: number = 0;
  danhSachGheDangDat: any[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let ghe of this.DanhSachGhe){
      if (!ghe.TrangThai){
         this.soGheConLai += 1;
      }
    };
  }

  DatGheParent = (trangThai: any, ghe: any) => {
    if (trangThai === true) {
      this.soGheDaDat += 1;
      this.soGheConLai -= 1;
      this.danhSachGheDangDat.push(ghe)
    } else {
      this.soGheDaDat -= 1;
      this.soGheConLai += 1;
      for (let index in this.danhSachGheDangDat) {
        if (this.danhSachGheDangDat[index].SoGhe === ghe.SoGhe){
          this.danhSachGheDangDat.splice(parseInt(index),1);
        }
      }
    }
    console.log(this.danhSachGheDangDat)
  }

  ThemGhe = (gheDuocThem:any) => {
    this.DanhSachGhe.push(gheDuocThem)
  }
}


