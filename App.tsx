import React, { useState } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Output from './components/Output';
import Buttons from './components/Buttons';

const App: () => React$Node = () => {
  const [outputState, setOutputState] = useState("");

  const userInputHandler = (userInput: React.SetStateAction<string>) => {
    if (userInput === "⌫") {
      var tempStr = outputState;
      tempStr = tempStr.slice(0, -1);
      setOutputState(tempStr);
    } else if (userInput === "=" && (outputState.slice(-1) >= '0' && outputState.slice(-1) <= '9')) {
      var result = eval(outputState);
      setOutputState(String(result));
    } else if (userInput !== "=") {
      setOutputState(outputState + userInput);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={{ justifyContent: 'flex-end', flex: 1, }}>
        <Output userOutput={outputState} />
      </View>

      <View style={{ flex: 1 }}>
        <Buttons onUserInput={userInputHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center'
  },
});

export default App;
