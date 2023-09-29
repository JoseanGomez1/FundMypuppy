// // import "./App.css";
// // import { useState } from "react";
// // import Header from "./components/Header";
// // import Main from "./components/Main";
// // import { PuppiesContext } from "./data/puppiescontext";

// // function App() {
// //   const { Provider, PuppiesData, Consumer } = PuppiesContext;
// //   console.log(Provider, Consumer)
// //   const [state, setState] = useState({});
// //   return (

// //     <div className="App">
// //             <PuppiesData value={{ state, setState }}>
// //       <Header />
// //       <Main />
// //       </PuppiesData>
// //     </div>
// //   );
// // }

// // export default App;

// import "./App.css";
// import { useState } from "react";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import { PuppiesContext } from "./data/puppiescontext";

// function App() {
//   const { Provider } = PuppiesContext; // Destructure only the Provider

//   const [state, setState] = useState({});

//   return (
//     <div className="App">
//       <Provider value={{ state, setState }}>
//         <Header />
//         <Main />
//       </Provider>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

import { PuppiesContext } from "./data/puppiescontext"; // Update the import

function App() {
  const { Provider: PuppiesData, Consumer } = PuppiesContext; // Update the context names
  const [state, setState] = useState({
    error: ""
  });
  return (
    <div className="App">
      <PuppiesData value={{ state, setState }}> {/* Update the context name */}
        <Header />
        <Main />
      </PuppiesData>
    </div>
  );
}

export default App;
