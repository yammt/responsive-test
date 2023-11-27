import Header from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import JumpBackIn from "./components/JumpBackIn";
import FeaturedCreator from "./components/FeaturedCreators";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <Header />
        <SearchBar />
        <JumpBackIn />
        <FeaturedCreator />
      </div>
    </div>
  );
}

export default App;
