import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
// import store from './redux/cake/store';
import store from "./redux/store";

<<<<<<< HEAD
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
function App() {
  return (
    <div>
    <Provider store={store}>
    <CakeContainer />
    <HooksCakeContainer/>
    <IceCreamContainer/>
    <NewCakeContainer/>
    </Provider>
=======
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
>>>>>>> origin/master
    </div>
  );
}

export default App;
