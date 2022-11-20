import "./App.css";
import spaceComputer from "./assets/space-computer.jpg";

function App() {
  return (
    <div className="App">
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
          </article>
        </section>
        <section className="img-contianer">
          <img src={spaceComputer} alt="spaceman-computer" />
        </section>
      </div>
    </div>
  );
}

export default App;
