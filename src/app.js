// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './Component/IndecisionApp.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';















ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/////////////////////////////////////////////////////////////////////////////////////////
//                     Passing Children to Component
/////////////////////////////////////////////////////////////////////////////////////////
// const Layout=(props)=>
// {
   
//     return(
//         <div> 
//         <p>header</p>
//         {props.children}
//         <p>footer</p>
//         </div>
//     );
// };
// // const template=(
// // <div>
// //    <p>hello</p> 
// // </div>
// // );





//  ReactDOM.render(<Layout
   
//      > <p>hello</p></Layout>
//      , document.getElementById('app'));


//////////////////////////////////////////////////////////////////////////////////////////////////
//                            other constractor syntax
/////////////////////////////////////////////////////////////////////////////////////////////////
// class Oldsyntax{
//     constructor(){
//         this.name="tamir";
//         this.great=this.great.bind(this);
//     }
//     great(){
//         return `hi my name is ${this.name}`;
//     }
// }
// const oldsyntax=new Oldsyntax();
// console.log(oldsyntax.name);
// console.log(oldsyntax.great);


// class NewSyntax{
//     name="mor";
//     great=()=>{
//         return `hi my name is ${this.name}`;
//     }
// }
// const newSyntax=new NewSyntax();
// console.log(newSyntax.name);
// console.log(newSyntax.great);


// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };


