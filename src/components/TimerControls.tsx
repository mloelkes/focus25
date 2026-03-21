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
      <Pressable style={styles.primaryButton} onPress={onStartPause}>
        <Text style={styles.primaryButtonText}>
          {isRunning ? "Pause" : "Start"}
        </Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={onReset}>
        <Text style={styles.secondaryButtonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
  },
  primaryButton: {
    backgroundColor: "#111",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    minWidth: 120,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#e5e5e5",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    minWidth: 120,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#111",
    fontSize: 18,
    fontWeight: "600",
  },
});