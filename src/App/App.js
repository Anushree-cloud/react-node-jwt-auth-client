import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

function App() {
  return (
    <div className="App d-flex justify-content-center mt-5">
      <Register />
      <Login />
    </div>
  );
}

export default App;
