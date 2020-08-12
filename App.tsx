import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Output from './components/Output';
import Buttons from './components/Buttons';

const App: () => React$Node = () => {
  return (
    <View style={styles.screen}>
      <View style={{justifyContent:'flex-end', flex: 1, }}>
        <Output/>
      </View>

      <View style={{flex: 1, }}>
        <Buttons/>
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
