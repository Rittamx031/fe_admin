import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { faCalendar, faEnvelope, faLock, faMale, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import "../../assets/css/singup.css"
import * as yup from 'yup';
const khachhang = yup.object().shape({
  hoTen: yup.string().required('* Required to enter full name'),
  email: yup.string().required('* Required to enter email').email('* Invalid email format'),
  pass: yup
    .string()
    .required('* Password is required')
    .min(6, '* Password must be at least 6 characters')
    .max(25, '* Password must be at most 25 characters')
  // .matches(/^(?=.*[A-Z])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/, '* Password must contain an uppercase letter and a special character')
  ,
  passRepet: yup
    .string()
    .required('* Password confirmation is required')
    .oneOf([yup.ref('pass'), null], '* Passwords must match'),
  gioiTinh: yup.boolean('*Vui Long Chon Gioi Tinh').required('* Gender is required'),
  ngaySinh: yup.date().required('* Date of birth is required'),
  sdt: yup
    .string()
    .required('* Phone number is required')
    .matches(/^(0|\+84)\d{9}$/, '* Invalid phone number format')
});

// {
//   "hoTen": "thatdep trai",
//   "email": "thatv12122003@gmail.com",
//   "pass": "yeuchinhi",
//   "gioiTinh": false,
//   "ngaySinh": null,
//   "sdt": null,
// }
function SingUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(khachhang),
  })
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="container" id="register">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin-bottom-10">
            <label className="control-label font-16"><span style={{ color: 'red' }}>*</span>&nbsp;Họ tên</label>
            <input type="text" style={{ height: '30px' }} id="txtName" className="form-control" placeholder="Họ tên"{...register("hoTen")} />
            <span className="text-danger">
              {errors.hoTen?.message}
            </span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin-bottom-10">
            <label className="control-label font-16"><span style={{ color: 'red' }}>*</span>&nbsp;Email</label>
            <div className="input-icon">
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <input type="text" style={{ height: '30px' }} id="txtEmail" className="form-control" placeholder="Email"  {...register("email")} />
              <span className="text-danger">
                {errors.email?.message}
              </span>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="form-group row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin-bottom-10">
            <label className="control-label font-16"><span style={{ color: 'red' }}>*</span>&nbsp;Mật khẩu</label>
            <div className="input-icon">
              <i>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" style={{ height: '30px' }} id="txtMatKhau" className="form-control" placeholder="Mật khẩu"  {...register("pass")} />
              <span className="text-danger">
                {errors.pass?.message}
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin-bottom-10">
            <label className="control-label font-16"><span style={{ color: 'red' }}>*</span>&nbsp;Xác nhận lại mật khẩu</label>
            <div className="input-icon">
              <i>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" style={{ height: '30px' }} id="txtXacNhanMatKhau" className="form-control" placeholder="Xác nhận lại mật khẩu"  {...register("passRepet")} />
              <span className="text-danger">
                {errors.passRepet?.message}
              </span>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
        <div className="form-group row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin-bottom-10">
            <label className="control-label font-16"><span style={{ color: 'red' }}>*</span>&nbsp;Ngày sinh</label>
            <div className="input-icon">
              <i>
                <FontAwesomeIcon icon={faCalendar} />
              </i>
              {/* <input id="txtNgaySinh" style={{ height: '30px' }} className="form-control" placeholder="Ngày sinh" data-date-format="dd/mm/yyyy" /> */}
              <input type="date" id="txtNgaySinh" style={{ height: '30px' }} className="form-control" placeholder="Ngày sinh"  {...register("ngaySinh")} />
              <span className="text-danger">
                {errors.ngaySinh?.message}
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin-bottom-10">
            <label className="control-label font-16">Giới tính</label>
            <div className="input-icon">
              <i>
                <FontAwesomeIcon icon={faMale} />
              </i>
              <select id="cboSex" style={{ height: '30px', paddingTop: '2px' }} className="form-control" data-placeholder="Giới tính" tabindex="1"  {...register("gioiTinh")}>
                <option className="option-item">Giới tính</option>
                <option className="option-item" value="1">Nam</option>
                <option className="option-item" value="0">Nữ</option>
                {/* <option className="option-item" value="3">Khác</option> */}
              </select>
              <span className="text-danger">
                {errors.gioiTinh?.message}
              </span>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
        <div className="form-group row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin-bottom-10">
            <label className="control-label font-16"><span style={{ color: 'red' }}>*</span>&nbsp;Số điện thoại</label>
            <div className="input-icon">
              <i>
                <FontAwesomeIcon icon={faPhoneSquare} />
              </i>
              <input type="text" style={{ height: ' 30px' }} id="txtDienThoai" className="form-control" placeholder="Số điện thoại"  {...register("sdt")} />
              <span className="text-danger">
                {errors.sdt?.message}
              </span>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
        <div className="form-group row">
          <div className="col-md-12">
            <div className="form-group">
              <input type="checkbox" id="chk" value="1" />
              <span style={{ display: 'normal' }}>Tôi cam kết tuân theo <a
                // href="#chinhsachbaomat-pop-up" 
                className="fancybox-fast-view">chính sách bảo mật</a> và <a
                  // href="#dieukhoansudung-pop-up"
                  className="fancybox-fast-view">điều khoản sử dụng</a> của ThatCimena.
              </span>
              <span style={{ display: 'none' }}>I have read and accecpt the <a href="#chinhsachbaomat-pop-up" className="fancybox-fast-view">Privacy policy</a> and <a href="#dieukhoansudung-pop-up" className="fancybox-fast-view">Terms and conditions</a> of ThatCimena.
              </span>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="form-group row">
          <div className="col-md-12 text-center">
            <div className="form-group">
              <button type="submit"
                //  onclick="dangKy();" 
                className="btn btn-3 btn-mua-ve">
                Đăng ký</button>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </form>
    </div >
  )
}
// {
//   "hoTen": "thatdep trai",
//   "email": "thatv12122003@gmail.com",
//   "pass": "yeuchinhi",
//   "gioiTinh": false,
//   "ngaySinh": null,
//   "sdt": null,
// }
export default SingUp