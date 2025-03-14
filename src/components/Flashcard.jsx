import { useState } from "react";

const Flashcard = ({ card, flipped, setFlipped, resetFeedback, setFeedback, feedback }) => {
  const [userInput, setUserInput] = useState(""); // Stores user input

  // Define styles for different difficulty levels
  const flashcardStyles = {
    easy: { backgroundColor: 'orange' },  // Orange for easy
    medium: { backgroundColor: 'mediumpurple' }, // Medium purple for medium
    hard: { backgroundColor: 'lightcoral' },  // Light coral for hard
  };
  
  const handleSubmit = () => {
    // Check if the user input matches the answer (case insensitive)
    if (userInput.trim().toLowerCase() === card.answer.toLowerCase()) {
      setFeedback("correct");
      // Delay the flip to give user time to read feedback
      setTimeout(() => {
        setFlipped(true); // Flip the card after correct answer
      }, 500);
    } else {
      setFeedback("incorrect");
    }
  };

  const handleTryAgain = () => {
    setUserInput(""); // Clear input for another attempt
    setFeedback(""); // Reset feedback
    resetFeedback(); // Reset flip state to give another chance without moving to next card
  };

  const toggleFlip = () => {
    setFlipped(!flipped); // Toggle the flip state when the card is clicked
  };

  return (
    <div className="flashcard-container">
      <div
        className="flashcard"
        style={flashcardStyles[card.difficulty]} // Apply the background color based on difficulty
        onClick={toggleFlip} // Toggle flip state on click
      >
        {flipped ? card.answer : card.question} {/* Display answer if flipped, else question */}
      </div>

      {/* Input and submit button for user to guess */}
      {!flipped && !feedback && (
        <div className="input-section">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your answer..."
            className="input-box"
          />
          <button onClick={handleSubmit} className="submit-button">Submit</button>
        </div>
      )}

      {/* Feedback after user submits answer */}
      {feedback && (
        <div>
          <p className={`feedback ${feedback}`}>
            {feedback === "correct" ? "✅ Correct!" : "❌ Incorrect."}
          </p>
          {feedback === "incorrect" && (
            <button className="try-again-button" onClick={handleTryAgain}>Try Again</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Flashcard;
