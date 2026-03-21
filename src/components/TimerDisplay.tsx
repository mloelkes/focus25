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
    marginVertical: 32,
  },
  modeText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#444",
  },
  timeText: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#111",
  },
});