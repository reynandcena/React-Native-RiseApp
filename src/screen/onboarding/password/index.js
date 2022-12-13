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
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";

import { COLORS, FONTS, SIZES, ASSETS } from "../../../utils/constants";
import FocusedStatusBar from "../../../components/StatusBar";
import FlatButton from "../../../components/Buttons/FlatButton";
import { styles } from "../styles";
import ImageButton from "../../../components/Buttons/ImageButton";
import DefaultInput from "../../../components/InputText/DefaultInput";
import PasswordInput from "../../../components/InputText/PasswordInput";
import { isValidObjField, updateError } from "../../../utils/handler";

const PasswordScreen = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("WorkScreen");
    }, 3000);
  };

  const [text, setText] = useState("");

  const [userInfo, setUserInfo] = useState({
    password: "",
  });

  const email = route.params.paramKey;

  const [error, setError] = useState("");

  const { password } = userInfo;

  const handleOnChangeText = (value, fieldname) => {
    updateStatus(buttonActive);
    setUserInfo({ ...userInfo, [fieldname]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Password is required!", setError);
    if (!password.trim() || password.length < 8)
      return updateError("Password is too short.", setError);

    return true;
  };

  const submitForm = () => {
    if (isValidForm()) {
      startLoading();
    }
  };

  const [isEditable, setIsEditable] = useState(false);

  const updateState = () => {
    setIsEditable(!isEditable);
  };

  const [buttonActive, setButtonActive] = useState(false);

  const updateStatus = () => {
    if (password.length > 8) setButtonActive(!buttonActive);
    return true;
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <Spinner visible={loading} overlayColor="#00000090" />
            <View style={styles.card}>
              <View style={styles.logoContainer}>
                <Image
                  source={ASSETS.LogoWhite}
                  resizeMode="contain"
                  style={styles.logo}
                />
              </View>

              <View style={styles.ssocontainer}>
                <MaterialIcons
                  name="vpn-key"
                  size={24}
                  style={styles.ssoicon}
                />
                <Text style={styles.ssotext}>Single sign-on (SSO):</Text>
              </View>

              <ImageButton
                image={ASSETS.microsoftLogo}
                label="Continue with Microsoft"
                onpress={startLoading}
              />

              <ImageButton
                image={ASSETS.googleLogo}
                label="Continue with Google"
                onpress={startLoading}
              />

              <View style={styles.dividerContainer}>
                <View style={styles.line} />
                <View style={styles.marginHorizontal}>
                  <Text style={styles.dividerText}>or</Text>
                </View>
                <View style={styles.line} />
              </View>

              <DefaultInput
                defaultvalue={email}
                isDisabled={!isEditable}
                onChangeText={(value) => handleOnChangeText(value, "email")}
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

              <PasswordInput
                label="Password"
                val={password}
                onChangeText={(value) => handleOnChangeText(value, "password")}
              />

              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.error}>{error ? error : null}</Text>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ForgotPasswordScreen", {
                      paramKey: email,
                    })
                  }
                >
                  <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableOpacity>
              </View>

              <FlatButton
                label="Login"
                disabled={password === "" ? true : false}
                buttonPrimary={
                  password === "" ? styles.button : styles.buttonprimaryactive
                }
                buttonActive={
                  password === "" ? styles.buttonInActive : styles.buttonactive
                }
                onpress={submitForm}
              />

              <View style={styles.footerLinkContainer}>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Need help to log in?</Text>
                </TouchableOpacity>
                <View style={styles.dot} />
                <TouchableOpacity
                  onPress={() => navigation.navigate("RegisterScreen")}
                >
                  <Text style={styles.footerLink}>Create an account</Text>
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

export default PasswordScreen;
