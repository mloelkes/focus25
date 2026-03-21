import { Pressable, StyleSheet, Text, View } from "react-native";
import type { TimerMode } from "../types/timer";

type ModeSwitcherProps = {
  mode: TimerMode;
  onChangeMode: (mode: TimerMode) => void;
};

export default function ModeSwitcher({
  mode,
  onChangeMode,
}: ModeSwitcherProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          mode === "focus" ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => onChangeMode("focus")}
      >
        <Text
          style={[
            styles.buttonText,
            mode === "focus" ? styles.activeButtonText : styles.inactiveButtonText,
          ]}
        >
          Focus
        </Text>
      </Pressable>

      <Pressable
        style={[
          styles.button,
          mode === "break" ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => onChangeMode("break")}
      >
        <Text
          style={[
            styles.buttonText,
            mode === "break" ? styles.activeButtonText : styles.inactiveButtonText,
          ]}
        >
          Break
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    minWidth: 100,
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#111",
  },
  inactiveButton: {
    backgroundColor: "#e5e5e5",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  activeButtonText: {
    color: "#fff",
  },
  inactiveButtonText: {
    color: "#111",
  },
});