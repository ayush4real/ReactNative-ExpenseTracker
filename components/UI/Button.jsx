import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/styles";

function Button({ children, onPress, mode, style }) {
  return (
    <View style={[style]} >
      <Pressable onPress={onPress} android_ripple={{color: '#eee'}} style={({pressed}) => pressed && styles.pressed} >
        <View style={[styles.button, mode === 'flat' ? styles.flat : null, ]} > 
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]} >{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
      opacity: 0.40,
      backgroundColor: GlobalStyles.colors.primary100,
      borderRadius: 4,
  }
});

export default Button;
