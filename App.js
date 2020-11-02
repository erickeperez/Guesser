import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const getFonts = () => {
   return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
    <AppLoading 
      startAsync={getFonts} 
      onFinish={() => setDataLoaded(true)} 
      onError={(err) => console.log(err)}
      />
    );
  }

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content =  <GameScreen userChoice={userNumber}  onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen  roundsNumber={guessRounds} userNumber={userNumber} onRestart={newGameHandler}/>;
  }

  return (
    <View style={styles.screen}>
      <Header 
      title="Guess a Number"
      style={styles.header}
       />
      {content}
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  header: {
    color: '#2d3436'
  }
});
