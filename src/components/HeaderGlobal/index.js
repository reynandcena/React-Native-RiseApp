import React, { useState } from "react";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { ASSETS, COLORS } from "../../utils/constants";
import ProfileModal from "../Modals/Profile";
import SupportModal from "../Modals/Support";
import NotificationModal from "../Modals/Notifications";

const HeaderGlobal = () => {
  const navigation = useNavigation();

  const [isProfileModalVisible, setProfileModalVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleProfileModal = () => {
    setProfileModalVisible(!isProfileModalVisible);
  };

  const openState = () => {
    setOpen(!open);
  };

  const [isSupportModalVisible, setSupportModalVisible] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const toggleSupportModal = () => {
    setSupportModalVisible(!isSupportModalVisible);
    openSupportState();
  };
  const openSupportState = () => {
    setOpenSupport(!openSupport);
  };

  const [isNotifModalVisible, setIsNotifModalVisible] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  const toggleNotifModal = () => {
    setIsNotifModalVisible(!isNotifModalVisible);
    openNotifState();
  };
  const openNotifState = () => {
    setOpenNotif(!openNotif);
  };

  return (
    <>
      <ProfileModal
        visibleModal={isProfileModalVisible}
        openModal={toggleProfileModal}
      />

      <SupportModal
        visibleModal={isSupportModalVisible}
        openModal={toggleSupportModal}
      />

      <NotificationModal
        visibleModal={isNotifModalVisible}
        openModal={toggleNotifModal}
      />

      <View style={styles.headerContainer}>
        <View style={styles.headerInnerContainer}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ marginRight: 8 }}
          >
            <MaterialCommunityIcons name="menu" size={24} color={COLORS.grey} />
          </TouchableOpacity>

          <Image source={ASSETS.logoSmall} style={{ width: 35, height: 35 }} />
        </View>

        <View style={styles.headerInnerContainer}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} style={styles.icon} />
          </TouchableOpacity>

          <View style={styles.spacer} />

          <TouchableOpacity>
            <MaterialCommunityIcons
              name="lightbulb-outline"
              size={24}
              style={styles.icon}
            />
          </TouchableOpacity>

          <View style={styles.spacer} />

          <TouchableOpacity onPress={toggleNotifModal}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={!openNotif ? COLORS.grey : COLORS.primary}
            />
          </TouchableOpacity>

          <View style={styles.spacer} />

          <TouchableOpacity onPress={toggleSupportModal}>
            <MaterialCommunityIcons
              name="help-circle-outline"
              size={24}
              color={!openSupport ? COLORS.grey : COLORS.primary}
            />
          </TouchableOpacity>

          <View style={styles.spacer} />

          <TouchableOpacity style={styles.profile} onPress={toggleProfileModal}>
            <Text style={styles.profileText}>RD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HeaderGlobal;
