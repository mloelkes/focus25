import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import TimerControls from "../components/TimerControls";
import TimerDisplay from "../components/TimerDisplay";
import { FOCUS_DURATION } from "../constants/timer";
import type { TimerMode } from "../types/timer";
import { formatTime } from "../utils/formatTime";

export default function TimerScreen() {
  const [isRunning, setIsRunning] = useState(false);

  const mode: TimerMode = "focus";
  const secondsLeft = FOCUS_DURATION;

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    Alert.alert("Timer reset");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus25</Text>
      <TimerDisplay time={formatTime(secondsLeft)} mode={mode} />
      <TimerControls
        isRunning={isRunning}
        onStartPause={handleStartPause}
        onReset={handleReset}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f4ef",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#111",
  },
});