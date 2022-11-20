import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card-container">
        <section className="card-content">
          <header className="card-header">
            <h1>Hi, There ~ !</h1>
          </header>
          <article>
            <p>
              프론트엔드 개발자 강명훈입니다. <br />
              als;eijf;alsiejf;alsiejf;lasiejf;asliejf;laseijf;alseijf;lij
              <br />
              ;lasjef;iasje;lfijaselfijlij
            </p>
          </article>
        </section>
        <section
          className="img-contianer"
          style={{
            color: "#fff",
            fontSize: "50px",
            alignItems: "center",
            width: "calc(70vw - 60%)",
            border: "3px solid yellow",
          }}
        >
          IMG
        </section>
      </div>
    </div>
  );
}

export default App;
