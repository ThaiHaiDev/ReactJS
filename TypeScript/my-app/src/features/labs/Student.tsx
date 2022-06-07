import * as React from 'react';
import { Student as StudentModel } from '../../models';

export interface StudentProps {
    student: StudentModel
    onClick?: (newValue : String) => void
}

export default function Student ({student, onClick}: StudentProps) {
    const {name, age} = student

    return (
    <div onClick={() => onClick?.(name)}>
        <p>Student: {name} {age}</p>
    </div>
  );
}
