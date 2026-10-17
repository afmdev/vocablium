import { fullForm, sampleDeck } from "@vocablium/core";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sampleDeck.title}</Text>
      <FlatList
        data={sampleDeck.words}
        keyExtractor={(word) => word.id}
        renderItem={({ item }) => (
          <Text style={styles.word}>
            {item.emoji} {fullForm(item)} — {item.translations?.es}
          </Text>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 72, paddingHorizontal: 24 },
  title: { fontSize: 32, fontWeight: "600", marginBottom: 16 },
  word: { fontSize: 18, paddingVertical: 8 },
});
