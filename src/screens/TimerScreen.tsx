import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
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

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(mode === "focus" ? FOCUS_DURATION : BREAK_DURATION);
  };

  const handleChangeMode = (newMode: TimerMode) => {
    setMode(newMode);
    setIsRunning(false);
    setSecondsLeft(newMode === "focus" ? FOCUS_DURATION : BREAK_DURATION);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Focus25</Text>
        <Text style={styles.subtitle}>Minimal focus timer</Text>

        <View style={styles.timerCard}>
          <TimerDisplay time={formatTime(secondsLeft)} mode={mode} />
          <TimerControls
            isRunning={isRunning}
            onStartPause={handleStartPause}
            onReset={handleReset}
          />
        </View>

        <ModeSwitcher mode={mode} onChangeMode={handleChangeMode} />

        <SessionCounter completedSessions={completedSessions} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: "300",
    color: "#111111",
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  subtitle: {
    fontSize: 13,
    color: "#8a8a8a",
    marginBottom: 36,
    fontWeight: "300",
    letterSpacing: 0.2,
  },
  timerCard: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: "#ffffff",
    borderRadius: 28,
    paddingVertical: 36,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: "#efefef",
    alignItems: "center",
  },
});