import React from 'react';

import './App.css';
import Student from './features/labs/Student';
import { Student as StudentModel } from './models/student';

function App() {
  const test : StudentModel = {
    name: 'Test',
    age: 18
  }
  return (
    <div className="App">
      <Student student={test} />
    </div>
  );
}

export default App;
