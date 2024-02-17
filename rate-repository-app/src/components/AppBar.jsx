import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgb(203, 195, 227)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
  },
  flexItem: {
    padding: 15,
    flexGrow: 0,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  // ...
});

const AppBar = () => {

  const onPressFunction = () => {
    console.log('Repositories');
  }

  return <>
  <View style={styles.container}>
    <Pressable onPress={onPressFunction}>
      <Text style={styles.flexItem}>Repositories</Text>
    </Pressable>
  </View>
  </>
};

export default AppBar;