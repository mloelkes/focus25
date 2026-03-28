import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppLogo from "../components/AppLogo";
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
  const isComplete = secondsLeft === 0;
  const modeDuration = mode === "focus" ? FOCUS_DURATION : BREAK_DURATION;

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
    if (isComplete) {
      setSecondsLeft(modeDuration);
      setIsRunning(true);
      return;
    }

    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(modeDuration);
  };

  const handleChangeMode = (newMode: TimerMode) => {
    setMode(newMode);
    setIsRunning(false);
    setSecondsLeft(newMode === "focus" ? FOCUS_DURATION : BREAK_DURATION);
  };

  return (
    <LinearGradient
      colors={["#faf4ec", "#f2e3cf", "#ead6be", "#f6ede2"]}
      locations={[0, 0.3, 0.74, 1]}
      start={{ x: 0.1, y: 0.04 }}
      end={{ x: 0.9, y: 1 }}
      style={styles.gradientBackground}
    >
      <LinearGradient
        colors={["rgba(255,255,255,0.34)", "rgba(255,246,232,0.12)", "rgba(214,181,142,0.16)"]}
        locations={[0, 0.48, 1]}
        start={{ x: 0.88, y: 0.08 }}
        end={{ x: 0.14, y: 0.92 }}
        style={styles.overlayGradient}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <View style={styles.topSection}>
              <AppLogo />
            </View>

            <View style={styles.centerSection}>
              <TimerDisplay time={formatTime(secondsLeft)} mode={mode} />

              <TimerControls
                isRunning={isRunning}
                isComplete={isComplete}
                onStartPause={handleStartPause}
                onReset={handleReset}
              />
            </View>

            <View style={styles.bottomSection}>
              <Text style={styles.footerLabel}>Session Settings</Text>
              <ModeSwitcher mode={mode} onChangeMode={handleChangeMode} />
              <SessionCounter completedSessions={completedSessions} />
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },

  overlayGradient: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: "transparent",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    position: "relative",
  },

  topSection: {
    paddingTop: 28,
    alignItems: "center",
  },

  centerSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 44,
  },

  bottomSection: {
    marginBottom: 28,
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 20,
    borderRadius: 30,
    backgroundColor: "#fcf8f1",
    borderWidth: 1,
    borderColor: "#e7dccb",
    alignItems: "stretch",
    gap: 16,
    shadowColor: "#201813",
    shadowOpacity: 0.08,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    elevation: 3,
  },

  footerLabel: {
    fontSize: 11,
    letterSpacing: 2.6,
    textTransform: "uppercase",
    color: "#9a8661",
    textAlign: "center",
    fontWeight: "600",
  },
});
