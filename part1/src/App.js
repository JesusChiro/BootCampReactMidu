import './App.css';
import Mensaje from './Mensaje.js'


const Description = () => {
  return <p>
    Esta es la app del curso fullstack bootcamp
  </p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='en un curso' />
      <Mensaje color='yellow' message='de React JS' />
      <Description />
    </div>
  );
}

export default App;