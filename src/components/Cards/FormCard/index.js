import React from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../../utils/constants";
import DefaultInput from "../../../components/InputText/DefaultInput";
import FlatButton from "../../Buttons/FlatButton";

const FormCard = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.formCard}>
        <Text style={styles.formTitle}>Contact form</Text>
        <Text style={styles.formSubTitle}>
          See our services in action. Request a quote or consultation with our
          team.
        </Text>

        <DefaultInput
          label="Subject"
          textcolor={COLORS.white}
          background={COLORS.overlayDivider}
        />

        <DefaultInput
          label="Your message"
          textcolor={COLORS.white}
          background={COLORS.overlayDivider}
        />

        <FlatButton
          label="Send your message"
          buttonPrimary={styles.buttonprimaryactive}
          buttonActive={styles.buttonactive}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FormCard;
