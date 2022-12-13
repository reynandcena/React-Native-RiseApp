import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FocusedStatusBar from "../../../components/StatusBar";
import { styles } from "../styles";
import { ASSETS, COLORS } from "../../../utils/constants";

const ResetPasswordScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Image
            source={ASSETS.LogoWhite}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>

        <View style={styles.center}>
          <MaterialCommunityIcons name="check" size={24} style={styles.icon} />
          <View style={styles.marginVerticalCenter}>
            <Text style={[styles.headingText, { textAlign: "center" }]}>
              A reset password email was successfully sent to:
            </Text>
            <Text style={styles.subText}>{route.params.paramKey}</Text>
          </View>

          <View style={styles.footerLinkContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.footerLink}>Back to Login</Text>
            </TouchableOpacity>
            <View style={styles.dot} />
            <TouchableOpacity>
              <Text style={styles.footerLink}>Resend Link</Text>
            </TouchableOpacity>
          </View>
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
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
