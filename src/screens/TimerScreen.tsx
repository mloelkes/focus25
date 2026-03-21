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
        <Text style={styles.subtitle}>
          A minimal timer for focus and breaks
        </Text>

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
    backgroundColor: "#f6f1e9",
  },
  container: {
    flex: 1,
    backgroundColor: "#f6f1e9",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#1f1f1f",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b6b6b",
    marginBottom: 32,
    textAlign: "center",
  },
  timerCard: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#fffaf3",
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
    alignItems: "center",
  },
});