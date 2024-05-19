import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import Sidebar from './Sidebar';
import Giraffe from "./Giraffe.tsx";
import { pSim, stonkystonk } from './graphing.tsx'

const MainPage: React.FC = () => {
  const trendingData = [
    { title: "1. orange AI", rank: "⇈ +3", company: "orange AI", change: "+12%", changeClass: "positive" },
    { title: "2. Steves model", rank: "⇊ -1", company: "Steves model", change: "-6%", changeClass: "negative" },
    { title: "3. the bob net", rank: "⇊ -1", company: "the bob net", change: "-3%", changeClass: "negative" },
    { title: "4. elon musk AI", rank: "⇈ +1", company: "elon musk AI", change: "+13%", changeClass: "positive" },
    { title: "5. hawks hacking ai", rank: "⇊ -2", company: "hawks hacking ai", change: "-19%", changeClass: "negative" },
  ];

  const neuralNetsData = [
    { title: "1. orange AI", rank: "⇈ +4", company: "orange AI", change: "+16%", price: "4321", imgSrc: "", changeClass: "positive" },
    { title: "2. Steves model", rank: "⇊ -1", company: "Steves model", change: "-8%", price: "4033", imgSrc: "", changeClass: "negative" },
    { title: "3. the bob net", rank: "⇈ +3", company: "the bob net", change: "+2%", price: "3128", imgSrc: "", changeClass: "positive" },
    { title: "4. elon musk AI", rank: "⇈ +4", company: "elon musk AI", change: "+26", price: "2003", imgSrc: "", changeClass: "positive" },
    { title: "5. hawks hacking ai", rank: "⇊ -3", company: "hawks hacking ai", change: "-23%", price: "2003", imgSrc: "", changeClass: "negative" },
  ];

  return (
    <>
      <div className="main-container">
        <div className="welcome-section">
          <h1>Welcome Back</h1>
          <p>All your AI models, all on PEAR.</p>
          <Link to="/info" className="link-button">
            Let's Go
          </Link>
        </div>
      </div>
      <Sidebar />
      <div className="content-section">
        <div className="main-content">
          <h2>Trending Now:</h2>
          <div className="trending-content">
            <div className="trending-header">
              <div className="trending-title-big">Company</div>
              <div className="trending-price-big">Price</div>
              <div className="trending-change-big">x̄ Δ</div>
            </div>
            {trendingData.map((item, index) => (
              <div className="trending-row" key={index}>
                <div className="titleHold">
                  <div className="trending-title">{item.title}</div>
                  <div className={`trending-rank ${item.changeClass}`}>{item.rank}</div>
                </div>
                <div className="trending-company">
                  <div className="graphHold">
                    <Giraffe pSim={new pSim(Math.random() + 1, 900 + Math.random() * 300, 60 + 80 * Math.random(), Math.random() / 15)} stonkystonk={new stonkystonk()} chicken={true} />
                  </div>
                </div>
                <div className={`trending-change ${item.changeClass}`}>{item.change}</div>
              </div>
            ))}
          </div>
          <h2>Best in Neural Nets:</h2>
          <div className="neural-nets-content">
            <div className="neural-nets-header">
              <div className="neural-nets-title-big">Company</div>
              <div className="neural-nets-price-big">Price</div>
              <div className="neural-nets-change-big">x̄ Δ</div>
            </div>
            {neuralNetsData.map((item, index) => (
              <div className="neural-nets-row" key={index}>
                <div className="titleHold">
                  <div className="neural-nets-title">{item.title}</div>
                  <div className={`neural-nets-rank ${item.changeClass}`}>{item.rank}</div>
                </div>
                <div className="neural-nets-company">
                  <div className="graphHold">
                    <Giraffe pSim={new pSim(Math.random() + 1, 900 + Math.random() * 300, 60 + 80 * Math.random(), Math.random() / 15)} stonkystonk={new stonkystonk()} chicken={true} />
                  </div>
                </div>
                <div className={`neural-nets-change ${item.changeClass}`}>{item.change}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;