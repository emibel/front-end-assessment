import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import { CardList } from "./components/card-list";
import { Footer } from "./components/footer/footer";
import { usePlayGame } from "./hooks/play-game";

const App = () => {
  usePlayGame();

  return (
    <>
      <Header />
      <CardList />
      <Footer />
    </>
  );
};

export default App;
