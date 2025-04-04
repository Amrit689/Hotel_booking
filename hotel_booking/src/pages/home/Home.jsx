import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <div className="homeContainer">
        <div className="homeTitle">Welcome to Bookify</div>
        <div className="homeDescription">
          Discover the best hotels and book your stay with ease.
        </div>
        <div className="homeSearch">
          <input type="text" placeholder="Search for hotels..." />
          <button>Search</button>
        </div>
        <Featured/>
        <h1 className="homeTitle">Some Featured Hotels</h1>
        <FeaturedProperties/>
        <FeaturedProperties/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;