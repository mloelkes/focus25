import { StyleSheet, Text, View } from "react-native";

type SessionCounterProps = {
  completedSessions: number;
};

export default function SessionCounter({
  completedSessions,
}: SessionCounterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        completed sessions: {completedSessions}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
  },
  text: {
    fontSize: 13,
    color: "#8a8a8a",
    fontWeight: "300",
    letterSpacing: 0.2,
  },
});