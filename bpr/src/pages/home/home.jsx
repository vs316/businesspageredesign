import MainHeader from "../../components/MainHeader";
import MainRow from "../../components/MainRow";
import Footer from "../../components/footer";
import "./home.css";

const Home = () => {
  return (
    <div className="homeScreen">
      <MainHeader />
      <br />
      <MainRow />
      <Footer />
    </div>
  );
};

export default Home;
