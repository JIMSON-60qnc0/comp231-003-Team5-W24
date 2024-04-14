const express = require('express');
const router = express.Router();

// Mock data to simulate database interactions
let quizzes = [
    { id: 1, title: 'Quiz1', description: 'Algebra.' },
    { id: 2, title: 'Quiz2', description: 'Geometry' }
];

// Get all quizzes
router.get('/', (req, res) => {
    console.log("Fetching all quizzes...");
    res.json(quizzes);
});

// Get a single quiz by ID
router.get('/:id', (req, res) => {
    const quiz = quizzes.find(q => q.id === parseInt(req.params.id));
    if (quiz) {
        res.json(quiz);
    } else {
        res.status(404).send('Quiz not found');
    }
});

// Create a new quiz
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newQuiz = {
        id: quizzes.length + 1,
        title: title,
        description: description
    };
    quizzes.push(newQuiz);
    res.status(201).send(newQuiz);
});

// Update an existing quiz
router.put('/:id', (req, res) => {
    const quiz = quizzes.find(q => q.id === parseInt(req.params.id));
    if (quiz) {
        quiz.title = req.body.title || quiz.title;
        quiz.description = req.body.description || quiz.description;
        res.json(quiz);
    } else {
        res.status(404).send('Quiz not found');
    }
});

// Delete a quiz
router.delete('/:id', (req, res) => {
    const index = quizzes.findIndex(q => q.id === parseInt(req.params.id));
    if (index > -1) {
        quizzes.splice(index, 1);
        res.send('Quiz deleted');
    } else {
        res.status(404).send('Quiz not found');
    }
});

module.exports = router;
