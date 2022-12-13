import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Feather, Octicons, Entypo, FontAwesome } from "@expo/vector-icons";

import CustomDrawer from "../../../components/CustomDrawer";
import WorkScreen from "../../../screen/work/Workflow";
import PersonalInfoScreen from "../../../screen/profile/PersonalInformation";
import CompanyDetailsScreen from "../../../screen/profile/CompanyDetails";
import SecurityScreen from "../../../screen/profile/Security";
import SettingsScreen from "../../../screen/profile/Settings";
import ContactScreen from "../../../screen/support/ContactUs";
import DocumentScreen from "../../../screen/support/Documents";
import CameraScreen from "../../../screen/profile/Camera";
import PaymentsScreen from "../../../screen/profile/Payments";
import WorkItemScreen from "../../../screen/work/WorkItem";
import WorkItemTable from "../../../screen/work/WorkItemTable";
import PerformanceScreen from "../../../screen/performance/PerformanceCard";
import PerformanceTable from "../../../screen/performance/PerformanceTable";
import PeopleScreen from "../../../screen/people/PeopleScreen";
import PeopleDetails from "../../../screen/people/PeopleDetails";

const RiseDrawer = createDrawerNavigator();

const RiseDrawerNavigation = ({ route }) => {
  return (
    <RiseDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: COLORS.primary,
        drawerInactiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -10,
          fontFamily: FONTS.medium,
          fontSize: SIZES.fontBase,
          lineHeight: 17.38,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <RiseDrawer.Screen
        name="Work"
        component={WorkScreen}
        options={{
          drawerLabel: "Work",
          drawerIcon: ({ color }) => (
            <Octicons name="workflow" size={16} color={color} />
          ),
        }}
      />

      <RiseDrawer.Screen
        name="PerformanceScreen"
        initialParams={{ params: route.params }}
        component={PerformanceScreen}
        options={{
          drawerLabel: "Performance",
          drawerIcon: ({ color }) => (
            <Entypo name="line-graph" size={16} color={color} />
          ),
        }}
      />

      <RiseDrawer.Screen
        name="PersonalInfoScreen"
        component={PersonalInfoScreen}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />

      <RiseDrawer.Screen
        name="PeopleScreen"
        component={PeopleScreen}
        options={{
          drawerLabel: "People",
          drawerIcon: ({ color }) => (
            <Feather name="users" size={16} color={color} />
          ),
        }}
      />

      <RiseDrawer.Screen
        name="CompanyDetailsScreen"
        component={CompanyDetailsScreen}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />

      <RiseDrawer.Screen
        name="SecurityScreen"
        component={SecurityScreen}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />

      <RiseDrawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />

      <RiseDrawer.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />

      <RiseDrawer.Screen
        name="DocumentScreen"
        component={DocumentScreen}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />

      <RiseDrawer.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />

      <RiseDrawer.Screen
        name="PaymentsScreen"
        component={PaymentsScreen}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />

      <RiseDrawer.Screen
        name="WorkItemScreen"
        component={WorkItemScreen}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />

      <RiseDrawer.Screen
        name="WorkItemTable"
        component={WorkItemTable}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />

      <RiseDrawer.Screen
        name="PerformanceTable"
        component={PerformanceTable}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />

      <RiseDrawer.Screen
        name="PeopleDetails"
        component={PeopleDetails}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </RiseDrawer.Navigator>
  );
};

export default RiseDrawerNavigation;
