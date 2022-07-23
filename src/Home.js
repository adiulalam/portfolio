import { PortfolioContext } from './context/portfolio';

const { useContext, useEffect } = require('react');
// const React = require('react');

const PortfolioObject = () => {
  const { portfolio_content } = useContext(PortfolioContext);
  useEffect(() => console.log("portfolio_content---->",portfolio_content), [portfolio_content]);
    // console.log(portfolio_content);

  // return <h1>{portfolio_content?.fullName}</h1>;
  return portfolio_content;
};

export default PortfolioObject;
