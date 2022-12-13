import React, { useCallback, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { COLORS, FONTS, SIZES } from "../../utils/constants";

const Attachment = () => {
  const [doc, setDoc] = useState();
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    }).then((response) => {
      if (response.type == "success") {
        let { name, size, uri } = response;

        / ------------------------/;
        if (Platform.OS === "android" && uri[0] === "/") {
          uri = `file://${uri}`;
          uri = uri.replace(/%/g, "%25");
        }
        / ------------------------/;

        let nameParts = name.split(".");
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = {
          name: name,
          size: size,
          uri: uri,
          type: "application/" + fileType,
        };
        console.log(fileToUpload, "...............file");
        setDoc(fileToUpload);
      }
    });
    console.log(result);
    console.log("Doc: " + doc.uri);
  };

  return (
    <View style={styles.attachmentContainer}>
      <Text style={styles.attachmentHeader}>identification</Text>
      <Text
        style={[
          styles.attachmentTitle,
          { color: COLORS.white, textTransform: "none", lineHeight: 38 },
        ]}
      >
        Please upload your document
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.fontBase,
          color: COLORS.white,
          lineHeight: 17,
          marginBottom: SIZES.base,
        }}
      >
        Identity verification helps us keep Quaychain platform secure.
      </Text>
      <TouchableOpacity style={styles.attachmentButton} onPress={pickDocument}>
        <Feather name="upload" size={24} style={styles.icon} />
        <Text style={styles.subTitle}>
          Please upload a copy of your valid identification in PNG, JPEG or PDF
          format
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons name="lock" size={18} color="white" />
        <Text
          style={{
            fontFamily: FONTS.regular,
            color: COLORS.white,
            marginLeft: SIZES.base,
          }}
        >
          Be sure that your ID will never be shared
        </Text>
      </View>
    </View>
  );
};

export default Attachment;
