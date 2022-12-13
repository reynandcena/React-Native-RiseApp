import React, { useEffect, useState } from "react";
import { DataTable } from "react-native-paper";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import sanityClient from "../../../../sanity";
import { styles } from "./styles";
import { COLORS } from "../../../utils/constants";

const WorkItemsTable = () => {
  const [workItems, setWorkItems] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type in ["nomination", "delivery", "scheduling", "settlement"]] | order(_createdAt asc)
    `
      )
      .then((data) => {
        setWorkItems(data);
      });
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <DataTable style={styles.tableContainer}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>
              <Text style={styles.title}>Vessel </Text>
              <MaterialCommunityIcons
                name="arrow-down"
                size={16}
                style={styles.iconSort}
              />
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={styles.title}>Delivery Date </Text>
              <View style={styles.spacing} />
              <MaterialCommunityIcons
                name="arrow-down"
                size={16}
                style={styles.iconSort}
              />
            </DataTable.Title>
          </DataTable.Header>

          {workItems.map((workItem) => (
            <DataTable.Row
              key={workItem._id}
              style={{
                borderBottomColor: COLORS.overlayDivider,
              }}
            >
              <DataTable.Cell textStyle={styles.rowTitle}>
                {workItem.vesselName}
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <TouchableOpacity>
                  <Octicons
                    name="link-external"
                    size={16}
                    color={COLORS.primary}
                  />
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
    </ScrollView>
  );
};

export default WorkItemsTable;
