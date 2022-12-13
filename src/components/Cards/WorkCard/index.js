import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Title } from "react-native-paper";
import { Menu, MenuItem } from "react-native-material-menu";
import { useNavigation } from "@react-navigation/native";

import WorkflowVersion from "../../Modals/WorkflowVersion";
import { COLORS, SIZES } from "../../../utils/constants";
import { styles } from "./styles";

const WorkCard = ({ id, _key, title, asset, subtitle, items }) => {
  const navigation = useNavigation();

  const [isVersionVisible, setIsVersionVisible] = useState(false);

  const toggleVersionModal = () => {
    setIsVersionVisible(!isVersionVisible);
  };

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
  return (
    <>
      <WorkflowVersion
        visibleModal={isVersionVisible}
        openModal={toggleVersionModal}
      />
      {workCard.map((key, index) => (
        <View
          style={{
            paddingHorizontal: 16,
            marginBottom: SIZES.spacing,
          }}
          key={index}
        >
          <Card style={styles.cardContainer}>
            <Card.Content>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("WorkItemScreen", { id, title })
                }
              >
                <View style={styles.rowContainer}>
                  <Image
                    source={{
                      uri: asset,
                    }}
                    style={{
                      width: 50,
                      height: 50,
                    }}
                  />
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
                <View style={{ paddingTop: 16 }}>
                  <Title style={styles.cardTitle}>
                    {title} {index ? " - Copy " + index : ""}
                  </Title>
                  <Text style={styles.cardSubTitle}>{subtitle}</Text>
                  <View
                    style={{
                      borderTopWidth: 1,
                      borderTopColor: COLORS.overlayDivider,
                      marginTop: 16,
                    }}
                  >
                    <Text style={styles.items}>{items} items</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      ))}
    </>
  );
};

export default WorkCard;
