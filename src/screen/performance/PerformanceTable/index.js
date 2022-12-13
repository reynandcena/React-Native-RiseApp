import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DataTable } from "react-native-paper";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HeaderGlobal from "../../../components/HeaderGlobal";
import FocusedStatusBar from "../../../components/StatusBar";
import sanityClient from "../../../../sanity";
import { COLORS } from "../../../utils/constants";
import { styles } from "./styles";
import WorkItemsTable from "../../../components/Table/WorkItems";
import WorkBoardFloatingButton from "../../../components/Buttons/WorkBoardFloatingButton";
import ExportWithProperties from "../../../components/TopBar/ExportWithProperties";

const PerformanceTable = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <HeaderGlobal />
      <ExportWithProperties />
      <WorkItemsTable />
      <WorkBoardFloatingButton />
    </SafeAreaView>
  );
};

export default PerformanceTable;
