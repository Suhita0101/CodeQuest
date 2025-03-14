import "./App.css";
import FlashcardContainer from "./components/FlashcardContainer";
import bgImage from "./assets/background.jpg"; // Import the image


function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <FlashcardContainer />
    </div>
  );
}

export default App;
