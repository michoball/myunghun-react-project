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
              천문학관련 업종에서 일하다 개발의 즐거움에 빠져 개발자에 길에
              들어섰습니다.
              <br />
              React로 개발을 하고 상태관리 툴로 Redux를 주로 사용합니다.
              <br />
              코드 개선과 기능 개선에 관심이 많아 개발한 프로젝트 기능과
              코드개선을 계속 진행하고 있습니다.
            </p>
            <Space className="button-container">
              <Button type="default" size="large" onClick={imgChangeHandler}>
                Change Image
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
