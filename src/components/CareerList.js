import "./CareerList.css";
import spaceComputer from "../assets/space-computer.jpg";
import { Avatar, List } from "antd";
import { useRef, useState } from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

const CareerList = () => {
  const carRef = useRef();
  const [showCar, setShowCar] = useState(true);

  const closeCareerHandeler = () => {
    const card = carRef.current;
    card.classList.toggle("no");
    setTimeout(() => setShowCar(!showCar), 400);
  };

  const data = [
    {
      title: "Kang Myung Hun",
      avatar: spaceComputer,
      description: "Front end Web Developer",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
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
            {item.content}
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
