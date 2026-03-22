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
            mode === "focus"
              ? styles.activeButtonText
              : styles.inactiveButtonText,
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
            mode === "break"
              ? styles.activeButtonText
              : styles.inactiveButtonText,
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
    gap: 10,
    marginTop: 26,
  },
  button: {
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 999,
    minWidth: 96,
    alignItems: "center",
    borderWidth: 1,
  },
  activeButton: {
    backgroundColor: "#111111",
    borderColor: "#111111",
  },
  inactiveButton: {
    backgroundColor: "#ffffff",
    borderColor: "#e5e5e5",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.2,
  },
  activeButtonText: {
    color: "#ffffff",
  },
  inactiveButtonText: {
    color: "#111111",
  },
});