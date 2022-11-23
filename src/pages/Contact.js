import "./Contact.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate("/");
  };
  return (
    <div className="contact">
      <section className="contact-container">
        <h1>Contact Me</h1>
        <div className="contact-info">
          <p>
            <span>Email</span>: myunghun0114@gmail.com
          </p>
          <p>
            <span>P. H</span>: 010-6471-5307
          </p>
        </div>
        <button className="back-btn" onClick={backButtonHandler}>
          <ArrowLeftOutlined />
        </button>
      </section>
    </div>
  );
};

export default Contact;
