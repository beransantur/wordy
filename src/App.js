import * as Icon from "react-bootstrap-icons";

function App() {
  return (
    <>
      <div className="wordle-container">
        <section className="bg-dark nav-container">
          <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container pt-2">
              <a class="navbar-brand" href="#home">
                <Icon.Quora size={35} />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                  <a class="nav-link" href="#home">
                    HOME
                  </a>
                  <a class="nav-link" href="#user">
                    USER
                  </a>
                  <a class="nav-link" href="#contact">
                    CONTACT
                  </a>
                </div>
              </div>
            </div>
          </nav>{" "}
        </section>
        <div className="wordle">
          <div className="header">Wordle</div>
          <div className="board">
            <div className="line">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <div className="line">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>{" "}
            <div className="line">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>{" "}
            <div className="line">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <div className="line">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <div className="line">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>{" "}
          </div>
          <form className="form">
            <input type="text" />
            <button>Submit</button>
          </form>
        </div>
        <section class="mt-3 p-2 bg-dark text-white text-center footer w-100">
          <div class="container">
            <p class="lead">Copyright &copy; 2022 Beran Santur</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
