import React from 'react';
import NavigationBar from './components/NavigationBar';
import Todo from './components/Pages/Todo'

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Todo/>
    </div>
  );
}

export default App;
