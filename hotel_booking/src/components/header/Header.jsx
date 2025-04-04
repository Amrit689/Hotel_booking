import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openOptions, setOpenOptions] = useState(false);

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, options } });
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <a href=""><span>Stays</span></a>
          </div>
          <div className="headerListItem">
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <span>Airport taxis</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
            Welcome to Bookify
            </h1>
            
            <button className="headerBtn">Sign in / Register</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
