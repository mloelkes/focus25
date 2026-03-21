import { StyleSheet, Text, View } from "react-native";
import type { TimerMode } from "../types/timer";

type TimerDisplayProps = {
  time: string;
  mode: TimerMode;
};

export default function TimerDisplay({
  time,
  mode,
}: TimerDisplayProps) {
  const modeLabel = mode === "focus" ? "Focus Session" : "Break Time";

  return (
    <View style={styles.container}>
      <Text style={styles.modeText}>{modeLabel}</Text>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  modeText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#6b6b6b",
    letterSpacing: 0.4,
  },
  timeText: {
    fontSize: 72,
    fontWeight: "700",
    color: "#1f1f1f",
  },
});