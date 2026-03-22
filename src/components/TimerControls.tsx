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
    gap: 10,
    marginTop: 4,
  },
  primaryButton: {
    backgroundColor: "#111111",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 999,
    minWidth: 112,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.2,
  },
  secondaryButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 999,
    minWidth: 112,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  secondaryButtonText: {
    color: "#111111",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.2,
  },
});