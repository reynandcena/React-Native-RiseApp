import React from "react";
import { SafeAreaView } from "react-native";

import WorkBoardFloatingButton from "../../../components/Buttons/WorkBoardFloatingButton";
import HeaderGlobal from "../../../components/HeaderGlobal";
import FocusedStatusBar from "../../../components/StatusBar";
import WorkItemsTable from "../../../components/Table/WorkItems";
import WithProperties from "../../../components/TopBar/WithProperties";
import { styles } from "./styles";

const WorkItemTable = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar />
      <HeaderGlobal />
      <WithProperties />
      <WorkItemsTable />
      <WorkBoardFloatingButton />
    </SafeAreaView>
  );
};

export default WorkItemTable;
