import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-native';

import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1c89b4',
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

  const navigate = useNavigate();

  const onPressFunction = (path) => () => {
    console.log('Pressed');
    navigate(path);
  };

  return <>
  <View style={styles.container}>
    <ScrollView horizontal>
      <Pressable onPress={onPressFunction('/signin')}>
        <Text style={styles.flexItem}>SignIn</Text>
      </Pressable>
      <Pressable onPress={onPressFunction('/')}>
        <Text style={styles.flexItem}>Repositories</Text>
      </Pressable>
      
    </ScrollView>
  </View>
  </>
};

export default AppBar;