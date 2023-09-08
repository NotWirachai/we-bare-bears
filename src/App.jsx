import Model from "./components/Models";
import BoxCanvas from "./components/BoxCanvas";

function App() {

  const models = [
    {
      path: "./models/cyberpunk_car/scene.gltf",
      size: 0.015
    },

    {
      path: "./models/mini_car_low_poly_v02/scene.gltf",
      size: 3
    },
  ];
  
  return (
    <div style={{display: "flex", flexDirection:"column"}}>
        {models.map((e, i) => (
        <div style={{ height:"100vh"}} key={e.path} id={i}>
            <Model models={e.path} size={e.size}/> 
            <BoxCanvas/>
        </div>
      ))}
       
    </div>
  );
}

export default App;
