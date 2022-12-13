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
import Spinner from "react-native-loading-spinner-overlay";

import FocusedStatusBar from "../../../components/StatusBar";
import { ASSETS, COLORS, FONTS, SIZES } from "../../../utils/constants";
import { styles } from "../styles";
import FlatButton from "../../../components/Buttons/FlatButton";
import DefaultInput from "../../../components/InputText/DefaultInput";
import ImageButton from "../../../components/Buttons/ImageButton";

import {
  isValidEmail,
  isValidObjField,
  updateError,
} from "../../../utils/handler";

const LoginScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({ email: "" });

  const [error, setError] = useState("");

  const { email } = userInfo;

  const handleOnChangeText = (value, fieldname) => {
    setUserInfo({ ...userInfo, [fieldname]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Please enter your registered email!", setError);

    if (!isValidEmail(email)) return updateError("Invalid email!", setError);

    return true;
  };

  const submitForm = () => {
    if (isValidForm()) {
      navigation.navigate("PasswordScreen", { paramKey: email });
    }
  };

  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("WorkScreen");
    }, 3000);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <Spinner visible={loading} overlayColor="#00000090" />
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
                val={email}
                onChangeText={(value) => handleOnChangeText(value, "email")}
                label="Email"
                textcolor={COLORS.white}
                background={COLORS.paper}
              />

              {error ? (
                <Text
                  style={{
                    color: COLORS.error,
                    fontSize: SIZES.fontBase,
                    fontFamily: FONTS.medium,
                  }}
                >
                  {error}
                </Text>
              ) : null}

              <FlatButton
                label="CONTINUE WITH EMAIL"
                disabled={email === "" ? true : false}
                buttonPrimary={email === "" ? styles.button : styles.button}
                buttonActive={
                  email === "" ? styles.buttonInActive : styles.buttonactive
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

export default LoginScreen;
