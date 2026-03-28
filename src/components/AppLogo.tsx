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
    marginBottom: 40,
  },
  markBlock: {
    width: 74,
    height: 74,
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: "rgba(122, 101, 79, 0.38)",
    backgroundColor: "rgba(255, 248, 240, 0.18)",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    shadowColor: "#b99f7e",
    shadowOpacity: 0.08,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 1,
  },
  mark: {
    fontSize: 38,
    lineHeight: 38,
    color: "#6e5d4d",
    fontWeight: "300",
    letterSpacing: -1.3,
    marginTop: -1,
  },
});
