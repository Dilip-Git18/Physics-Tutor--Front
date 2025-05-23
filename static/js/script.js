function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Quiz Logic
function startQuiz() {
  let score = 0;

  // Simple quiz logic (add more questions as needed)
  let questions = [
      { question: "What is the force on an object with mass 5kg and acceleration 2m/s²?", answer: "10N" },
      { question: "What is the velocity of an object in free fall after 3 seconds?", answer: "29.4 m/s" }
  ];

  questions.forEach((q, index) => {
      let userAnswer = prompt(q.question);
      if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
          score++;
      }
  });

  // Show results
  document.getElementById('score').innerText = `You scored ${score} out of ${questions.length}`;
  document.getElementById('quizResult').style.display = 'block';
}



// Quiz Logic
function startQuiz() {
  // Show the questions section and hide the start button
  document.getElementById('quizQuestions').style.display = 'block';
  document.querySelector('button').style.display = 'none';
}

// Submit Quiz and Calculate Score
function submitQuiz() {
  // Get the user's answers
  const answer1 = document.getElementById('answer1').value.trim();
  const answer2 = document.getElementById('answer2').value.trim();
  
  // Correct answers
  const correctAnswers = [
      "10N",        // Correct answer for Question 1
      "29.4 m/s"    // Correct answer for Question 2
  ];

  let score = 0;
  
  // Check if user's answers are correct
  if (answer1.toLowerCase() === correctAnswers[0].toLowerCase()) {
      score++;
  }
  if (answer2.toLowerCase() === correctAnswers[1].toLowerCase()) {
      score++;
  }

  // Show the score result and the user's answers
  document.getElementById('score').innerText = `You scored ${score} out of 2`;

  // Display the user's answers
  document.getElementById('userAnswer1').innerText = `Your answer to Question 1: ${answer1}`;
  document.getElementById('userAnswer2').innerText = `Your answer to Question 2: ${answer2}`;
  
  // Display the correct answers
  document.getElementById('correctAnswer1').innerText = `Correct answer to Question 1: ${correctAnswers[0]}`;
  document.getElementById('correctAnswer2').innerText = `Correct answer to Question 2: ${correctAnswers[1]}`;

  // Display result section
  document.getElementById('quizResult').style.display = 'block';
  document.getElementById('quizQuestions').style.display = 'none'; // Hide questions after submission

  // Show performance graph
  showPerformanceGraph(score, correctAnswers.length);
}

// Function to show performance graph
function showPerformanceGraph(score, totalQuestions) {
  var ctx = document.getElementById('quizChart').getContext('2d');

  // Data for the chart (correct vs incorrect answers)
  const correctAnswersCount = score;
  const incorrectAnswersCount = totalQuestions - score;

  // Create a bar chart (you can also use a pie chart depending on preference)
  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Correct', 'Incorrect'],
          datasets: [{
              label: 'Quiz Performance',
              data: [correctAnswersCount, incorrectAnswersCount],
              backgroundColor: ['#2ecc71', '#e74c3c'], // Green for correct, Red for incorrect
              borderColor: ['#27ae60', '#c0392b'],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}
