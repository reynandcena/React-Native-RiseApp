import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import FlatButton from "../../../components/Buttons/FlatButton";
import DefaultInput from "../../../components/InputText/DefaultInput";

import FocusedStatusBar from "../../../components/StatusBar";
import { ASSETS, COLORS } from "../../../utils/constants";
import { styles } from "../styles";

const ForgotPasswordScreen = ({ route, navigation }) => {
  const email = route.params.paramKey;

  const [isEditable, setIsEditable] = useState(false);

  const updateState = () => {
    setIsEditable(!isEditable);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <View style={styles.card}>
              <View style={styles.logoContainer}>
                <Image
                  source={ASSETS.LogoWhite}
                  resizeMode="contain"
                  style={styles.logo}
                />
              </View>

              <View style={styles.marginVertical}>
                <Text style={styles.headingText}>Forgot Password?</Text>
                <Text style={styles.subText}>
                  We'll send a recovery link to
                </Text>
              </View>

              <DefaultInput
                defaultvalue={email}
                isDisabled={!isEditable}
                label="Email"
                textcolor={isEditable ? COLORS.white : COLORS.grey}
                rightIcon={
                  <TextInput.Icon
                    icon="account-edit"
                    onPress={updateState}
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
              <View style={styles.marginVertical}>
                <FlatButton
                  label="Send a link"
                  disabled={email === "" ? true : false}
                  buttonPrimary={
                    email === "" ? styles.button : styles.buttonprimaryactive
                  }
                  buttonActive={
                    email === "" ? styles.buttonInActive : styles.buttonactive
                  }
                  onpress={() =>
                    navigation.navigate("ResetPasswordScreen", {
                      paramKey: email,
                    })
                  }
                />
              </View>

              <View style={styles.footerLinkContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("LoginScreen")}
                >
                  <Text style={styles.footerLink}>Back to login</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footerContainer}>
              <Image
                source={ASSETS.LogoWhite}
                resizeMode="contain"
                style={styles.logo}
              />
              <Text style={styles.footerText}>Powered by DIANA</Text>
              <Text style={styles.footerText}>
                One account for Quaychain, Biopass, Systemedic
              </Text>
            </View>
          </>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
