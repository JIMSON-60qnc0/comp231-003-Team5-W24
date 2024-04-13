import React from 'react';
import './style.css'; // Make sure this CSS path is correct based on your project structure

function QuizPage() {
    return (
        <main>
            <h1>Quiz 1: Algebra Basics</h1>
            <form id="quiz1" action="submitQuiz1.html"> {/* Placeholder for form submission URL */}
                {/* Question 1 */}
                <div className="question">
                    <p>1. Solve for x in the equation: 3x - 7 = 8</p>
                    <input type="radio" id="q1a1" name="q1" value="A" />
                    <label htmlFor="q1a1">A) 3</label><br />
                    <input type="radio" id="q1a2" name="q1" value="B" />
                    <label htmlFor="q1a2">B) 4</label><br />
                    <input type="radio" id="q1a3" name="q1" value="C" />
                    <label htmlFor="q1a3">C) 5</label><br />
                    <input type="radio" id="q1a4" name="q1" value="D" />
                    <label htmlFor="q1a4">D) 6</label>
                </div>

                {/* Question 2 */}
                <div className="question">
                    <p>2. What is the simplified form of (x + 4)(x - 1)?</p>
                    <input type="radio" id="q2a1" name="q2" value="A" />
                    <label htmlFor="q2a1">A) \(x^2 + 3x - 4\)</label><br />
                    <input type="radio" id="q2a2" name="q2" value="B" />
                    <label htmlFor="q2a2">B) \(x^2 - 3x + 4\)</label><br />
                    <input type="radio" id="q2a3" name="q2" value="C" />
                    <label htmlFor="q2a3">C) \(x^2 + x - 4\)</label><br />
                    <input type="radio" id="q2a4" name="q2" value="D" />
                    <label htmlFor="q2a4">D) \(x^2 - x - 4\)</label>
                </div>

                {/* Question 3 */}
                <div className="question">
                    <p>3. How much does a book cost if two books and a pen cost $45 and a book costs $12 more than a pen?</p>
                    <input type="radio" id="q3a1" name="q3" value="A" />
                    <label htmlFor="q3a1">A) $15</label><br />
                    <input type="radio" id="q3a2" name="q3" value="B" />
                    <label htmlFor="q3a2">B) $17</label><br />
                    <input type="radio" id="q3a3" name="q3" value="C" />
                    <label htmlFor="q3a3">C) $19</label><br />
                    <input type="radio" id="q3a4" name="q3" value="D" />
                    <label htmlFor="q3a4">D) $21</label>
                </div>

                {/* Question 4 */}
                <div className="question">
                    <p>4. What is the area of a triangle with a base of 10 cm and height of 6 cm?</p>
                    <input type="radio" id="q4a1" name="q4" value="A" />
                    <label htmlFor="q4a1">A) 30 cm²</label><br />
                    <input type="radio" id="q4a2" name="q4" value="B" />
                    <label htmlFor="q4a2">B) 20 cm²</label><br />
                    <input type="radio" id="q4a3" name="q4" value="C" />
                    <label htmlFor="q4a3">C) 40 cm²</label><br />
                    <input type="radio" id="q4a4" name="q4" value="D" />
                    <label htmlFor="q4a4">D) 50 cm²</label>
                </div>

                {/* Question 5 */}
                <div className="question">
                    <p>5. Calculate the circumference of a circle with a diameter of 8 cm. (Use π = 3.14)</p>
                    <input type="radio" id="q5a1" name="q5" value="A" />
                    <label htmlFor="q5a1">A) 25.12 cm</label><br />
                    <input type="radio" id="q5a2" name="q5" value="B" />
                    <label htmlFor="q5a2">B) 24.12 cm</label><br />
                    <input type="radio" id="q5a3" name="q5" value="C" />
                    <label htmlFor="q5a3">C) 23.12 cm</label><br />
                    <input type="radio" id="q5a4" name="q5" value="D" />
                    <label htmlFor="q5a4">D) 26.12 cm</label>
                </div>

                {/* Question 6 */}
                <div className="question">
                    <p>6. What is the measure of the third angle in a triangle with one right angle and another angle measuring 35 degrees?</p>
                    <input type="radio" id="q6a1" name="q6" value="A" />
                    <label htmlFor="q6a1">A) 45 degrees</label><br />
                    <input type="radio" id="q6a2" name="q6" value="B" />
                    <label htmlFor="q6a2">B) 55 degrees</label><br />
                    <input type="radio" id="q6a3" name="q6" value="C" />
                    <label htmlFor="q6a3">C) 65 degrees</label><br />
                    <input type="radio" id="q6a4" name="q6" value="D" />
                    <label htmlFor="q6a4">D) 75 degrees</label>
                </div>

                <button type="submit">Submit Quiz</button>
            </form>
        </main>
    );
}

export default QuizPage;
