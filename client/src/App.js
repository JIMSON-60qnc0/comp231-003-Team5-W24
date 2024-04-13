// client/src/App.js
import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import CourseOffering from './components/CourseOffering';

function App() {
  return (
    <div>
        <Header />
        <main>
            <WelcomeSection />
            <CourseOffering />
        </main>
    </div>
);
}

export default App;
