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
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

import HeaderGlobal from "../../../components/HeaderGlobal";
import FocusedStatusBar from "../../../components/StatusBar";
import { ASSETS, COLORS, SIZES } from "../../../utils/constants";
import { styles } from "./styles";
import ProfileHeaderCard from "../../../components/Cards/ProfileHeaderCard";
import DefaultInput from "../../../components/InputText/DefaultInput";
import FlatButton from "../../../components/Buttons/FlatButton";

const PaymentsScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("Reynan");
  const [lastName, setLastName] = useState("Decena");
  const [card, setCard] = useState("****- **** - **** - 0000");
  const [expiration, setExpiration] = useState("10/25");
  const [cvv, setCVV] = useState("****");
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
          <Text style={styles.linkText}>Payments & Payouts</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ProfileHeaderCard />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: SIZES.spacing,
                }}
              >
                <Image
                  source={ASSETS.CC}
                  resizeMode="cover"
                  style={{ width: 335, height: 204.47 }}
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.overlayDivider,
                    width: 335,
                    height: 180,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 13.52,
                  }}
                >
                  <MaterialIcons
                    name="add-circle-outline"
                    size={36}
                    color={COLORS.grey}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={styles.formContainer}>
              <DefaultInput
                label="First name"
                val={firstName}
                onChangeText={(text) => setFirstName(text)}
                textcolor={COLORS.white}
                background={COLORS.paper}
              />

              <View style={styles.spacer} />

              <DefaultInput
                label="Last Name"
                val={lastName}
                onChangeText={(text) => setLastName(text)}
                textcolor={COLORS.white}
                background={COLORS.paper}
              />

              <View style={styles.spacer} />

              <DefaultInput
                label="Card Number"
                val={card}
                onChangeText={(text) => setCard(text)}
                textcolor={COLORS.white}
                background={COLORS.paper}
                rightIcon={
                  <TextInput.Icon
                    icon="credit-card-outline"
                    iconColor={COLORS.grey}
                    style={{
                      backgroundColor: COLORS.paper,
                      width: 70,
                      height: 70,
                      borderRadius: 0,
                    }}
                  />
                }
              />

              <View style={styles.spacer} />

              <DefaultInput
                label="Expiration"
                val={expiration}
                onChangeText={(text) => setExpiration(text)}
                textcolor={COLORS.white}
                background={COLORS.paper}
              />

              <View style={styles.spacer} />

              <DefaultInput
                label="CVV"
                val={cvv}
                onChangeText={(text) => setCVV(text)}
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

export default PaymentsScreen;
