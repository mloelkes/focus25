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
        onPress={() => onChangeMode("focus")}
        style={[
          styles.button,
          mode === "focus" ? styles.activeButton : styles.inactiveButton,
        ]}
      >
        <Text
          style={[
            styles.text,
            mode === "focus" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Focus
        </Text>
      </Pressable>

      <Pressable
        onPress={() => onChangeMode("break")}
        style={[
          styles.button,
          mode === "break" ? styles.activeButton : styles.inactiveButton,
        ]}
      >
        <Text
          style={[
            styles.text,
            mode === "break" ? styles.activeText : styles.inactiveText,
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
    padding: 6,
    borderRadius: 22,
    backgroundColor: "#f2e9dc",
    borderWidth: 1,
    borderColor: "#e0d1bc",
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#17120e",
    shadowColor: "#17120e",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 2,
  },
  inactiveButton: {
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 12,
    letterSpacing: 1.6,
    textTransform: "uppercase",
  },
  activeText: {
    color: "#f8f1e7",
    fontWeight: "600",
  },
  inactiveText: {
    color: "#7f6f5f",
    fontWeight: "600",
  },
});
