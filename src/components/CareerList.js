import "./CareerList.css";
import profileImg from "../assets/profile.jpg";
import { Avatar, List } from "antd";
import { useRef, useState } from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

const CareerList = () => {
  const carRef = useRef();
  const [showCar, setShowCar] = useState(true);

  const closeCareerHandeler = () => {
    const card = carRef.current;
    card.classList.toggle("no");
    setTimeout(() => setShowCar(!showCar), 500);
  };

  const data = [
    {
      title: "Kang Myung Hun",
      avatar: profileImg,
      description: "Front end Web Developer",
    },
  ];
  return (
    <div className="career-container" ref={carRef}>
      <List
        className="career-list"
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.title} className="content">
            <List.Item.Meta
              avatar={<Avatar className="avatar" src={item.avatar} />}
              title={item.title}
              description={item.description}
            />
            <div className="list-content">
              <h3>Projects</h3>
              <div className="project">
                <p>📒My diary App </p>
                Fullcalendar library와 draft.js를 이용한 개인 일정관리 및 메모
                앱 <a href="https://my-diary-myunghun.herokuapp.com/">Click</a>
                <p>📸Video Chat App </p>
                WebRtc 기반 agora.io 의 rtc , rtm sdk를 사용한 화상채팅 앱{" "}
                <a href="https://video-chat-app-neon.vercel.app">Click</a>
              </div>
            </div>
          </List.Item>
        )}
      >
        <button className="career-button" onClick={closeCareerHandeler}>
          {showCar ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </button>
      </List>
    </div>
  );
};
export default CareerList;
