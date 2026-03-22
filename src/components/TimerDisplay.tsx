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
  const modeLabel = mode === "focus" ? "Focus" : "Break";

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
  },
  modeText: {
    fontSize: 13,
    fontWeight: "400",
    marginBottom: 26,
    color: "#8a8a8a",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  timeText: {
    fontSize: 70,
    fontWeight: "300",
    color: "#111111",
    letterSpacing: -1.5,
  },
});