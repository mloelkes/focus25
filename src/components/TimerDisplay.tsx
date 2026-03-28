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
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 22,
    color: "#927d5a",
    letterSpacing: 2.8,
    textTransform: "uppercase",
  },
  timeText: {
    fontSize: 82,
    fontWeight: "300",
    color: "#17120e",
    letterSpacing: -2.6,
  },
});
