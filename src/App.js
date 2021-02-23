import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick={()=>console.log("I am onclicked")}/>
//     </React.Fragment>
//    );
// }

const App = () => {
  return (
      <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )

}

const Cat=() =>{
  return <div>MEMO</div>
}
export default App;
