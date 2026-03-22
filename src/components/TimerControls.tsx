import { Pressable, StyleSheet, Text, View } from "react-native";

type TimerControlsProps = {
  isRunning: boolean;
  onStartPause: () => void;
  onReset: () => void;
};

export default function TimerControls({
  isRunning,
  onStartPause,
  onReset,
}: TimerControlsProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onReset}>
        <Text style={styles.secondaryText}>Reset</Text>
      </Pressable>

      <Pressable onPress={onStartPause}>
        <Text style={styles.primaryText}>
          {isRunning ? "Pause" : "Start"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 24,
  },
  primaryText: {
    fontSize: 13,
    color: "#111111",
    fontWeight: "500",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  secondaryText: {
    fontSize: 13,
    color: "#8a8a8a",
    fontWeight: "400",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
});