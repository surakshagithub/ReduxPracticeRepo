import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
// import store from './redux/cake/store';
import store from './redux/store';

import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
function App() {
  return (
    <div>
    <Provider store={store}>
    <CakeContainer />
    <HooksCakeContainer/>
    <IceCreamContainer/>
    </Provider>
    </div>
  );
}

export default App;
