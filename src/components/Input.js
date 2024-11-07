import react from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function Input(props) {
  return (
    <TextInput
      {...props}
      keyboardType="decimal-pad"
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({  
  input: {
    backgroundColor: '#FFF',
    marginBottom: 8
  }
});
