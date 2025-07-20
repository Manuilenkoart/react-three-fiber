import Header from "./components/Header";
import Footer from "./components/Footer";

import { Model } from "./components/Model";
import { Scene } from "./components/Scene";
import { useApp } from "./useApp";

function App() {
  const {
    jarData: { description, jarGoal, jarAmount, name },
    animationIndex,
  } = useApp();

  return (
    <div style={{ display: "grid", height: "100vh" }}>
      <Header {...{ jarGoal, jarAmount, name }} />

      <Scene>
        <Model
          castShadow
          position={[0, 0, 0]}
          animationIndex={animationIndex}
        />
      </Scene>

      <Footer {...{ description }} />
    </div>
  );
}

export default App;
