import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SIZES } from "../../../utils/constants";
import { styles } from "./styles";

const PeopleCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PeopleDetails", { data })}
    >
      <View style={styles.contactDetails}>
        <Image
          source={data.avatarImage}
          resizeMode="cover"
          style={{
            width: 42,
            height: 42,
            marginRight: SIZES.base,
          }}
        />
        <View>
          <Text style={styles.contactName}>{data.name}</Text>
          <Text style={styles.contactCompany}>{data.company}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PeopleCard;
