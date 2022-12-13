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
import { COLORS } from "../../../utils/constants";
import { styles } from "./styles";
import PasswordInput from "../../../components/InputText/PasswordInput";
import FlatButton from "../../../components/Buttons/FlatButton";

const SecurityScreen = ({ navigation }) => {
  const [password, setPassword] = useState("123456789");
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
          <Text style={styles.linkText}>Security</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <View style={styles.formContainer}>
              <PasswordInput
                label="Current Password"
                val={password}
                onChangeText={(value) => handleOnChangeText(value, "password")}
              />

              <View style={styles.spacer} />

              <PasswordInput
                label="New Password"
                val=""
                onChangeText={(value) => handleOnChangeText(value, "password")}
              />
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

export default SecurityScreen;
