import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  deckContainer: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row'
  }
})

const BlackJack = ({ classes }) => {
  const [deckId, setDeckId] = useState(null);
  const [playerDeck, setPlayerDeck] = useState([]);
  const [dealerDeck, setDealerDeck] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const getGameResult = async () => {
      const playerDeckVal = await getPlayerDeckVal();
      const dealerDeckVal = await getDealerDeckVal();

      console.log(playerDeckVal, dealerDeckVal);

      if (playerDeckVal > 21 || dealerDeckVal == 21) {
        setGameOver(true);
        setWinner('dealer wins');
      };
      if (playerDeckVal === 21 || (playerDeckVal < 21 && dealerDeckVal > 21)) {
        setGameOver(true);
        setWinner('player wins')
      };
      if (playerDeckVal > 0 && dealerDeckVal > 0 && (playerDeckVal === dealerDeckVal)) {
        setGameOver(true);
        setWinner('the game is fucking tired')
      };
      if (dealerDeckVal >= 17 && dealerDeckVal > playerDeckVal) {
        setGameOver(true);
        setWinner('dealer wins');
      };
      if (dealerDeckVal >= 17 && dealerDeckVal < playerDeckVal) {
        setGameOver(true);
        setWinner('player wins');
      };
    };
    getGameResult();
  });

  const getPlayerDeckVal = async () => {
    let cardSum = 0;
    playerDeck.forEach(card => {
      let cardVal = card.value;
      if (cardVal === 'QUEEN' || cardVal === 'KING' || cardVal === 'JACK') {
        cardVal = 10;
      } else if (cardVal === 'ACE') {
        cardVal = 11;
      } else {
        cardVal = parseInt(cardVal)
      };
      cardSum += cardVal;
    });
    return cardSum;
  };

  const getDealerDeckVal = async () => {
    let cardSum = 0;
    dealerDeck && dealerDeck.forEach(card => {
      let cardVal = card.value;
      if (cardVal === 'QUEEN' || cardVal === 'KING' || cardVal === 'JACK') {
        cardVal = 10;
      } else if (cardVal === 'ACE') {
        cardVal = 11;
      } else {
        cardVal = parseInt(cardVal)
      };
      cardSum += cardVal;
    });
    return cardSum;
  };

  useEffect(async () => {
    const deck_id = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.data.deck_id);
    setDeckId(deck_id);
  }, []);

  const handleStartGame = async () => {
    const playerDrawnCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`).then(res => res.data.cards);
    setPlayerDeck(playerDrawnCards);

    const dealerDrawnCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then(res => res.data.cards);
    setDealerDeck(dealerDrawnCards);
  };

  const handlePlayerHit = async () => {
    if (playerDeck && playerDeck.length < 5) {
      const drawnCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then(res => res.data.cards[0]);
      setPlayerDeck(playerDeck => [...playerDeck, drawnCard]);
    }
  };

  const handlePlayerStand = async (playerDeck, dealerDeck, deckId) => {
    if (playerDeck) {
      const dealerDeckVal = await getDealerDeckVal(dealerDeck);

      let dealerSum = dealerDeckVal;
      while (dealerSum < 17) {
        const drawnCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then(res => res.data.cards[0]);
        setDealerDeck(dealerDeck => [...dealerDeck, drawnCard]);
        let currentDealerCardVal = drawnCard.value;
        if (currentDealerCardVal === 'QUEEN' || currentDealerCardVal === 'KING' || currentDealerCardVal === 'JACK') {
          currentDealerCardVal = 10;
        } else if (currentDealerCardVal === 'ACE') {
          currentDealerCardVal = 11;
        } else {
          currentDealerCardVal = parseInt(currentDealerCardVal)
        };
        dealerSum += currentDealerCardVal;
      }
      return dealerSum;
    }
  };

  const GameOver = ({ isGameOver }) => {
    if (isGameOver === true) {
      return (
        <div>
          <p>{winner}</p>
        </div>
      )
    } else {
      return (
        <div />
      )
    }
  };

  // const handleReset = () => {
  //   setGameOver(false);
  //   setWinner('');
  //   setDeckId(null);
  //   setPlayerDeck([]);
  //   setDealerDeck([])
  // };


  return (
    <div className={classes.app}>
      <h1>Welcome to the Black Jack Game</h1>
      <br />
      <div>
        <button onClick={handleStartGame} disabled={gameOver}>start game</button>
        <button onClick={handlePlayerHit} disabled={gameOver}>hit</button>
        <button onClick={() => handlePlayerStand(playerDeck, dealerDeck, deckId)} disabled={gameOver}>stand</button>
        {/* <button onClick={handleReset}>reset game</button> */}
      </div>
      <div>
        <GameOver isGameOver={gameOver} />
      </div>
      <br />
      <div>
        <h2>Dealer: </h2>
        <div className={classes.deckContainer}>
          {dealerDeck.map(card => {
            return (
              <div key={card.code}>
                <img
                  src={card.image}
                  alt={card.value}
                />
              </div>
            )
          })}
        </div>
        <br />
        <h2>Player: </h2>
        <div className={classes.deckContainer}>
          {playerDeck.map(card => {
            return (
              <div key={card.code}>
                <img
                  src={card.image}
                  alt={card.value}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default withStyles(styles)(BlackJack);
