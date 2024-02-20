import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  style: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;