import "./Home.css";
import { Button, Space } from "antd";
import spaceComputer from "../assets/space-computer.jpg";

const Home = () => {
  return (
    <div className="card-container">
      <section className="card-content">
        <header className="card-header">
          <h1>Hi, There ~ !</h1>
        </header>
        <article>
          <h3>프론트엔드 개발자 강명훈입니다.</h3>
          <p>
            als;eijf;alsiejf;alsiejf;lasiejf;asliejf;laseijf;alseijf;lij
            ;lasjef;iasje;lfijaselfijlij
          </p>
          <Space className="button-container">
            <Button type="primary" size="large">
              Contact Me
            </Button>
          </Space>
        </article>
      </section>
      <section className="img-contianer">
        <img src={spaceComputer} alt="spaceman-computer" />
      </section>
    </div>
  );
};

export default Home;
