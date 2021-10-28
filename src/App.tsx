import React from 'react';
import './App.css';
import { Recipe } from './data/recipe/domain';
import { getActiveStep, getDuration, getSteps } from './data/recipe';
import { getEndTime } from './data/step/presenter';

const recipe: Recipe = {
  name: 'recipe',
  id: 'recipe-1',
  duration: 20,
  steps: [
    { id: 'step-1', name: 'step-1', startTime: 0, duration: 5 },
    { id: 'step-2', name: 'step-2', startTime: 6, duration: 5 },
    { id: 'step-3', name: 'step-3', startTime: 12, duration: 5 },
  ]
}

function App() {
  const [timer, setTimer] = React.useState(getDuration(recipe));

  const activeStep = getActiveStep(recipe, timer);

  React.useEffect(() => {
    const id = setInterval(() => {
      setTimer((pt) => pt - 1);
    }, 1000);

    return () => {
      clearInterval(id);
    }
  }, [])

  const secondsGone = getDuration(recipe) - timer;


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }} className="App">
      <div>
        {timer} сек
      </div>
      {getSteps(recipe).map((s) => (
        <div key={s.id} style={{ background: activeStep !== undefined && activeStep.id === s.id ? 'green' : 'black', color: 'white' }}>
          {s.name}
          {activeStep?.id === s.id ? <span>{getEndTime(s) - secondsGone}</span> : null}
        </div>
      ))}
    </div>
  );
}

export default App;
