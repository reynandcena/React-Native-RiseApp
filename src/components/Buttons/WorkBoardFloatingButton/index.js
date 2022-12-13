import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Menu, MenuItem } from "react-native-material-menu";

import { COLORS, SIZES, FONTS } from "../../../utils/constants";
import { styles } from "./styles";

const WorkBoardFloatingButton = () => {
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
        style={styles.menuContainerMedium}
      >
        <MenuItem onPress={hideMenu}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="add" size={20} style={styles.iconWhite} />
            </TouchableOpacity>

            <Text style={[styles.menuText, { marginLeft: 8 }]}>Create</Text>
          </View>
        </MenuItem>
        <MenuItem disabled>
          <Text style={styles.disabledText}>Create work from:</Text>
        </MenuItem>
        <MenuItem>
          <Text style={styles.menuText}>Order Details</Text>
        </MenuItem>
        <MenuItem>
          <Text style={styles.menuText}>Scheduling</Text>
        </MenuItem>
        <MenuItem>
          <Text style={styles.menuText}>Delivery</Text>
        </MenuItem>
        <MenuItem>
          <Text style={styles.menuText}>Settlement</Text>
        </MenuItem>
      </Menu>
    </View>
  );
};

export default WorkBoardFloatingButton;
