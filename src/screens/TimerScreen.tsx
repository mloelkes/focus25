import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import ModeSwitcher from "../components/ModeSwitcher";
import SessionCounter from "../components/SessionCounter";
import TimerControls from "../components/TimerControls";
import TimerDisplay from "../components/TimerDisplay";
import { BREAK_DURATION, FOCUS_DURATION } from "../constants/timer";
import type { TimerMode } from "../types/timer";
import { formatTime } from "../utils/formatTime";

export default function TimerScreen() {
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<TimerMode>("focus");
  const [completedSessions, setCompletedSessions] = useState(0);

  const secondsLeft = mode === "focus" ? FOCUS_DURATION : BREAK_DURATION;

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    Alert.alert("Timer reset");
  };

  const handleChangeMode = (newMode: TimerMode) => {
    setMode(newMode);
    setIsRunning(false);
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

      <ModeSwitcher mode={mode} onChangeMode={handleChangeMode} />

      <SessionCounter completedSessions={completedSessions} />
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