import Slider from "../Slider/Slider";
import "./Home.css";

function Home() {
  return (
    <>
      <Slider />
      <div className="home-content">
        <div className="home-content-heading">OUR INITIATIVES</div>
        <div className="home-content-links">
          <div className="home-content-link">
            <img src="https://tse4.mm.bing.net/th?id=OIP.MyUvbM2xcan07arbSw_WjwHaCd&pid=Api&P=0&h=180" />
            <div className="home-content-subheading">
              <a href="#">CAMPUS CEO</a>
            </div>
          </div>
          <div className="home-content-link">
            <img src="https://tse4.mm.bing.net/th?id=OIP.MyUvbM2xcan07arbSw_WjwHaCd&pid=Api&P=0&h=180" />
            <div className="home-content-subheading">
              <a href="#">E SUMMIT</a>
            </div>
          </div>
          <div className="home-content-link">
            <img src="https://tse4.mm.bing.net/th?id=OIP.MyUvbM2xcan07arbSw_WjwHaCd&pid=Api&P=0&h=180" />
            <div className="home-content-subheading">
              <a href="#">E RESOURCES</a>
            </div>
          </div>
          <div className="home-content-link">
            <img src="https://tse4.mm.bing.net/th?id=OIP.MyUvbM2xcan07arbSw_WjwHaCd&pid=Api&P=0&h=180" />
            <div className="home-content-subheading">
              <a href="#">SOCIAL INITIATIVES</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
