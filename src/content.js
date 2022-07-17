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


// conn({ query: getContentQuery })
//   .then(({ data }) => {
//     const content = data.portfolio_content[0]
//     console.log("data----->", content)
//     return content

//   })
//   .catch((e) => {
//     console.log(e);
//   });


// const content = async() => await conn({ query: getContentQuery })





const ContentFunc = () => {
    //     const array = [] 
    //     await conn({ query: getContentQuery })
    //       .then(({ data }) => {
    //     // const content = JSON.stringify(data.portfolio_content[0])
    //     // console.log("data----->", content)
    //     array.push(data.portfolio_content[0])
    //     return data.portfolio_content[0]
    
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   })
    
    const array = {key: "value"}
    
      return array
        
      }

const Content = ContentFunc()


  export default Content;

// module.exports = Content ;