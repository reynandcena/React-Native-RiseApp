import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Menu, MenuItem } from "react-native-material-menu";

import { COLORS, SIZES, FONTS } from "../../../utils/constants";
import { styles } from "./styles";

const WorkFloatingButton = () => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  return (
    <View style={styles.buttonContainer}>
      <Menu
        visible={visible}
        anchor={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={showMenu}
            style={styles.fButton}
          >
            <MaterialIcons
              name={!visible ? "add" : "close"}
              size={24}
              style={styles.iconWhite}
            />
          </TouchableOpacity>
        }
        onRequestClose={hideMenu}
        style={styles.menuContainer}
      >
        <MenuItem onPress={hideMenu}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="user" size={16} style={styles.iconMenu} />

            <Text style={styles.menuText}>People</Text>
          </View>
        </MenuItem>
        <MenuItem onPress={hideMenu}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="dashboard-customize"
              size={16}
              style={styles.iconMenu}
            />
            <Text style={styles.menuText}>Assets</Text>
          </View>
        </MenuItem>
      </Menu>
    </View>
  );
};

export default WorkFloatingButton;
