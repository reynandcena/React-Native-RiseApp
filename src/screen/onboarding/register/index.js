import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import ImageButton from "../../../components/Buttons/ImageButton";
import FocusedStatusBar from "../../../components/StatusBar";
import DefaultInput from "../../../components/InputText/DefaultInput";
import PhoneNumberInput from "../../../components/InputText/PhoneInput";
import { styles } from "../styles";
import { ASSETS, COLORS } from "../../../utils/constants";
import PasswordInput from "../../../components/InputText/PasswordInput";
import FlatButton from "../../../components/Buttons/FlatButton";

const RegisterScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
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

              <ImageButton
                image={ASSETS.microsoftLogo}
                label="Continue with Microsoft"
              />

              <ImageButton
                image={ASSETS.googleLogo}
                label="Continue with Google"
              />

              <View style={styles.dividerContainer}>
                <View style={styles.line} />
                <View style={styles.marginHorizontal}>
                  <Text style={styles.dividerText}>or</Text>
                </View>
                <View style={styles.line} />
              </View>

              <DefaultInput
                label="Full Name"
                textcolor={COLORS.white}
                background={COLORS.paper}
              />
              <DefaultInput
                label="Email"
                textcolor={COLORS.white}
                background={COLORS.paper}
              />
              <PhoneNumberInput />
              <PasswordInput
                label="Password"
                val={user}
                onChangeText={(text) => setUser(text)}
              />

              <View style={styles.marginVertical}>
                <Text style={styles.defaultText}>
                  By creating an account, I accept the Rise-X
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity>
                    <Text style={styles.linkText}>Terms of Service</Text>
                  </TouchableOpacity>
                  <Text style={styles.defaultText}>and acknowledge the</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.linkText}>Privacy Policy.</Text>
                </TouchableOpacity>
              </View>

              <FlatButton
                label="Register"
                disabled={user === "" ? true : false}
                buttonPrimary={
                  user === "" ? styles.button : styles.buttonprimaryactive
                }
                buttonActive={
                  user === "" ? styles.buttonInActive : styles.buttonactive
                }
                onpress={() => navigation.navigate("WorkScreen")}
              />

              <View style={styles.footerLinkContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("LoginScreen")}
                >
                  <Text style={styles.footerLink}>
                    Already have an account?
                  </Text>
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

export default RegisterScreen;
