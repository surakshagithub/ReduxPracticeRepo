import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
// import store from './redux/cake/store';
import store from './redux/store';

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
    </div>
  );
}

export default App;
