import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import { ASSETS, COLORS, FONTS, SIZES } from "../../../utils/constants";
import { styles } from "./styles";
import { color } from "react-native-reanimated";

const ProfileHeaderCard = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.avatarContainer}>
        {/* onPress={() => navigation.navigate("CameraScreen")} */}
        <TouchableOpacity>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>RD</Text>
          </View>
          <Text
            style={[
              styles.avatarEmail,
              { color: COLORS.primary, textAlign: "center" },
            ]}
          >
            Upload photo
          </Text>
        </TouchableOpacity>
        <Text style={styles.avatarName}>Reynan Decena</Text>
        <Text style={styles.avatarEmail}>reynan.decena@rise-x.io</Text>
      </View>

      <View style={{ paddingHorizontal: SIZES.spacing }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.avatarEmail, { textTransform: "uppercase" }]}>
            Profile Rating
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={ASSETS.Star}
              resizeMode="contain"
              style={{ width: 18, height: 18 }}
            />
            <Text
              style={{
                fontFamily: FONTS.bold,
                color: COLORS.white,
                fontSize: SIZES.fontBase,
                marginLeft: SIZES.base,
              }}
            >
              4.9
            </Text>
          </View>
        </View>
      </View>

      <View style={{ paddingHorizontal: SIZES.spacing }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.avatarEmail, { textTransform: "uppercase" }]}>
            Identity
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="check" size={24} color={COLORS.primary} />
            <Text
              style={[
                styles.avatarName,
                { fontSize: SIZES.fontBase, marginLeft: SIZES.base },
              ]}
            >
              Verified
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProfileHeaderCard;
