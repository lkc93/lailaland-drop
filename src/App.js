import React, { useState } from 'react';
import './App.css';
import twitterLogo from './assets/twitter-logo.svg';
import CandyMachine from './CandyMachine';

// Constants
const TWITTER_HANDLE = 'winter_NFTs';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const [showWinter, setShowWinter] = useState(false);

  window.addEventListener('message', (event) => {
    console.log(`Received message: ${event.data}`);

    if (event.data == 'closeWinterCheckoutModal') {
      setShowWinter(false);
    }
  });

  const toggleWinter = async () => {
    setShowWinter(true)
  };

  return (
    <div className="App">
      {showWinter && (<iframe id="winter-checkout" src="https://checkout.usewinter.com/?projectId=1" allowtransparency="true" className="winter-iframe" ></iframe>)}
      <div className="container">
        <div className="header-container">
          <p className="header">✨ Lailaland NFTs</p>
          <p className="sub-text">Beautiful places I've seen, loved and photographed. Minted on Solana with a <b>very</b> special checkout!</p>
          {/* <button
            className="cta-button connect-wallet-button"
            onClick={toggleWinter}
          >
            MINT YOUR NFT
          </button> */}
        </div>

        <p className="header">We're out of mints in this drop. Thanks for the love! </p>

        {/* <CandyMachine className="header" /> */}
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`say hi! @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;