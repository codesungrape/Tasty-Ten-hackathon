// THIS FILE IS EQUIVALENT TO APP.JSX FOR REACT
// WHERE WE IMPORT COMPONENTS AND RENDER THEM IN THE DOM TREE
// ENTRY POINT
import Header from "./Components/Header/Header";
import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}
