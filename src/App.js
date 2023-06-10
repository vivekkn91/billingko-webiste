import logo from "./logo.svg";
import "./App.css";
import Header from "./buy-pos/navaigationbar";
import Footer from "./buy-pos/ourpresents";
import Sidebar from "./components/side";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import PageOne from "./components/pageOne";
const currentYear = new Date().getFullYear();

function App() {
  return (
    <>
      {" "}
      <section>
        <div className="App">
          <div id="body-pd">
            <Header />
            {/* <Sidebar /> */}

            <div className="height-100 bg-light">
              <PageOne />
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <Footer />
        <footer className="foot">
          <p>&copy; {currentYear} Billingko All Rights Reserved </p>
        </footer>
      </section> */}
    </>
  );
}

export default App;
