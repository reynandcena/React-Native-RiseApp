import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { COLORS } from "../../../utils/constants";

const ContactCard = ({ id, location, flag, address, phone1, phone2 }) => {
  return (
    <View style={styles.formCard} key={id}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: flag,
          }}
          resizeMode="contain"
          style={{
            width: 28,
            height: 20,
          }}
        />
        <Text style={styles.formTitle}>{location}</Text>
      </View>

      <Text style={styles.formSubTitle}>{address}</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons name="phone" size={18} style={styles.icon} />
        <Text style={styles.formTitle}>{phone1}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons name="phone" size={18} style={styles.icon} />
        <Text style={styles.formTitle}>{phone2}</Text>
      </View>
    </View>
  );
};

export default ContactCard;
