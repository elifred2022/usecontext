import UserContext from "./context/UserContext";
import "./App.css";
import MoreInfo from "./components/MoreInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import InfoCart from "./components/InfoCart";

function App() {
  const userData = {
    name: "Eli",
    edad: 43,
  };

  return (
    <UserContext.Provider value={userData}>
      <div className="App">
        <h1>useContext</h1>
        <MoreInfo />
        <InfoCart />
      </div>
    </UserContext.Provider>
  );
}

export default App;

// https://www.youtube.com/watch?v=MhaZPtj6zbU 1:10
