import React from 'react';
import { StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { HomeNavigator } from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <HomeNavigator />
    </>

  );
};
export default App;
