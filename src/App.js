import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const  [categories] = useState([
    { name: 'portfolio', description: 'Links to my projects' },
    { name: 'resume', description: 'A link to my resume' },

  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
    <Nav>
      categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}</Nav>
    <main>
      <Projects currentCategory={currentCategory}>
      </Projects>
      <About></About>
    </main>
  </div>
  );
}

export default App;
