import React from 'react';
import ProblemDataForm from './components/ProblemDataForm';
import { ProblemsService } from './api/services/ProblemsService';

function App() {
  return <>
  <ProblemDataForm/>
  {ProblemsService()}

  </>
}

export default App;
