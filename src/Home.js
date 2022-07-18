import { PortfolioContext } from './context/portfolio';

const { useContext, useEffect } = require('react');
const React = require('react');

const Home = () => {
  const { portfolio_content } = useContext(PortfolioContext);
  useEffect(() => console.log(portfolio_content), [portfolio_content]);
  //   console.log(portfolio_content);

  return <h1>{portfolio_content?.fullName}</h1>;
};

export default Home;
