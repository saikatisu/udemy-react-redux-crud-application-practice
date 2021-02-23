import React from 'react';
import PropTypes from 'prop-types';

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
    {name:"noname",age:3}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
