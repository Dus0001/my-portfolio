import React, { useState } from 'react';
import Nav from './components/Nav/index';
import About from './components/About/index';
import Projects from './components/Projects/index';
import ContactForm from './components/Contact/index';

function App() {
  const  [categories] = useState([
    { name: 'portfolio', description: 'Links to my projects' },
    { name: 'resume', description: 'A link to my resume' },

  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
    <Nav
       categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      >
      </Nav>
    <main>
    {!contactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
    </main>
  </div>
  );
}

export default App;
