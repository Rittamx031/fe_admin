import React, { useEffect, useState } from 'react'
import "../../assets/css/film.css"
import { Modal, Button } from 'antd';
import ConVertData from '../../utils/convertdata'
const TabFilm = ({ datas }) => {
  // const [datas, setDatas] = useState([])
  useEffect(() => { }, [])
  const [visible, setVisiable] = useState(false);
  const showModal = () => {
    setVisiable(true);
  };
  const handleCancel = () => {
    setVisiable(false);
  };
  const fakeMovieData = [
    {
      title: "The Moon: Nhiệm Vụ Cuối Cùng",
      genre: "Hành động",
      duration: "180 Phút",
      imgUrl: 'https://th.bing.com/th/id/OIP.ecrudiaicclFtKGRxobQcwHaJ4?w=197&h=263&c=7&r=0&o=5&pid=1.7',
    },
    {
      title: "The Moon: Nhiệm Vụ Cuối Cùng",
      genre: "Hành động",
      duration: "180 Phút",
      imgUrl: 'https://th.bing.com/th/id/OIP.ecrudiaicclFtKGRxobQcwHaJ4?w=197&h=263&c=7&r=0&o=5&pid=1.7',
    },
    {
      title: "The Moon: Nhiệm Vụ Cuối Cùng",
      genre: "Hành động",
      duration: "180 Phút",
      imgUrl: 'https://th.bing.com/th/id/OIP.ecrudiaicclFtKGRxobQcwHaJ4?w=197&h=263&c=7&r=0&o=5&pid=1.7',
    },
    {
      title: "The Moon: Nhiệm Vụ Cuối Cùng",
      genre: "Hành động",
      duration: "180 Phút",
      imgUrl: 'https://th.bing.com/th/id/OIP.ecrudiaicclFtKGRxobQcwHaJ4?w=197&h=263&c=7&r=0&o=5&pid=1.7',
    },
    {
      title: "The Moon: Nhiệm Vụ Cuối Cùng",
      genre: "Hành động",
      duration: "180 Phút",
      imgUrl: 'https://th.bing.com/th/id/OIP.ecrudiaicclFtKGRxobQcwHaJ4?w=197&h=263&c=7&r=0&o=5&pid=1.7',
    },
    {
      title: "The Moon: Nhiệm Vụ Cuối Cùng",
      genre: "Hành động",
      duration: "180 Phút",
      imgUrl: 'https://th.bing.com/th/id/OIP.ecrudiaicclFtKGRxobQcwHaJ4?w=197&h=263&c=7&r=0&o=5&pid=1.7',
    },
    {
      title: "The Moon: Nhiệm Vụ Cuối Cùng",
      genre: "Hành động",
      duration: "180 Phút",
      imgUrl: 'https://th.bing.com/th/id/OIP.ecrudiaicclFtKGRxobQcwHaJ4?w=197&h=263&c=7&r=0&o=5&pid=1.7',
    },
    // Add more fake movie data entries here
  ];
  const showtime = {
    name:"Gọi Hồn ",
    rapname:"RAP6",
    date:"18-6-2003",
    timestart:"18:15",
  }
  function MovieCard({ movie }) {
    return (
      <div className="col-3 p-4">
        <div className="card border-0">
          <img className="card-img-top image-film" src={movie.imgUrl} alt="Card image cap" />
          <div className="card-body">
            <a className="card-title link-film text-bold">{movie.title}</a>
            <p className="card-text m-0"><b>Thể Loại:</b> {movie.genre}</p>
            <p className="card-text"><b>Thời Lượng:</b> {movie.duration}</p>
            <a className="btn w-100 btn-dat-ve" onClick={showModal}>MUA VÉ</a>
          </div>
        </div>
      </div>
    );
  }
  console.log(ConVertData.formatDateToDDMMYYYY(new Date(datas)))
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
      <div className="container film">
        <div className="row">
          {fakeMovieData.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </>
  )
}
// {
//       "id": "68df9728-9f9e-4d7f-b22e-08d50ddbcc94",
//       "ten": "Movie 5",
//       "daoDien": "Director 5",
//       "nhaSanXuat": "Producer 5",
//       "dienVien": "Actor 5, Actress 5",
//       "namPhatHanh": 2024,
//       "thoiLuong": 125,
//       "tuoiGioiHan": 12,
//       "noiDung": "This is the plot of Movie 5.",
//       "trailer": null,
//       "poster": null,
//       "quocGia": {
//           "id": "f23a0a2c-52c3-4d3d-a71b-662bbbc2358c",
//           "ten": "Canada",
//           "createAt": "2023-08-01T10:53:40",
//           "updateAt": null,
//           "deleted": 0
//       },
//       "ngonNgu": {
//           "id": "ea6c1cb0-453b-4db6-b10b-09a990c6bf49",
//           "ten": "German",
//           "createAt": "2023-08-01T10:52:42.8",
//           "updateAt": null,
//           "createBy": null,
//           "updateBy": null,
//           "deleted": false
//       },
//       "createAt": "2023-07-13T12:56:42.283",
//       "updateAt": null,
//       "createBy": null,
//       "updateBy": null,
//       "deleted": false
//   },
export default TabFilm
