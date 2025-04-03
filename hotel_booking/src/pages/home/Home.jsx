import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <div className="homeTitle">Welcome to Hotel Booking</div>
        <div className="homeDescription">
          Discover the best hotels and book your stay with ease.
        </div>
        <div className="homeSearch">
          <input type="text" placeholder="Search for hotels..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;