import { StyleSheet, Text, View } from "react-native";

export default function AppLogo() {
  return (
    <View style={styles.container}>
      <View style={styles.markBlock}>
        <Text style={styles.mark}>F</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 6,
  },
  markBlock: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: "#17120e",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    shadowColor: "#17120e",
    shadowOpacity: 0.16,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    elevation: 3,
  },
  mark: {
    fontSize: 36,
    lineHeight: 36,
    color: "#f8f1e7",
    fontWeight: "300",
    letterSpacing: -1.2,
    marginTop: -1,
  },
});
