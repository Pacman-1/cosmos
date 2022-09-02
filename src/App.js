import $ from 'jquery';
import Main from './Components/Components/Main';
import "./app.css"
import Header from './Components/Header';
import WebFont from 'webfontloader';

function App() {
  return (
    <div className='app-section'>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
