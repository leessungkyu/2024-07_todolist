import React from 'react';
import TodoItem from './components/molecule/TodoItem';
import AddButton from './components/atom/AddButton';
import Body from './components/organism/Body';
import Header from './components/organism/Header';


function App() {
  return (
    <div className="App">
      <div className='w-screen max-auto max-w-lg mx-auto'>
          <Header /> 
          <Body />
      </div>
    </div>
  );
}

export default App;
