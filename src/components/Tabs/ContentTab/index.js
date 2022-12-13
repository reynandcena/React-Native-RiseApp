import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const ContentsTab = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.link}>General Details</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <TouchableOpacity>
        <Text style={styles.link}>Work History</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <TouchableOpacity>
        <Text style={styles.link}>Attachments</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContentsTab;
