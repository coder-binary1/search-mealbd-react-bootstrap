import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/search' element={<seacrch />} />
      </Routes>
    </div>
  );
}

export default App;
