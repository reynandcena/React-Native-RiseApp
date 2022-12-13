import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Menu, MenuItem } from "react-native-material-menu";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import WorkItemVersion from "../../../Modals/WorkItemVersion";
import { COLORS } from "../../../../utils/constants";

const ItemCard = ({
  id,
  buyer,
  vesselName,
  port,
  nextPort,
  deliveryDate,
  product,
  volume,
  volumeUnit,
  orderNumber,
  status,
  comment,
}) => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(null);

  const [workCard, setworkCard] = useState([{ key: "" }]);

  const addHandler = () => {
    const _workCard = [...workCard];
    _workCard.push({ key: "" });
    setworkCard(_workCard);
  };

  const deleteHandler = (key) => {
    const _workCard = workCard.filter((index) => index != key);
    setworkCard(_workCard);
  };

  const [isVersionVisible, setIsVersionVisible] = useState(false);

  const toggleVersionModal = () => {
    setIsVersionVisible(!isVersionVisible);
  };

  return (
    <>
      <WorkItemVersion
        visibleModal={isVersionVisible}
        openModal={toggleVersionModal}
      />
      {workCard.map((key, index) => (
        <Card style={styles.cardContainer} key={id}>
          <Card.Content>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("WorkItemDetails", {
                  id,
                  buyer,
                  vesselName,
                  port,
                  nextPort,
                  deliveryDate,
                  product,
                  volume,
                  volumeUnit,
                  orderNumber,
                  status,
                  comment,
                })
              }
            >
              <View style={styles.cardTitleContainer}>
                <Text style={styles.vessel}>
                  {vesselName}
                  {index ? " - Copy " + index : ""}
                </Text>
                <View style={styles.cardTitleContainer}>
                  <TouchableOpacity
                    style={
                      status == "Draft"
                        ? styles.profile
                        : status == "Accepted"
                        ? styles.profileAccepted
                        : status == "Pending"
                        ? styles.profileAccepted
                        : status == "Started"
                        ? styles.profileAccepted
                        : status == "Overdue"
                        ? styles.profileAccepted
                        : styles.profile
                    }
                  >
                    <Text style={styles.profileText}>RD</Text>
                  </TouchableOpacity>
                  <Menu
                    visible={visible === index}
                    anchor={
                      <MaterialCommunityIcons
                        onPress={() => setVisible(index)}
                        name="dots-horizontal"
                        size={24}
                        style={styles.icon}
                      />
                    }
                    onRequestClose={() => setVisible(null)}
                    style={styles.menuContainer}
                  >
                    <MenuItem onPress={addHandler} textStyle={styles.menuItem}>
                      Duplicate
                    </MenuItem>
                    <MenuItem
                      onPress={toggleVersionModal}
                      textStyle={styles.menuItem}
                    >
                      Show workflow version
                    </MenuItem>
                    <MenuItem
                      textStyle={styles.menuItemDelete}
                      onPress={() => deleteHandler(key)}
                    >
                      Delete
                    </MenuItem>
                  </Menu>
                </View>
              </View>
              <View style={styles.orderContainer}>
                <Text style={styles.orderDetails}>{buyer}</Text>
                <Text style={styles.orderDetails}>Order ID: {orderNumber}</Text>
                <View
                  style={
                    status == "Draft"
                      ? styles.statusContainer
                      : status == "Accepted"
                      ? styles.statusContainerAccepted
                      : status == "Pending"
                      ? styles.statusContainerPending
                      : status == "Started"
                      ? styles.statusContainerAccepted
                      : status == "Overdue"
                      ? styles.statusContainerOverDue
                      : styles.statusContainer
                  }
                >
                  <Text
                    style={
                      status == "Draft"
                        ? styles.status
                        : status == "Accepted"
                        ? styles.statusAccepted
                        : status == "Pending"
                        ? styles.statusAccepted
                        : status == "Started"
                        ? styles.statusAccepted
                        : status == "Overdue"
                        ? styles.statusAccepted
                        : styles.status
                    }
                  >
                    {status}
                  </Text>
                </View>
                <View style={styles.infoContainer}>
                  <View>
                    <Text style={styles.infoTitle}>Volume:</Text>
                    <Text style={styles.infoDetail}>
                      {volume} {volumeUnit}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.infoTitle}>Product:</Text>
                    <Text style={styles.infoDetail}>{product}</Text>
                  </View>
                  <View>
                    <Text style={styles.infoTitle}>Delivery Date:</Text>
                    <Text style={styles.infoDetail}>{deliveryDate}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      ))}
    </>
  );
};

export default ItemCard;
