import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ModeSwitcher from "../components/ModeSwitcher";
import SessionCounter from "../components/SessionCounter";
import TimerControls from "../components/TimerControls";
import TimerDisplay from "../components/TimerDisplay";
import { BREAK_DURATION, FOCUS_DURATION } from "../constants/timer";
import type { TimerMode } from "../types/timer";
import { formatTime } from "../utils/formatTime";

export default function TimerScreen() {
  const [mode, setMode] = useState<TimerMode>("focus");
  const [secondsLeft, setSecondsLeft] = useState(FOCUS_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);

  // ⏱ Timer logic
  useEffect(() => {
    if (!isRunning) return;

    if (secondsLeft === 0) {
      setIsRunning(false);

      if (mode === "focus") {
        setCompletedSessions((prev) => prev + 1);
      }

      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft, mode]);

  // ▶️ Start / Pause
  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  // 🔄 Reset
  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(mode === "focus" ? FOCUS_DURATION : BREAK_DURATION);
  };

  // 🔁 Mode switch
  const handleChangeMode = (newMode: TimerMode) => {
    setMode(newMode);
    setIsRunning(false);
    setSecondsLeft(
      newMode === "focus" ? FOCUS_DURATION : BREAK_DURATION
    );
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