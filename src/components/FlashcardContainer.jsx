import { useState } from "react";
import Flashcard from "./Flashcard";

const flashcards = [
  { question: "What data type is used to store true or false values?", answer: "Boolean", difficulty: "easy"},
  { question: "What is the root of a binary tree?", answer: "Root", difficulty: "easy"},
  { question: "What is the basic unit of information in computing?", answer: "Bit", difficulty: "easy"},
  { question: "What is the largest integer data type in most programming languages?", answer: "Long", difficulty: "easy"},
  { question: "What does HTTP stand for?", answer: "Hypertext Transfer Protocol", difficulty: "easy"},
  { question: "Which sorting algorithm has a time complexity of O(n^2) in the worst case?", answer: "Bubble", difficulty: "medium"},
  { question: "What is the time complexity of binary search?", answer: "Logarithmic", difficulty: "medium"},
  { question: "Which data structure is used to implement a queue?", answer: "Array", difficulty: "medium"},
  { question: "What is the name of the algorithm used for encryption in symmetric encryption?", answer: "AES", difficulty: "medium"},
  { question: "What is the protocol used for secure information over a network?", answer: "HTTPS", difficulty: "medium"},
  { question: "What is the algorithm used to find the shortest path in a graph with weighted edges?", answer: "Dijkstra", difficulty: "hard"},
  { question: "What is the complexity of matrix multiplication?", answer: "Cubic", difficulty: "hard"},
  { question: "What data structure is used in the implementation of a breadth-first search?", answer: "Queue", difficulty: "hard"},
  { question: "What theorem describes the tradeoff between consistency, availability, and partition tolerance in distributed systems?", answer: "CAP", difficulty: "hard"},
  { question: "What is the primary purpose of a Merkle tree in blockchain technology?", answer: "Verification", difficulty: "hard"},
];

const FlashcardContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false); // Track the flip state
  const [feedback, setFeedback] = useState(""); // Track feedback

  const prevCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex);
    setFeedback(""); // Reset feedback when switching cards
  };

  const nextCard = () => {
    setFlipped(false); // Reset flip state when switching cards
    setCurrentIndex(Math.floor(Math.random() * flashcards.length)); // Randomly switch card
    setFeedback(""); // Reset feedback when switching cards
  };

  const resetFeedback = () => {
    setFlipped(false); // Reset flip state to allow user to try again
    setFeedback(""); // Reset feedback message
  };

  return (
    <div className="container">
      <div className="header">
        <h1>CodeQuest</h1>
        <p>Computer Science Trivia</p>
        <p>Unlock the world of code, one card at a time.</p>
        <p>Number of Cards: {flashcards.length} </p>
      </div>

      {/* Flashcard Component */}
      <Flashcard
        card={flashcards[currentIndex]}
        flipped={flipped}
        setFlipped={setFlipped}
        resetFeedback={resetFeedback}
        setFeedback={setFeedback} // Pass setFeedback to Flashcard component
        feedback={feedback} // Pass feedback to Flashcard component
      />

      {/* Buttons to move to the next card */}
      <div className="buttons-container">
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardContainer;
