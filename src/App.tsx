("./Category/Tabs");
import CategoryButton from "./Category/CategoryButton";
import Counter from "./musinsa/Counter";
import Tabs from "./Category/Tabs";

function App() {
  return (
    <div className="App">
      {/* <p className="text-red-600">dasfjkalsdfgjalsdfk</p>
      <p className="font-bold">asdf</p> */}
      <>
        <Tabs />
        {/* <CategoryButton image="watcha.png" title="watcha" />
        <CategoryButton image="netflix.png" title="watcha" />
        <CategoryButton image="disney.jpg" title="watcha" /> */}
      </>
      <>
        <Counter price={10000} />
        <Counter price={20000} />
        <Counter price={4000} />
      </>
      {/* <>
        <CategoryButton image="watcha.png" title="watcha" />
        <CategoryButton image="netflix.png" title="netflix" />
        <CategoryButton image="disney.jpg" title="disney" />
      </> */}
    </div>
  );
}

export default App;
