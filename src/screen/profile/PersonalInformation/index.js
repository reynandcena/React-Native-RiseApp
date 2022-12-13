import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import HeaderGlobal from "../../../components/HeaderGlobal";
import FocusedStatusBar from "../../../components/StatusBar";
import { COLORS } from "../../../utils/constants";
import { styles } from "./styles";
import DefaultInput from "../../../components/InputText/DefaultInput";
import PhoneNumberInput from "../../../components/InputText/PhoneInput";
import FlatButton from "../../../components/Buttons/FlatButton";
import Attachment from "../../../components/Attachment";
import PersonalInfoTable from "../../../components/Table/PersonalInfo";
import ProfileHeaderCard from "../../../components/Cards/ProfileHeaderCard";

const PersonalInfoScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState("Reynan Decena");
  const [email, setEmail] = useState("reynan.decena@rise-x.io");
  const [role, setRole] = useState("UI/UX Designer");
  const [phone, setPhone] = useState("966 534 9297");

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
          <Text style={styles.linkText}>Personal Information</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ProfileHeaderCard />

            <View style={styles.formContainer}>
              <DefaultInput
                label="Full name"
                val={fullname}
                onChangeText={(text) => setFullname(text)}
                textcolor={COLORS.white}
                background={COLORS.paper}
              />

              <View style={styles.spacer} />

              <DefaultInput
                label="Email"
                val={email}
                onChangeText={(text) => setEmail(text)}
                textcolor={COLORS.white}
                background={COLORS.paper}
              />

              <View style={styles.spacer} />

              <DefaultInput
                label="Role"
                val={role}
                onChangeText={(text) => setRole(text)}
                textcolor={COLORS.white}
                background={COLORS.paper}
              />

              <View style={styles.spacer} />

              <PhoneNumberInput
                val={phone}
                onChangeText={(text) => setPhone(text)}
              />

              <Attachment />

              <PersonalInfoTable />
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

export default PersonalInfoScreen;
