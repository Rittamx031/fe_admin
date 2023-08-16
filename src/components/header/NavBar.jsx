import React from 'react'
import {
  NavLink,
} from "react-router-dom";
import "../../assets/css/navbar.css"
const navlink = [{ herf: "/showtimes", text: "Lịch Chiếu" }, { herf: "/film", text: "Phim" }, { herf: 3, text: "Thành Viên" }]
function NavBar() {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-sm justify-content-center">
          {navlink.length ? (
            <ul className="nav navbar-nav">
              {navlink.map((contact) => (
                <li className="nav-item" key={contact.herf}>
                  <NavLink
                    to={`${contact.herf}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "nav-link active"
                        : isPending
                          ? "nav-link pending"
                          : "nav-link"
                    }
                  >
                    {contact.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>{/* other code */}</p>
          )}
        </nav >
      </div>
    </>
  )
}

export default NavBar