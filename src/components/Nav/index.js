import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    const  categories = [
        { name: 'portfolio', description: 'Links to my projects' },
        { name: 'resume', description: 'A link to my resume' },

      ];
    
      const handleClick = () => {
        console.log("click handled")
      }
    
      return (
        <header data-testid="header" className="flex-row px-1">
          <h2>
            <a href="/">
              <span role="img" aria-label="camera"> 🎓</span> Odysnpm runsey
            </a>
          </h2>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <a href="#about" onClick={() => handleClick()}>
                  About me
                </a>
              </li>
              <li className={"mx-2"}>
                <span onClick={() => handleClick()}>
                  Contact
                </span>
              </li>
              {
                categories.map((category) => (
                  <li className="mx-1" key={category.name} >
                    <span onClick={() => { handleClick(); }}>
                     {capitalizeFirstLetter(category.name)}
                    </span>
                  </li>
                ))
              }
            </ul>
          </nav>
        </header>
  );
}

export default Nav;