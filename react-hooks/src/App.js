import logo from './logo.svg';
import './App.css';
// import PercentageCalculator from './component/PercentageCalclator';

import UseRefExample from './component/useRef/UseRefExample';
import ClassCounter from './component/useState/ClassCounter';
import HooksCounter from './component/useState/HooksCounter';
import HooksObject from './component/useState/HooksObject';
import HooksArray from './component/useState/HooksArray';
import useEffectHook from './component/useEffect/HookCounterOne';
import HookCounterOne from './component/useEffect/HookCounterOne';
import HookCounterOne2 from './component/useEffect/HookCounterOne2';
import FetchData from './component/useEffect/FetchData';
import RefDemo from './component/useRef/RefDemo';

function App() {
  return (
    <div className="App">
      
      {/* <UseRefExample></UseRefExample> */}

      {/* <ClassCounter/> */}

      {/* <HooksCounter/> */}
      {/* <HooksObject/> */}
      {/* <HooksArray/> */}
      {/* <useEffectHook/> */}
      {/* <HookCounterOne2/> */}
      {/* <FetchData/> */}
      <RefDemo/>
    </div>
  );
}

export default App;
