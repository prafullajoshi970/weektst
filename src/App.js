import Award from "./Component/Award/Award";
import Feature from "./Component/Feature/Feature";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Imgtext from "./Component/Imgtext/Imgtext";

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Imgtext></Imgtext>
    <Feature></Feature>
    <Award></Award>
    <Footer></Footer>
    </div>
  );
}

export default App;
