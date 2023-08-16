import React, { useState } from 'react'
import "../../assets/css/showtimes.css"
import { Modal, Button } from 'antd';
function TabShowTimes() {
  const showtimes = [
    {
      image: "https://intietkiem.com/wp-content/uploads/2020/02/thiet-ke-poster-dep.jpg",
      name: "Gọi Hồn Quỷ Dữ",
      theloai: "Kinh dị,Hồi Hộp",
      thoiluong: 93,
      ngonNgu: "2D ViệtSub",
      suatchieu: [{
        thoigian: "12:20",
        soghetrong: 120
      },
      {
        thoigian: "12:20",
        soghetrong: 120
      },
      {
        thoigian: "12:20",
        soghetrong: 120
      }, {
        thoigian: "12:20",
        soghetrong: 120
      }
      ]
    }, {
      image: "https://intietkiem.com/wp-content/uploads/2020/02/thiet-ke-poster-dep.jpg",
      name: "Gọi Hồn Quỷ Dữ",
      theloai: "Kinh dị,Hồi Hộp",
      thoiluong: 93,
      ngonNgu: "2D ViệtSub",
      suatchieu: [{
        thoigian: "12:20",
        soghetrong: 120
      },
      {
        thoigian: "12:20",
        soghetrong: 120
      },
      {
        thoigian: "12:20",
        soghetrong: 120
      }, {
        thoigian: "12:20",
        soghetrong: 120
      }
      ]
    }, {
      image: "https://intietkiem.com/wp-content/uploads/2020/02/thiet-ke-poster-dep.jpg",
      name: "Gọi Hồn Quỷ Dữ",
      theloai: "Kinh dị,Hồi Hộp",
      thoiluong: 93,
      ngonNgu: "2D ViệtSub",
      suatchieu: [{
        thoigian: "12:20",
        soghetrong: 120
      },
      {
        thoigian: "12:20",
        soghetrong: 120
      },
      {
        thoigian: "12:20",
        soghetrong: 120
      }, {
        thoigian: "12:20",
        soghetrong: 120
      }
      ]
    }, {
      image: "https://intietkiem.com/wp-content/uploads/2020/02/thiet-ke-poster-dep.jpg",
      name: "Gọi Hồn Quỷ Dữ",
      theloai: "Kinh dị,Hồi Hộp",
      thoiluong: 93,
      ngonNgu: "2D ViệtSub",
      suatchieu: [{
        thoigian: "12:20",
        soghetrong: 120
      },
      {
        thoigian: "12:20",
        soghetrong: 120
      },
      {
        thoigian: "12:20",
        soghetrong: 120
      }, {
        thoigian: "12:20",
        soghetrong: 120
      }
      ]
    },]
  const showtime = {
    name: "Gọi Hồn ",
    rapname: "RAP6",
    date: "18-6-2003",
    timestart: "18:15",
  }
  const [visible, setVisiable] = useState(false);
  const showModal = () => {
    setVisiable(true);
  };
  const handleCancel = () => {
    setVisiable(false);
  };
  return (
    <>
      <Modal
        title={<span className="h4">BẠN ĐANG ĐẶT VÉ XEM PHIM</span>}
        visible={visible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className='modal-footer w-100 d-flex justify-content-center'>
            <a className="btn w-25 btn-dat-ve">
              Đặt vé
            </a>
          </div>
        ]}
      >
        <div className="row text-center border-bottom">
          <h2>{showtime.name}</h2>
        </div>
        <div className="row text-center thead py-2 shadow-sm">
          <div className="col-4">Rạp Chiếu</div>
          <div className="col-4">Ngày Chiếu</div>
          <div className="col-4">Giờ Chiếu</div>
        </div>
        <div className="row text-center tbody py-4">
          <div className="col-4">{showtime.rapname}</div>
          <div className="col-4">{showtime.date}</div>
          <div className="col-4">{showtime.timestart}</div>
        </div>
      </Modal>
      <div className="container showtimes">
        {showtimes.map((movie) => {
          return (
            <div className="card mb-3 border-0">
              <div className="row g-0">
                <div className="col-md-3 p-3">
                  <img src={movie.image} className="img-fluid rounded-lg" alt="..." style={{ borderRadius: '20px' }} />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title  link-film text-bold"><a href="">{movie.name}</a></h5>
                    <p className="card-text"><i class="fa fa-tags"></i>{movie.theloai}  <span className="mx-2"><i class="fa fa-clock-o"></i> {movie.thoiluong} phút</span></p>
                    <p className="card-text"><b>{movie.ngonNgu}</b></p>
                    <div className="card-text row">
                      {movie.suatchieu.map((showtimes) => {
                        return (
                          <div className="col-md-2">
                            <a onClick={showModal} className='w-100 btn btn-default'>{showtimes.thoigian}</a>
                            <p className='w-100 text-center'><small> {showtimes.soghetrong} ghế trống</small></p>
                            {/* <a style="width: 100%" href="#product-pop-up" onclick="bookingSeat('Beta Thái Nguyên', '220a5203-b1b1-4808-a127-c44e7fcf9424', '1849d8b5-313f-4d6d-9040-a20536015ddc', '21:00', '15/08/2023', 'Gọi Hồn Quỷ Dữ');" class="btn default show-in fancybox-fast-view">21:00</a> */}
                          </div>
                        )
                      })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default TabShowTimes