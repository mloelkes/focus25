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
        Completed sessions today: {completedSessions}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
  },
  text: {
    fontSize: 16,
    color: "#6b6b6b",
    fontWeight: "600",
  },
});