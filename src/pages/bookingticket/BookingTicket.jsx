// [
//     {
//         "idGhe": "c09f5b07-b50f-4b63-be06-719d9fd87c95",
//         "idSuatChieu": "872aa6c4-61b6-45c7-ab82-01031d59e3e8",
//         "loaiGhe": "Premium",
//         "hang": null,
//         "cot": null,
//         "trangThai": -1,
//         "gia": 45000.0,
//         "idHoaDon": null
//     },
//     {
//         "idGhe": "322c4a9e-f0a1-44bf-af96-8445ac7727ab",
//         "idSuatChieu": "872aa6c4-61b6-45c7-ab82-01031d59e3e8",
//         "loaiGhe": "Premium",
//         "hang": null,
//         "cot": null,
//         "trangThai": 1,
//         "gia": 50000.0,
//         "idHoaDon": "8e4c712e-db94-4d49-b8ab-081b2276bd94"
//     },
//     {
//         "idGhe": "322c4a9e-f0a1-44bf-af96-8445ac7727ab",
//         "idSuatChieu": "872aa6c4-61b6-45c7-ab82-01031d59e3e8",
//         "loaiGhe": "Premium",
//         "hang": null,
//         "cot": null,
//         "trangThai": -1,
//         "gia": 45000.0,
//         "idHoaDon": null
//     },
//     {
//         "idGhe": "443a5f94-7766-4171-aa6d-035fc287d9ca",
//         "idSuatChieu": "872aa6c4-61b6-45c7-ab82-01031d59e3e8",
//         "loaiGhe": "Executive",
//         "hang": null,
//         "cot": null,
//         "trangThai": 1,
//         "gia": 100000.0,
//         "idHoaDon": "ff69f9cf-b21e-4bbe-90c4-45b04d31d313"
//     },
//     {
//         "idGhe": "f0f00869-a3ea-4a04-80f2-b8bf6172a41d",
//         "idSuatChieu": "872aa6c4-61b6-45c7-ab82-01031d59e3e8",
//         "loaiGhe": "Premium",
//         "hang": null,
//         "cot": null,
//         "trangThai": -1,
//         "gia": 45000.0,
//         "idHoaDon": null
//     }
// ]
import React from 'react'
import "../../assets/css/bookingticket.css"
import ghechudat from "../../assets/image/seat/ghechuadat.png";
import ghedangchon from "../../assets/image/seat/ghedangchon.png";
import ghedangduocgiu from "../../assets/image/seat/ghedangduocgiu.png";
import ghedathanhtoan from "../../assets/image/seat/ghedathanhtoan.png";
import ghedatruoc from "../../assets/image/seat/ghedatruoc.png";

