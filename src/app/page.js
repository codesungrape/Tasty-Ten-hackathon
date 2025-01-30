// THIS FILE IS EQUIVALENT TO APP.JSX FOR REACT
// WHERE WE IMPORT COMPONENTS AND RENDER THEM IN THE DOM TREE
// ENTRY POINT
import Header from "./Components/Header/Header";
import ToolbarBasicExample from "./Components/IngredientPicker/IngredientPicker";

import ControlledCarousel from "./Components/RecipeCarousel/RecipeCarousel";

import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "./Components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <Header />

      <ControlledCarousel />
      <ToolbarBasicExample />
      <MainContainer />
      <Footer />

    </div>
  );
}
