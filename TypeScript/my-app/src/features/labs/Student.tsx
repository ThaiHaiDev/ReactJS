import * as React from 'react';
import { Student as StudentModel } from '../../models';

export interface StudentProps {
    student: StudentModel
}

export default function Student ({student}: StudentProps) {
    const {name, age} = student
    return (
    <div>
        <p>Student: {name} {age}</p>
    </div>
  );
}
