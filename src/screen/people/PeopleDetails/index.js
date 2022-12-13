import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Modal from "react-native-modal";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Card, List, DataTable } from "react-native-paper";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HeaderGlobal from "../../../components/HeaderGlobal";
import FocusedStatusBar from "../../../components/StatusBar";
import { COLORS, FONTS } from "../../../utils/constants";
import { styles } from "./styles";
import DefaultInput from "../../../components/InputText/DefaultInput";
import ContentsTab from "../../../components/Tabs/ContentTab";
import ActivityTab from "../../../components/Tabs/ActivityTab";

const renderScene = SceneMap({
  first: ContentsTab,
  second: ActivityTab,
});

const PeopleDetails = ({ route, navigation }) => {
  const { data } = route.params;

  const [selectedItem, setSelectedItem] = useState(null);

  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Contents" },
    { key: "second", title: "Activity" },
  ]);

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        renderLabel={({ focused, route }) => {
          return (
            <Text
              style={[
                { color: focused ? COLORS.primary : COLORS.grey },
                styles.tabTitle,
              ]}
            >
              {route.title}
            </Text>
          );
        }}
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabBar}
        indicatorContainerStyle={styles.indicatorContainer}
      />
    );
  };

  return (
    <>
      <Modal
        isVisible={isModalVisible}
        style={{ margin: 0 }}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        animationInTiming={500}
        animationOutTiming={750}
        backdropColor="transparent"
      >
        <View style={styles.modalContainer}>
          <View style={styles.headerModal}>
            <TouchableOpacity onPress={toggleModal} style={{ marginRight: 8 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="keyboard-backspace"
                  size={20}
                  style={[styles.icon, { marginRight: 8 }]}
                />
                <Text style={styles.headerModalText}>Back</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TabView
            navigationState={{ index, routes }}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </View>
      </Modal>

      <SafeAreaView style={styles.SafeArea}>
        <FocusedStatusBar backgroundColor={COLORS.background} />
        <HeaderGlobal />
        <View style={styles.TopBar}>
          <TouchableOpacity onPress={() => navigation.navigate("PeopleScreen")}>
            <Text style={styles.PageTitle}>People </Text>
          </TouchableOpacity>
          <Text style={styles.PageTitle}>/</Text>
          <Text style={styles.ActiveContact}> {data.name}</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Container}>
            <Card style={styles.cardContainer}>
              <Card.Content>
                <View style={styles.HeaderContent}>
                  <Image source={data.avatarImage} style={styles.AvatarImage} />
                  <View>
                    <Text style={styles.HeaderName}>{data.name}</Text>
                    <Text style={styles.HeaderCompany}>{data.company}</Text>
                  </View>
                </View>
                <View style={styles.spacer} />
                <AutocompleteDropdown
                  key={data.id}
                  clearOnFocus={false}
                  closeOnBlur={true}
                  closeOnSubmit={true}
                  initialValue={{ id: data.id }}
                  onSelectItem={setSelectedItem}
                  dataSet={[{ id: data.id, title: data.company }]}
                  valueExtractor={(item) => data.company}
                  textInputProps={{
                    autoCorrect: false,
                    autoCapitalize: "none",
                    style: {
                      color: "#fff",
                      fontFamily: FONTS.regular,
                      lineHeight: 22,
                    },
                  }}
                  rightButtonsContainerStyle={{
                    backgroundColor: COLORS.paper,
                  }}
                  inputContainerStyle={{
                    backgroundColor: COLORS.paper,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.overlayDivider,
                  }}
                  suggestionsListContainerStyle={{
                    backgroundColor: COLORS.overlayDivider,
                  }}
                  suggestionsListTextStyle={{
                    fontFamily: FONTS.regular,
                    color: COLORS.white,
                  }}
                />
                <View style={styles.spacer} />
                <DefaultInput
                  val={data.email}
                  onChangeText={(value) => handleOnChangeText(value, "email")}
                  label="Email"
                  textcolor={COLORS.white}
                  background={COLORS.paper}
                />
              </Card.Content>
            </Card>

            <View style={styles.spacer} />

            <Card style={styles.cardContainer}>
              <Card.Content>
                <List.Accordion
                  title="Work history"
                  style={styles.listContainer}
                  titleStyle={styles.title}
                  theme={{ colors: { text: COLORS.white } }}
                >
                  <React.Fragment>
                    <View style={styles.listItemContainer}>
                      <DataTable style={styles.tableContainer}>
                        <DataTable.Header style={styles.tableHeader}>
                          <DataTable.Title>
                            <Text style={styles.columnHeader}>ID </Text>
                            <MaterialCommunityIcons
                              name="arrow-down"
                              size={16}
                              style={styles.iconSort}
                            />
                          </DataTable.Title>
                          <DataTable.Title numeric>
                            <Text style={styles.columnHeader}>
                              Delivery Date
                            </Text>
                            <View style={styles.spacing} />
                            <MaterialCommunityIcons
                              name="arrow-down"
                              size={16}
                              style={styles.iconSort}
                            />
                          </DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row
                          style={{ borderBottomColor: COLORS.grey900 }}
                        >
                          <DataTable.Cell textStyle={styles.rowTitle}>
                            SN 20210201-RTD
                          </DataTable.Cell>
                          <DataTable.Cell numeric>
                            <TouchableOpacity>
                              <Octicons
                                name="link-external"
                                size={16}
                                style={styles.iconLink}
                              />
                            </TouchableOpacity>
                          </DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row
                          style={{ borderBottomColor: COLORS.grey900 }}
                        >
                          <DataTable.Cell textStyle={styles.rowTitle}>
                            SN 20210202-RTD
                          </DataTable.Cell>
                          <DataTable.Cell numeric>
                            <TouchableOpacity>
                              <Octicons
                                name="link-external"
                                size={16}
                                style={styles.iconLink}
                              />
                            </TouchableOpacity>
                          </DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row
                          style={{ borderBottomColor: COLORS.grey900 }}
                        >
                          <DataTable.Cell textStyle={styles.rowTitle}>
                            SN 20210203-RTD
                          </DataTable.Cell>
                          <DataTable.Cell numeric>
                            <TouchableOpacity>
                              <Octicons
                                name="link-external"
                                size={16}
                                style={styles.iconLink}
                              />
                            </TouchableOpacity>
                          </DataTable.Cell>
                        </DataTable.Row>
                      </DataTable>
                    </View>
                  </React.Fragment>
                </List.Accordion>
              </Card.Content>
            </Card>

            <View style={styles.spacer} />

            <Card style={styles.cardContainer}>
              <Card.Content>
                <List.Accordion
                  title="Attachments"
                  style={styles.listContainer}
                  titleStyle={styles.title}
                  theme={{ colors: { text: COLORS.white } }}
                >
                  <React.Fragment>
                    <View style={styles.listItemContainer}>
                      <DataTable style={styles.tableContainer}>
                        <DataTable.Header style={styles.tableHeader}>
                          <DataTable.Title style={{ width: 200 }}>
                            <Text style={styles.columnHeader}>ID </Text>
                            <MaterialCommunityIcons
                              name="arrow-down"
                              size={16}
                              style={styles.iconSort}
                            />
                          </DataTable.Title>
                          <DataTable.Title style={{ paddingLeft: 25 }}>
                            <Text style={styles.columnHeader}>Date </Text>
                            <MaterialCommunityIcons
                              name="arrow-down"
                              size={16}
                              style={styles.iconSort}
                            />
                          </DataTable.Title>
                          <DataTable.Title></DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row
                          style={{ borderBottomColor: COLORS.grey900 }}
                        >
                          <DataTable.Cell textStyle={styles.rowTitle}>
                            File_Name_1.pdf
                          </DataTable.Cell>
                          <DataTable.Cell textStyle={styles.rowTitle} numeric>
                            13/11/2022
                          </DataTable.Cell>
                          <DataTable.Cell numeric>
                            <TouchableOpacity>
                              <Octicons
                                name="link-external"
                                size={16}
                                style={styles.iconLink}
                              />
                            </TouchableOpacity>
                          </DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row
                          style={{ borderBottomColor: COLORS.grey900 }}
                        >
                          <DataTable.Cell textStyle={styles.rowTitle}>
                            File_Name_2.pdf
                          </DataTable.Cell>
                          <DataTable.Cell textStyle={styles.rowTitle} numeric>
                            13/11/2022
                          </DataTable.Cell>
                          <DataTable.Cell numeric>
                            <TouchableOpacity>
                              <Octicons
                                name="link-external"
                                size={16}
                                style={styles.iconLink}
                              />
                            </TouchableOpacity>
                          </DataTable.Cell>
                        </DataTable.Row>
                      </DataTable>
                    </View>
                  </React.Fragment>
                </List.Accordion>
              </Card.Content>
            </Card>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: COLORS.overlayDivider,
            padding: 16,
            elevation: 3,
          }}
        >
          <TouchableOpacity onPress={toggleModal}>
            <MaterialCommunityIcons
              name="menu-open"
              size={24}
              color={COLORS.grey}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default PeopleDetails;
