import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { useNavigation, DrawerActions } from "@react-navigation/native";

import { ASSETS, COLORS, SIZES } from "../../utils/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: COLORS.paper, flex: 1 }}
      >
        <View
          style={{
            padding: SIZES.spacing,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          >
            <MaterialCommunityIcons
              name="menu-open"
              size={24}
              color={COLORS.grey}
            />
          </TouchableOpacity>

          <Image
            source={ASSETS.LogoWhite}
            resizeMode="contain"
            style={{ width: 80, height: 50, marginLeft: SIZES.base }}
          />
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
