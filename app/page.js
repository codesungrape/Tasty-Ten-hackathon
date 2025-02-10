// THIS FILE IS EQUIVALENT TO APP.JSX FOR REACT
// WHERE WE IMPORT COMPONENTS AND RENDER THEM IN THE DOM TREE
// ENTRY POINT
import Header from "./Components/Header/Header";
import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <MainContainer />
      </main>

      <Footer />
    </div>
  );
}
