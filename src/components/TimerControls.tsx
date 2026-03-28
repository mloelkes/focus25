import { Pressable, StyleSheet, Text, View } from "react-native";

type TimerControlsProps = {
  isRunning: boolean;
  isComplete: boolean;
  onStartPause: () => void;
  onReset: () => void;
};

export default function TimerControls({
  isRunning,
  isComplete,
  onStartPause,
  onReset,
}: TimerControlsProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onReset} style={styles.secondaryButton}>
        <Text style={styles.secondaryText}>Reset</Text>
      </Pressable>

      <Pressable onPress={onStartPause} style={styles.primaryButton}>
        <Text style={styles.primaryText}>
          {isRunning ? "Pause" : isComplete ? "Restart" : "Start"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
  },
  primaryButton: {
    minWidth: 112,
    paddingVertical: 15,
    paddingHorizontal: 26,
    borderRadius: 999,
    alignItems: "center",
    backgroundColor: "#17120e",
    shadowColor: "#17120e",
    shadowOpacity: 0.16,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 2,
  },
  secondaryButton: {
    minWidth: 96,
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 999,
    alignItems: "center",
    backgroundColor: "#efe1ca",
    borderWidth: 1,
    borderColor: "#e2cfaf",
  },
  primaryText: {
    fontSize: 12,
    color: "#f8f1e7",
    fontWeight: "600",
    letterSpacing: 1.8,
    textTransform: "uppercase",
  },
  secondaryText: {
    fontSize: 12,
    color: "#6f5f4d",
    fontWeight: "600",
    letterSpacing: 1.8,
    textTransform: "uppercase",
  },
});
