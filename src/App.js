// import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import TcakeContainer from "./Components/TcakeContainer";
import TicecreamContainer from "./Components/TicecreamContainer";
import TusersContainer from "./Components/TusersContainer";
// import store from './redux/cake/store';
import store from "./redux/store";

// import HooksCakeContainer from "./Components/HooksCakeContainer";
// import IceCreamContainer from "./Components/IceCreamContainer";
// import { UserComponent } from "./Components/UserComponent";
// import UserContainer from "./Components/UserContainer";
// import FetchingUsers from "./Components/FetchingUsers";
// import NewCakeContainer from "./Components/NewCakeContainer";
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
        {/* <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}
        {/* <UserContainer /> */}
        {/* <NewCakeContainer/>
        <FetchingUsers/> */}
        <TcakeContainer/>
        <TicecreamContainer/>
        <TusersContainer/>
      
      </Provider>
    </div>
  );
}

export default App;
