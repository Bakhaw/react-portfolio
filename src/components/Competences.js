import React from 'react';
import { Progress } from 'reactstrap';
import './stylesheets/Competences.css';

const progressData = [
  {
    name: 'HTML/CSS',
    value: 75,
  },
  {
    name: 'Bootstrap',
    value: 75,
  },
  {
    name: 'JavaScript',
    value: 30,
  },
  {
    name: 'NodeJS',
    value: 30,
  },
  {
    name: 'React',
    value: 20,
  },
]


const Competences = (props) => {
  return (
    <div>

      {progressData.map((progress) => (
        <div className="competences-bar">
        <h3>{progress.name}</h3>
        <Progress value={progress.value} />
      </div>
      ))}
    </div>
  );
};

export default Competences;
