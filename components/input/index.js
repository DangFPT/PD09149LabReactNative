import { SafeAreaView, Text, TextInput, View } from "react-native"
import {styles} from './style'

const Input = () => {
    return (
      <SafeAreaView>
        <TextInput styles = {styles.inputx} />
      </SafeAreaView>
    );
  };
  
  export default Input;