import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";
import { styles } from "./styles";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const SupportModal = ({ visibleModal, openModal }) => {
  const navigation = useNavigation();
  return (
    <Modal
      isVisible={visibleModal}
      style={{ margin: 0 }}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      animationInTiming={500}
      animationOutTiming={750}
      backdropColor="transparent"
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
    >
      <View style={styles.modalContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Divider}>
            <TouchableOpacity onPress={openModal} style={styles.headerModal}>
              <MaterialCommunityIcons
                name="close"
                size={20}
                color={COLORS.grey}
              />
              <Text style={styles.headerModalText}>Support</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menu}
              onPress={() => navigation.navigate("ContactScreen")}
            >
              <MaterialCommunityIcons
                name="phone"
                size={16}
                style={styles.icon}
              />
              <Text style={styles.menuText}>Contact Us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menu}>
              <MaterialCommunityIcons
                name="vector-square-remove"
                size={16}
                style={styles.icon}
              />
              <Text style={styles.menuText}>How to Guide</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                paddingHorizontal: SIZES.spacing,
                paddingVertical: SIZES.base,
              }}
              onPress={() => navigation.navigate("DocumentScreen")}
            >
              <MaterialCommunityIcons
                name="file-document-outline"
                size={16}
                style={{ color: COLORS.grey, marginTop: 10 }}
              />
              <View style={{ width: 300 }}>
                <Text style={styles.menuText}>Minerva GTCS</Text>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.heading6,
                    marginLeft: SIZES.spacing,
                    marginTop: -10,
                    color: COLORS.grey,
                  }}
                >
                  This is a statement of the General Terms and Conditions - 2021
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                paddingHorizontal: SIZES.spacing,
                paddingVertical: SIZES.base,
              }}
              onPress={() => navigation.navigate("DocumentScreen")}
            >
              <MaterialCommunityIcons
                name="file-document-outline"
                size={16}
                style={{ color: COLORS.grey, marginTop: 10 }}
              />
              <View style={{ width: 300 }}>
                <Text style={styles.menuText}>Minerva GTCS</Text>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.heading6,
                    marginLeft: SIZES.spacing,
                    marginTop: -10,
                    color: COLORS.grey,
                  }}
                >
                  This is a statement of the General Terms and Conditions - 2021
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                paddingHorizontal: SIZES.spacing,
                paddingVertical: SIZES.base,
              }}
              onPress={() => navigation.navigate("DocumentScreen")}
            >
              <MaterialCommunityIcons
                name="file-document-outline"
                size={16}
                style={{ color: COLORS.grey, marginTop: 10 }}
              />
              <View style={{ width: 300 }}>
                <Text style={styles.menuText}>Minerva GTCS</Text>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.heading6,
                    marginLeft: SIZES.spacing,
                    marginTop: -10,
                    color: COLORS.grey,
                  }}
                >
                  This is a statement of the General Terms and Conditions - 2021
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                paddingHorizontal: SIZES.spacing,
                paddingVertical: SIZES.base,
              }}
              onPress={() => navigation.navigate("DocumentScreen")}
            >
              <MaterialCommunityIcons
                name="file-document-outline"
                size={16}
                style={{ color: COLORS.grey, marginTop: 10 }}
              />
              <View style={{ width: 300 }}>
                <Text style={styles.menuText}>Minerva GTCS</Text>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.heading6,
                    marginLeft: SIZES.spacing,
                    marginTop: -10,
                    color: COLORS.grey,
                  }}
                >
                  This is a statement of the General Terms and Conditions - 2021
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                paddingHorizontal: SIZES.spacing,
                paddingVertical: SIZES.base,
              }}
              onPress={() => navigation.navigate("DocumentScreen")}
            >
              <MaterialCommunityIcons
                name="file-document-outline"
                size={16}
                style={{ color: COLORS.grey, marginTop: 10 }}
              />
              <View style={{ width: 300 }}>
                <Text style={styles.menuText}>Minerva GTCS</Text>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.heading6,
                    marginLeft: SIZES.spacing,
                    marginTop: -10,
                    color: COLORS.grey,
                  }}
                >
                  This is a statement of the General Terms and Conditions - 2021
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: SIZES.spacing,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.fontSmall,
                  color: COLORS.white,
                }}
              >
                API:3.1.0-alpha.10
              </Text>
              <View
                style={{
                  height: 6,
                  width: 6,
                  borderRadius: 100,
                  backgroundColor: COLORS.grey,
                  marginHorizontal: SIZES.base,
                }}
              />
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.fontSmall,
                  color: COLORS.white,
                }}
              >
                BROWSER:2.11.0-alpha.1312
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default SupportModal;
