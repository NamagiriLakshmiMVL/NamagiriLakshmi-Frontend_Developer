import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { SecondPage } from "./pages/SecondPage";
import { BriefImage1 } from "./pages/BriefImage1";
import { BoxPage } from "./pages/BoxPage";
import { ImageHalf } from "./pages/ImageHalf";
import { RoadmapP1 } from "./pages/RoadmapP1";
import { RoadmapP2 } from "./pages/RoadmapP2";
import { RoadmapP3 } from "./pages/RoadmapP3";
import { FinalPage } from "./pages/FinalPage";
import { ChartPage } from "./pages/ChartPage";

function App() {
  return (
    <div className="App">
      <Home />
      <SecondPage />
      <BriefImage1 />
      <BoxPage />
      <ImageHalf />
      <ChartPage />
      <RoadmapP1 />
      <RoadmapP2 />
      <RoadmapP3 />
      <FinalPage />
    </div>
  );
}

export default App;
