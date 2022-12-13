import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS, FONTS, SIZES } from "../../../utils/constants";
import { styles } from "./styles";

const WorkflowVersion = ({ visibleModal, openModal }) => {
  return (
    <Modal
      isVisible={visibleModal}
      onBackdropPress={openModal}
      style={{ margin: 0 }}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      animationInTiming={500}
      animationOutTiming={750}
      backdropColor="transparent"
    >
      <View style={styles.modalContainer}>
        <View style={styles.headerModal}>
          <TouchableOpacity
            onPress={openModal}
            style={{ marginRight: SIZES.base }}
          >
            <MaterialCommunityIcons
              name="close"
              size={20}
              color={COLORS.grey}
            />
          </TouchableOpacity>
          <Text style={styles.headerModalText}>Workflow version</Text>
        </View>
        <View style={styles.menu}>
          <MaterialCommunityIcons
            name="circle-outline"
            size={16}
            color={COLORS.primary}
            style={{ marginTop: 11 }}
          />
          <View>
            <Text style={styles.menuText}>Current workflow version: V12</Text>
            <Text style={styles.subMenuText}>
              Published: 22 Jul 2022, 10:15 AM
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            padding: SIZES.spacing,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
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
                color: COLORS.grey,
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
                color: COLORS.grey,
              }}
            >
              BROWSER:2.11.0-alpha.1312
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WorkflowVersion;
