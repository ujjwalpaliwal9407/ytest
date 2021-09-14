import logo from './logo.svg';
import './App.css';
import Add from './component/Add';
import ChildA from './task/ChildA';
import {Provider} from 'react-redux'
import { Store } from '@material-ui/icons';
import Reducer from './task/Reducer';
import Hoc from "./hoc/Hoc"
// import Main from './nikhil/React-form/Main';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Redux from './task/Redux';
import Redux1 from './task/Redux1';
import Child from './hoc/Child';
import rootReducer from './reducers/rootReducers'
import Routing from './Protected/Routing';
import Main from './components/Main'
const store = createStore(rootReducer, applyMiddleware(thunk));
function App(props) {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <Hoc/>
      <Child/> */}
      <Main/>
      {/* <ChildA/> */}
      {/* <Add/> */}
      {/* <Routing/> */}
      {/* <Redux1/> */}
      {/* <Main/> */}
      {/* <Redux/> */}
    </div>
    </Provider>
  );
}

export default App;
