
import { PortfolioContext } from './context/portfolio';
import PortfolioObject from './Home';
import { useContext, useEffect } from 'react';

const { conn } = require("./connection/connection");

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


const ContentObjects = () =>{

  const { setPortfolioContent } = useContext(PortfolioContext);

  useEffect(async () => {
    const { portfolio_content } = await conn({ query: getContentQuery });
    setPortfolioContent(portfolio_content?.[0]);
  }, []);

  const contents = PortfolioObject()

  return (
    contents
  )

}

  export default ContentObjects;

