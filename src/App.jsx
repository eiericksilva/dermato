import Navbar from "./components/Navbar/Navbar.component";
import Header from "./components/Header/Header.component";
import Services from "./components/Services/Services.component";
import Section from "./components/Section/Section.component";
import Questions from "./components/Questions/Questions.component";
import ContainerComentarios from "./components/ContainerComentarios/ContainerComentarios.component";
import CardComentario from "./components/CardComentario/CardComentario.component";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Section />
      <Questions />
      <ContainerComentarios />
    </div>
  );
};

export default App;
