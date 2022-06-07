import React from 'react';

import './App.css';
import Student from './features/labs/Student';
import { Student as StudentModel } from './models/student';

function App() {
  const test : StudentModel = {
    name: 'Test',
    age: 18
  }
  
  const truyenCha = (newValue : String) => {
      console.log('New value: ',newValue)
  }
  return (
    <div className="App">
      <Student onClick={truyenCha} student={test} />
    </div>
  );
}

export default App;
