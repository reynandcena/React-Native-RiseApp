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
import DefaultInput from "../../../components/InputText/DefaultInput";
import FlatButton from "../../../components/Buttons/FlatButton";

const CompanyDetailsScreen = ({ navigation }) => {
  const [companyName, setCompanyName] = useState("Rise-x");
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
          <Text style={styles.linkText}>Company Details</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <View style={styles.formContainer}>
              <DefaultInput
                label="Company Name"
                val={companyName}
                onChangeText={(text) => setCompanyName(text)}
                textcolor={COLORS.white}
                background={COLORS.paper}
              />

              <View style={styles.spacer} />

              <DefaultInput
                label="Registration Number"
                textcolor={COLORS.white}
                background={COLORS.paper}
              />

              <View style={styles.spacer} />

              <DefaultInput
                label="Company Address"
                textcolor={COLORS.white}
                background={COLORS.paper}
              />

              <View style={styles.spacer} />

              <DefaultInput
                label="Company Short Code"
                textcolor={COLORS.white}
                background={COLORS.paper}
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

export default CompanyDetailsScreen;
