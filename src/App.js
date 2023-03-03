import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
// import store from './redux/cake/store';
import store from "./redux/store";

import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import { UserComponent } from "./Components/UserComponent";
function App() {
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px solid red",
      }}
    >
      <Provider store={store}>
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <UserComponent />
      </Provider>
    </div>
  );
}

export default App;
