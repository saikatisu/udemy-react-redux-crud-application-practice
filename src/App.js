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
  const profiles = [
    {name:"Taro",age:10},
    {name:"HANAKO",age:5},
    {name:"noname"}
  ]
  return (
    <div>
      {
        profiles.map((profile,index)=>{
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )

}

const User=(props) =>{
  return <div>HI,I am {props.name}, and {props.age} years</div>
}
export default App;
