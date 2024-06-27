import { Button } from '@mui/material';
import React from 'react';
import SimpleInterface from './components/SimpleInterface';
function App() {

  return (
   <div className='App'>
      <SimpleInterface />
       <Button variant='outlined' sx={{color: 'green', borderColor: 'green', marginTop: '10px'}}>Hello World</Button>
   </div>
  )
}

export default App;
