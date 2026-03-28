import { StyleSheet, Text, View } from "react-native";

type SessionCounterProps = {
  completedSessions: number;
};

export default function SessionCounter({
  completedSessions,
}: SessionCounterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Completed Sessions</Text>
      <Text style={styles.value}>{completedSessions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 2,
  },
  label: {
    fontSize: 12,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    color: "#907b59",
    fontWeight: "600",
  },
  value: {
    minWidth: 36,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    overflow: "hidden",
    textAlign: "center",
    fontSize: 16,
    color: "#17120e",
    backgroundColor: "#ead8bb",
    fontWeight: "600",
  },
});
