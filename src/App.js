import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        className="card-container"
        style={{
          border: "1px solid #fff",
          width: "70vw",
          height: "60vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <section
          className="card-content"
          style={{
            width: "calc(70vw - 40%)",
            border: "3px solid red",
            padding: "10px 20px",
          }}
        >
          <header className="card-header">
            <h1>Hi, There ~ !</h1>
          </header>
          <article>
            <p>프론트엔드 개발자 강명훈입니다.</p>
            <p>
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
