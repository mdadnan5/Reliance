import React, { useState } from "react";
import { Multiselect } from 'multiselect-react-dropdown';
import './App.css'

const App = () => {
  const data = [
    { name: 'Marina Augustine', email: 'm.augustine@example.com', id: 1 },
    { name: 'Nick Giannopoulos', email: 'n.giannopoulos@example.com', id: 2 },
    { name: 'Narayana Garner', email: 'n.garner@example.com', id: 3 },
    { name: 'Anita Gros', email: 'a.gros@example.com', id: 4 },
    { name: 'Megan Smith', email: 'm.smith@example.com', id: 5 },
    { name: 'Mohammad Adnan', email: 'm.adnan@exapmle.com', id: 6 }

  ]
  const [options] = useState(data);
  return (
    <div className="main">
      <div className="container">
        <div className="app">
          <Multiselect options={options} displayValue="name" />
        </div>
      </div>
    </div>
  );
}
export default App;