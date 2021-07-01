import './App.css';
import Footer from './Components/Footer';
import Layout from './Components/Layout';
import NavBar from './Components/NavBar';
import SignUpForm from './Components/SignUpForm';
import lufy from './imageInSrc.jpg'

function App() {
  return (
    <div className="App" >
      <NavBar />
      <h4  style={{ maxWidth:"100vw", paddingLeft:"5vw"}}>Checkpoint JSX</h4>
      <SignUpForm />
      < Layout />
      <div style={{border:"solid 2px red", maxWidth:"100vw",paddingLeft:"15vw", paddingRight:"15vw" }}>

 <h1 class="title red">Galery</h1>

 <br />
    <div style ={{display:"flex", }}>
 <img  width="320" height="460" src={lufy} alt="lufy" />
 <br />
 <img style ={{ marginLeft:"2vw", marginRight:"2vw"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMDy7XjWiLFdzhCASUfbIjzukcz5tnse2kQ&usqp=CAUU" />

 <img   width="320" height="460" src="/imageInPublic.jpg" />
 </div>
</div>
<br/>
<video width="320" height="240" controls style={{ paddingLeft:"5vw"}}>

 <source src="https://www.youtube.com/watch?v=eyonP1AgC0k" type="video/mp4"  />

</video>
      <Footer />   
    </div>
  );
}

export default App;
