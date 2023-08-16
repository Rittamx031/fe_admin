import React from 'react'
import "../../assets/css/userstate.css"
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faFilm } from '@fortawesome/free-solid-svg-icons';
// import { DownOutlined } from '@ant-design/icons';
// import { Dropdown, message, Space } from 'antd';
// const onClick = ({ key }) => {
//   message.info(`Click on item ${key}`);
// };
// const items = [
//   {
//     label: '1st menu item',
//     key: '1',
//   },
//   {
//     label: '2nd menu item',
//     key: '2',
//   },
//   {
//     label: '3rd menu item',
//     key: '3',
//   },
// ];
function UserState() {
  return (
    <div className="userState">
      {/* <div className="nouser container d-flex flex-row-reverse">
        <Link className="text-sm-center link px-1" to="signin">Đăng Nhập</Link>
        <Link className="text-sm-center link  px-1" to="signuo">Đăng Ký</Link>
      </div> */}
      <div className="user container d-flex flex-row-reverse">
        <Dropdown className="link text">
          <Dropdown.Toggle as={NavDropdownToggle} id="dropdownMenuLink">
            Thật Đẹp Trai
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item> <FontAwesomeIcon icon={faUser} /> Thông tin tài khoản
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><FontAwesomeIcon icon={faFilm} /> Hành trình điện ảnh</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><FontAwesomeIcon icon={faArrowRightFromBracket} /> Đăng xuất</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div >
  )
}
const NavDropdownToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="#"
    className="nav-link dropdown-toggle"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    ref={ref}
  >
    {children}
  </a>
));
export default UserState