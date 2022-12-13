import React from "react";
import { DataTable } from "react-native-paper";
import { Feather, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../../utils/constants";

const PersonalInfoTable = () => {
  return (
    <DataTable style={styles.tableContainer}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>
          <Text style={styles.title}>Document Name </Text>
          <MaterialCommunityIcons
            name="arrow-down"
            size={16}
            style={styles.iconSort}
          />
        </DataTable.Title>
      </DataTable.Header>
      <DataTable.Row
        style={{
          borderBottomColor: COLORS.overlayDivider,
        }}
      >
        <DataTable.Cell>
          <View>
            <Text style={styles.rowTitle}>Doc name</Text>
            <Text style={styles.rowTitle}>Date: 27/12/2022</Text>
          </View>
        </DataTable.Cell>
        <DataTable.Cell numeric>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Feather name="download" size={16} style={styles.iconLink} />
            </TouchableOpacity>
            <View style={styles.spacer} />
            <TouchableOpacity>
              <Octicons name="trash" size={16} style={styles.iconLink} />
            </TouchableOpacity>
          </View>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row
        style={{
          borderBottomColor: COLORS.overlayDivider,
        }}
      >
        <DataTable.Cell>
          <View>
            <Text style={styles.rowTitle}>Doc name</Text>
            <Text style={styles.rowTitle}>Date: 27/12/2022</Text>
          </View>
        </DataTable.Cell>
        <DataTable.Cell numeric>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Feather name="download" size={16} style={styles.iconLink} />
            </TouchableOpacity>
            <View style={styles.spacer} />
            <TouchableOpacity>
              <Octicons name="trash" size={16} style={styles.iconLink} />
            </TouchableOpacity>
          </View>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row
        style={{
          borderBottomColor: COLORS.overlayDivider,
        }}
      >
        <DataTable.Cell>
          <View>
            <Text style={styles.rowTitle}>Doc name</Text>
            <Text style={styles.rowTitle}>Date: 27/12/2022</Text>
          </View>
        </DataTable.Cell>
        <DataTable.Cell numeric>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Feather name="download" size={16} style={styles.iconLink} />
            </TouchableOpacity>
            <View style={styles.spacer} />
            <TouchableOpacity>
              <Octicons name="trash" size={16} style={styles.iconLink} />
            </TouchableOpacity>
          </View>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row
        style={{
          borderBottomWidth: 0,
        }}
      >
        <DataTable.Cell>
          <View>
            <Text style={styles.rowTitle}>Doc name</Text>
            <Text style={styles.rowTitle}>Date: 27/12/2022</Text>
          </View>
        </DataTable.Cell>
        <DataTable.Cell numeric>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Feather name="download" size={16} style={styles.iconLink} />
            </TouchableOpacity>
            <View style={styles.spacer} />
            <TouchableOpacity>
              <Octicons name="trash" size={16} style={styles.iconLink} />
            </TouchableOpacity>
          </View>
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default PersonalInfoTable;
