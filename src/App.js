import './App.css';
import Footer from './Components/Footer';
import Layout from './Components/Layout';
import NavBar from './Components/NavBar';
import SignUpForm from './Components/SignUpForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SignUpForm />
      < Layout />
      <Footer />   
    </div>
  );
}

export default App;
