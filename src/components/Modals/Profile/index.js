import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

import {
  MaterialCommunityIcons,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

import { styles } from "./styles";
import { COLORS, SIZES } from "../../../utils/constants";

const ProfileModal = ({ visibleModal, openModal }) => {
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
    >
      <View style={styles.modalContainer}>
        <View style={styles.Divider}>
          <TouchableOpacity onPress={openModal} style={styles.headerModal}>
            <MaterialCommunityIcons
              name="close"
              size={20}
              color={COLORS.grey}
            />
            <Text style={styles.headerModalText}>Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileAccountContainer}>
          <View style={styles.flexRow}>
            <View style={styles.profile}>
              <Text style={styles.profileText}>RD</Text>
            </View>
            <View style={{ marginLeft: SIZES.base }}>
              <Text style={styles.profileAccountText}>Reynan Decena</Text>
              <Text style={styles.profileAccountEmail}>
                reynan.decena@rise-x.io
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate("PersonalInfoScreen")}
        >
          <Feather name="user" size={16} style={styles.icon} />
          <Text style={styles.menuText}>Personal information</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate("CompanyDetailsScreen")}
        >
          <Ionicons name="briefcase-outline" size={16} style={styles.icon} />
          <Text style={styles.menuText}>Company details</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate("PaymentsScreen")}
        >
          <MaterialIcons name="payment" size={16} style={styles.icon} />
          <Text style={styles.menuText}>Payments & Payouts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate("SecurityScreen")}
        >
          <MaterialCommunityIcons
            name="shield-lock"
            size={16}
            style={styles.icon}
          />
          <Text style={styles.menuText}>Security</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate("SettingsScreen")}
        >
          <MaterialIcons name="settings" size={16} style={styles.icon} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}>
          <MaterialIcons name="directions-boat" size={16} style={styles.icon} />
          <Text style={styles.menuText}>Environment Links</Text>
        </TouchableOpacity>

        <View style={styles.spacer} />

        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <MaterialCommunityIcons name="logout" size={16} style={styles.icon} />
          <Text style={styles.menuText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ProfileModal;
