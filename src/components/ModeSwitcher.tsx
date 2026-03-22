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
      <Pressable onPress={() => onChangeMode("focus")}>
        <Text
          style={[
            styles.text,
            mode === "focus" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Focus
        </Text>
      </Pressable>
      
      <Pressable onPress={() => onChangeMode("break")}>
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
    gap: 24,
    marginTop: 28,
  },
  text: {
    fontSize: 13,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  activeText: {
    color: "#111111",
    fontWeight: "500",
  },
  inactiveText: {
    color: "#8a8a8a",
    fontWeight: "400",
  },
});