import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import WorkBoardFloatingButton from "../../../components/Buttons/WorkBoardFloatingButton";
import WorkItemCardView from "../../../components/Cards/WorkItemCardView";

import HeaderGlobal from "../../../components/HeaderGlobal";
import FocusedStatusBar from "../../../components/StatusBar";
import DefaultTopBar from "../../../components/TopBar/DefaultTopBar";
import { styles } from "./styles";

const WorkItemScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar />
      <HeaderGlobal />
      <DefaultTopBar />
      <WorkItemCardView />
      <WorkBoardFloatingButton />
    </SafeAreaView>
  );
};

export default WorkItemScreen;
