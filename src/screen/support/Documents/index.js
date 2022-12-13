import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import HeaderGlobal from "../../../components/HeaderGlobal";
import FocusedStatusBar from "../../../components/StatusBar";
import PDFReader from "rn-pdf-reader-js";
import { styles } from "./styles";
import { COLORS } from "../../../utils/constants";
import pdf from "../../../../assets/pdfsample.pdf";

const DocumentScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <HeaderGlobal />
      <View style={styles.topbar}>
        <TouchableOpacity
          style={styles.topbarlink}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={18} style={styles.icon} />
          <Text style={styles.linkText}>Minerva GTCS</Text>
        </TouchableOpacity>
      </View>
      <PDFReader
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        source={{
          uri: "http://fitnik.tech/public/docs/terms.pdf",
        }}
      />
    </SafeAreaView>
  );
};

export default DocumentScreen;
