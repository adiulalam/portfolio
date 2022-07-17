import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Pages";
import Nav from "./components/Nav";
// import Content from "./content";
const { conn } = require("./connection/connection");
require("isomorphic-fetch");

const getContentQuery = `
  query getContent {
    portfolio_content {
      profilePic
      backgroundImage
      fullName
      career
      resume
      education
      location
      email
      linkedin
      github
      description
      shortAboutMe {
        base
        loop
      }
      projects(order_by: { projectdate: desc }) {
        title
        description
        time
        application
        details
        technologies
        media {
          type
          src
          thumbnail
        }
      }
    }
  }
`;

// const obj = [{k : "val"}]
let m = {};


async function objFunc(){
  // const obj = {k : "val"}

  const obj = await conn({ query: getContentQuery })

  const obj2= obj.data

  // console.log(obj2)

  // m.push(obj2)

  // m['keyTest'] = obj2

  m = Object.assign(m, obj2);


  return m
}



// const obj2 = () => {

  const p = objFunc()

//   return p
// }

let k = m;

// const a = ()=> k.map

function App() {
  console.log("content----->",p)
  console.log("k----->",k)
  return (
    <p>{p}</p>
    // <div>
    //   <Nav>
        
    //     <Switch>
    //       <Route exact path="/" render={(props) => <Home {...props} />} />
    //       <Route render={() => <Redirect to="/" />} />
    //     </Switch>
    //   </Nav>
    // </div>
  );
}

export default App;
