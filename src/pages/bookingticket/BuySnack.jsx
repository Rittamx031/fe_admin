import React from 'react'
import "../../assets/css/buysnack.css"

const BuySnack = () => {
  return (
    <div className="container buy-snack-tap">
      <div className="row">
        <div className="col-9">
          <div className="limitage text-center text-danger p-3">Phim này không dành cho Khán giá dưới 16 tuổi
          </div>
          <div className="user-info mt-3">
            <div className="user-title text-uppercase">
              <i className="fa-solid fa-user"></i> Thông tin thanh toán
            </div>
            <div className="user-info row mt-2">
              <div className="col-4">
                <p className="field fw-bold mb-2">Họ Tên:</p>
                <p className="data">Thật Vũ</p>
              </div>
              <div className="col-4">
                <p className="field fw-bold mb-2">Họ Tên:</p>
                <p className="data">Thật Vũ</p>
              </div>
              <div className="col-4">
                <p className="field fw-bold mb-2">Họ Tên:</p>
                <p className="data">Thật Vũ</p>
              </div>
            </div>
            <div className="seat-booked border-bottom">
              <div className="row">
                <div className="col-8 fw-bold text-uppercase">Ghế Vip</div>
                <div className="col-4 row">
                  <div className="col-6">2 x 65.000</div>
                  <div className="col-6 text-end">= 130.000</div>
                </div>
              </div>
              <div className="row">
                <div className="col-8 fw-bold text-uppercase">Ghế Vip</div>
                <div className="col-4 row">
                  <div className="col-6">2 x 65.000</div>
                  <div className="col-6 text-end">= 130.000</div>
                </div>
              </div>
              <div className="row">
                <div className="col-8 fw-bold text-uppercase">Ghế Vip</div>
                <div className="col-4 row">
                  <div className="col-6">2 x 65.000</div>
                  <div className="col-6 text-end">= 130.000</div>
                </div>
              </div>
            </div>
          </div>
          <div className="combo-snacks mt-4">
            <div className="combo-snacks-title text-uppercase">
              Combo
            </div>
            <div className="combo-snack-table">
              <table className="table table-combo">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Tên Combo</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Số lượng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="p-3">
                    <th scope="row">
                      <img className="img-combo img-fuild" src="image/ghedangchon.png" alt="" />
                    </th>
                    <td className="text-start pt-3">Thanh xuân bất diệt</td>
                    <td className="text-start pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qu</td>
                    <td className="pt-3"><span className="">2</span> <button
                      className="btn btn-outline-primary mx-1">+</button><button
                        className="btn mx-1 btn-outline-dark">-</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bill row text-end">
            <div className="col-10">
              Tổng tiền:
            </div>
            <div className="col-2 text-danger">
              120.000 vnđ
            </div>
            <div className="col-10">
              Tổng tiền:
            </div>
            <div className="col-2 text-danger">
              120.000 vnđ
            </div>
            <div className="col-10">
              Tổng tiền:
            </div>
            <div className="col-2 text-danger">
              120.000 vnđ
            </div>
          </div>
          <div className="payment-method mt-3">
            <div className="payment-title text-uppercase">
              <i className="fa-solid fa-money-check-dollar"></i> Phương thức thanh toán
            </div>
            <div className="row mt-4 pb-2 border-bottom">
              <div className="col-3 d-flex justify-content-center align-content-center">
                <input type="radio" name="payment-method" id="visa" className="payment-method" />
                <label for="visa" className="d-flex justify-content-center align-content-center"><img src="./image/visa.jpg"
                  alt="" className="img-fluid payment-method-img mx-2" />
                  <span>Visa</span>
                </label>
              </div>
              <div className="col-3 d-flex justify-content-center align-content-center">
                <input type="radio" name="payment-method" id="visa" className="payment-method" />
                <label for="visa" className="d-flex justify-content-center align-content-center"><img src="./image/visa.jpg"
                  alt="" className="img-fluid payment-method-img mx-2" />
                  <span>Visa</span>
                </label>
              </div>
              <div className="col-3 d-flex justify-content-center align-content-center">
                <input type="radio" name="payment-method" id="visa" className="payment-method" />
                <label for="visa" className="d-flex justify-content-center align-content-center"><img src="./image/visa.jpg"
                  alt="" className="img-fluid payment-method-img mx-2" />
                  <span>Visa</span>
                </label>
              </div>
              <div className="col-3 d-flex justify-content-center align-content-center">
                <input type="radio" name="payment-method" id="visa" className="payment-method" />
                <label for="visa" className="d-flex justify-content-center align-content-center"><img src="./image/visa.jpg"
                  alt="" className="img-fluid payment-method-img mx-2" />
                  <span>Visa</span>
                </label>
              </div>
            </div>
          </div>
          <div className="time-booking">
            <p className="title">Thời gian còn lại: <span className="time-stap fw-bold"> 9:30</span></p>

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
            <button className="mx-2 text-center btn-dat-ve btn btn-primary">Quay Lại</button>
            <button className="mx-2 text-center btn-dat-ve btn btn-primary">Đặt Vé</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuySnack