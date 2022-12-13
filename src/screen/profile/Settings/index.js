import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import HeaderGlobal from "../../../components/HeaderGlobal";
import FocusedStatusBar from "../../../components/StatusBar";
import { COLORS, FONTS } from "../../../utils/constants";
import { styles } from "./styles";
import { Picker } from "@react-native-picker/picker";
import FlatButton from "../../../components/Buttons/FlatButton";

const SettingsScreen = ({ navigation }) => {
  const [selectedTheme, setSelectedTheme] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <HeaderGlobal />
      <View style={styles.topbar}>
        <TouchableOpacity
          style={styles.topbarlink}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={18} style={styles.icon} />
          <Text style={styles.linkText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <View style={styles.formContainer}>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: COLORS.grey,
                  textTransform: "uppercase",
                }}
              >
                Theme
              </Text>
              <Picker
                selectedValue={selectedTheme}
                dropdownIconColor={COLORS.grey}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedTheme(itemValue)
                }
                style={{
                  fontFamily: FONTS.medium,
                  color: COLORS.grey,
                }}
              >
                <Picker.Item label="Dark" value="dark" />
                <Picker.Item label="Light" value="light" />
              </Picker>
            </View>
          </>
        </TouchableWithoutFeedback>
      </ScrollView>
      <View style={styles.footer}>
        <FlatButton
          label="Save changes"
          buttonPrimary={styles.buttonprimaryactive}
          buttonActive={styles.buttonactive}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
