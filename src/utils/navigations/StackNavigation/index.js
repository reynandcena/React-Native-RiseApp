import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import LoginScreen from "../../../screen/onboarding/login";
import RegisterScreen from "../../../screen/onboarding/register";
import PasswordScreen from "../../../screen/onboarding/password";
import ForgotPasswordScreen from "../../../screen/onboarding/forgotpassword";
import ResetPasswordScreen from "../../../screen/onboarding/resetpassword";
import RiseDrawerNavigation from "../DrawerNavigation";

const RiseStackNavigation = () => {
  const Rise = createStackNavigator();
  return (
    <Rise.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="LoginScreen"
    >
      <Rise.Screen name="LoginScreen" component={LoginScreen} />
      <Rise.Screen name="RegisterScreen" component={RegisterScreen} />
      <Rise.Screen name="PasswordScreen" component={PasswordScreen} />
      <Rise.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Rise.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />

      <Rise.Screen name="WorkScreen" component={RiseDrawerNavigation} />
    </Rise.Navigator>
  );
};

export default RiseStackNavigation;