const BookingTicket = () => {
  return (
    <div className="booking-tiket container ">
      <div className="row">
      <div className="col-9 cemina">
        <div className="container-fluid cemina-detail">
          <div className="limitage text-center text-danger p-3">Phim này không dành cho Khán giá dưới 16 tuổi
          </div>
          <div className="cemina-seat">
            <div className="cemina-style-seat mt-2">
              <div className="seat-status d-flex justify-content-around">
                <div className="p-2 d-flex flex-wrap align-items-center"><img src={ghechudat} alt="" />
                  <span className="seat-text-status px-1">Ghế trống</span>
                </div>
                <div className="p-2 d-flex flex-wrap align-items-center"><img src={ghedangchon} alt="" />
                  <span className="seat-text-status px-1">Ghế đang chọn</span>
                </div>
                <div className="p-2 d-flex flex-wrap align-items-center"><img src={ghedangduocgiu} alt="" />
                  <span className="seat-text-status px-1">Ghé đang được giữ</span>
                </div>
                <div className="p-2 d-flex flex-wrap align-items-center"><img src={ghedathanhtoan} alt="" />
                  <span className="seat-text-status px-1">Ghế đang bán</span>
                </div>
                <div className="p-2 d-flex flex-wrap align-items-center"><img src={ghedatruoc} alt="" />
                  <span className="seat-text-status px-1">Ghế đặt trước</span>
                </div>
              </div>
            </div>
            <div className="screen-cemina w-100 mt-4 mb-2">
              <img src="./image/ic-screen.png" alt="" className="img-fluid" />
            </div>
            <div className="cemina-all-seat  overflow-x-auto">
              <div className="cemina-seat-row seat-status d-flex justify-content-center">
                <div className="ghethuong text-center d-inline-block">A1</div>
                <div className="ghethuong text-center d-inline-block">A2</div>
                <div className="ghethuong text-center d-inline-block">A3</div>
                <div className="ghethuong text-center d-inline-block">A4</div>
                <div className="ghethuong text-center d-inline-block">A5</div>
                <div className="ghethuong text-center d-inline-block">A6</div>
                <div className="ghethuong text-center d-inline-block">A7</div>
                <div className="ghethuong text-center d-inline-block">A8</div>
                <div className="ghethuong text-center d-inline-block">A9</div>
                <div className="ghethuong text-center d-inline-block">A10</div>
                <div className="ghethuong text-center d-inline-block">A11</div>
                <div className="ghethuong text-center d-inline-block">A12</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid booking-tiket-detail row">
          <div className="col-7 border-end row">
            <div className="col-12 d-flex justify-content-around seat-sype">
              <div className=" d-flex flex-wrap align-items-center justify-content-start"><img
                src="./image/seat-unselect-normal.png" alt="" />
                <span className="seat-text-status px-1">Ghế thường</span>
              </div>
              <div className="p-2 d-flex flex-wrap align-items-center"><img src="./image/seat-unselect-vip.png" alt="" />
                <span className="seat-text-status px-1">Ghế Vip</span>
              </div>
              <div className="p-2 d-flex flex-wrap align-items-center"><img src="./image/seat-unselect-double.png" alt="" />
                <span className="seat-text-status px-1">Ghế đôi</span>
              </div>
            </div>
            <div className="col-4"><span className="fw-bold text-center">1 x 50.000 Vnd</span></div>
            <div className="col-4"><span className="fw-bold text-center">1 x 50.000 Vnd</span></div>
            <div className="col-4"><span className="fw-bold text-center">1 x 50.000 Vnd</span></div>
          </div>
          <div className="col-2 border-end px-4 mt-2">
            <p className="fw-bold title">Tổng Tiền</p>
            <p className="fw-bold mt-4">200.000 vndd</p>
          </div>
          <div className="col-3">
            <p className="title fw-bold">
              Thời gian còn lại
            </p>
            <p className="text-end mx-5 fw-bold time-end">9:45</p>
          </div>
        </div>
      </div>
      <div className="col-3 showtime">
        <div className="movie-detail row pb-4">
          <div className="col-6"><img src="./image/film.png" className="img-fluid" alt="" /></div>
          <div className="col-6 p-1 py-4">
            <p className="movie-name">Blue Beetle</p>
            <p className="movie-language">2D phụ đề</p>
          </div>
          <div className="col-6 mt-2 px-4"><i className="fa fa-tags"></i> Thể loại</div>
          <div className="col-6 mt-2 px-4">
            <p className="infomation">Hành Động, Phiêu lưu</p>
          </div>
          <div className="col-6 mt-2 px-4"><i className="fa fa-clock-o"></i> Thời lượng</div>
          <div className="col-6 mt-2 px-4">
            <p className="infomation">129 phút</p>
          </div>
        </div>
        <div className="showtime-detail row">
          <div className="col-6 mt-2 px-4"><i className="fa fa-institution"></i>Rạp Chiếu</div>
          <div className="col-6 mt-2 px-4">
            <p className="infomation">Hành Động</p>
          </div>
          <div className="col-6 mt-2 px-4"><i className="fa fa-calendar"></i> Ngày Chiếu</div>
          <div className="col-6 mt-2 px-4">
            <p className="infomation">129 phút</p>
          </div>
          <div className="col-6 mt-2 px-4"><i className="fa fa-clock-o"></i> Giờ Chiếu</div>
          <div className="col-6 mt-2 px-4">
            <p className="infomation">Hành Động</p>
          </div>
          <div className="col-6 mt-2 px-4"><i className="fa fa-desktop"></i> Phòng Chiếu</div>
          <div className="col-6 mt-2 px-4">
            <p className="infomation">129 phút</p>
          </div>
          <div className="col-6 mt-2 px-4"><i className="fa fa-cubes"></i> Ghế Ngồi</div>
          <div className="col-6 mt-2 px-4">
            <p className="infomation">Hành Động</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="w-50 text-center btn-dat-ve btn">Đặt Vé</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BookingTicket