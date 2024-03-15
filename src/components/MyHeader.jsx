import logo from "../assets/logo.png";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";

const MyHeader = function () {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark"
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f !important" }}
    >
      <div className="container-fluid me-3">
        <a className="navbar-brand" href="#a">
          <img src={logo} style={{ width: "100px", height: "55px" }} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold" href="#a">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#a">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#a">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#a">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#a">
                My List
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <Search className="text-white" />
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <Bell className="text-white me-2" />
            <PersonCircle className="text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyHeader;
