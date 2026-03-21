import { SafeAreaView, StyleSheet } from "react-native";
import TimerScreen from "../../src/screens/TimerScreen";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <TimerScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});