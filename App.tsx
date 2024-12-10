import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1c1c1e' : '#f2f2f7',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    color: isDarkMode ? '#f5f5f5' : '#1c1c1e',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  };

  const footerStyle = {
    color: isDarkMode ? '#a9a9a9' : '#6b6b6b',
    fontSize: 16,
    marginTop: 20,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={textStyle}>RN 0.76.5</Text>
      <Text style={footerStyle}>Made with 🥰 by msb</Text>
    </SafeAreaView>
  );
}

export default App;
