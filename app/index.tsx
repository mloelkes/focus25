import { StyleSheet, View } from "react-native";
import TimerScreen from "../src/screens/TimerScreen";

export default function Index() {
  return (
    <View style={styles.container}>
      <TimerScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
