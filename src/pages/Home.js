import "./Home.css";
import { Button, Space } from "antd";
import spaceComputer from "../assets/space-computer.jpg";
import { useNavigate } from "react-router-dom";
import CareerList from "../components/CareerList";

const Home = ({ imgChangeHandler }) => {
  const navigate = useNavigate();
  const contactButtonHandler = () => {
    navigate("/contact");
  };

  return (
    <div className="home-container">
      <div className="card-container">
        <section className="card-content">
          <header className="card-header">
            <h1>Hi, There ~ !</h1>
          </header>
          <article>
            <h3>프론트엔드 개발자 강명훈입니다.</h3>
            <p>
              als;eijf;alsiejf;alsiejf;lasiejf;asliejf;l
              aseijf;alseijf;lij;lasjef;iasje;lfijaselfijlijasefasefasefasefasaffffffffffffffffffffffffffffffffffff
            </p>
            <Space className="button-container">
              <Button type="default" size="large" onClick={imgChangeHandler}>
                Change Img
              </Button>
              <Button
                type="primary"
                size="large"
                onClick={contactButtonHandler}
              >
                Contact Me
              </Button>
            </Space>
          </article>
        </section>
        <section className="img-contianer">
          <img src={spaceComputer} alt="spaceman-computer" />
        </section>
      </div>

      <CareerList />
    </div>
  );
};

export default Home;
