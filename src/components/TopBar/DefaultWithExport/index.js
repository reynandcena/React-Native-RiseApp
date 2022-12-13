import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Slider } from "react-native-range-slider-expo";
import { List, Checkbox, Switch, Button } from "react-native-paper";
import DateRangePicker from "rn-select-date-range";
import moment from "moment";

import "intl";
import "intl/locale-data/jsonp/en";
import { DatePickerModal } from "react-native-paper-dates";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";

import { COLORS, FONTS, SIZES } from "../../../utils/constants";
import SearchBar from "../../InputText/SearchBar";
import { styles } from "./styles";
import FlatButton from "../../Buttons/FlatButton";

const DefaultWithExport = ({ titleNoID }) => {
  const navigation = useNavigation();

  const [selectedRange, setRange] = useState({});

  const [visible, setVisible] = React.useState(false);
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onChange = React.useCallback(({ startDate, endDate }) => {
    setVisible(false);
    console.log({ startDate, endDate });
  }, []);

  const [searchPhrase, setSearchPhrase] = useState("");

  const [clicked, setClicked] = useState(false);

  const {
    params: { id, title },
  } = useRoute();

  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [addFilterModalVisible, setAddFilterModalVisible] = useState(false);

  const toggleFilterModal = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };

  const toggleAddFilterModal = () => {
    setAddFilterModalVisible(!addFilterModalVisible);
  };

  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);

  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);
  const [checked10, setChecked10] = useState(false);
  const [checked11, setChecked11] = useState(false);
  const [checked12, setChecked12] = useState(false);
  const [checked13, setChecked13] = useState(false);
  const [checked14, setChecked14] = useState(false);

  const [value, setValue] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSwitchOn1, setIsSwitchOn1] = useState(false);
  const [isSwitchOn2, setIsSwitchOn2] = useState(false);
  const [isSwitchOn3, setIsSwitchOn3] = useState(false);
  const [isSwitchOn4, setIsSwitchOn4] = useState(false);
  const [isSwitchOn5, setIsSwitchOn5] = useState(false);
  const [isSwitchOn6, setIsSwitchOn6] = useState(false);
  const [isSwitchOn7, setIsSwitchOn7] = useState(false);
  const [isSwitchOn8, setIsSwitchOn8] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);
  const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);
  const onToggleSwitch3 = () => setIsSwitchOn3(!isSwitchOn3);
  const onToggleSwitch4 = () => setIsSwitchOn4(!isSwitchOn4);
  const onToggleSwitch5 = () => setIsSwitchOn5(!isSwitchOn5);
  const onToggleSwitch6 = () => setIsSwitchOn6(!isSwitchOn6);
  const onToggleSwitch7 = () => setIsSwitchOn7(!isSwitchOn7);
  const onToggleSwitch8 = () => setIsSwitchOn8(!isSwitchOn8);

  return (
    <>
      <Modal
        isVisible={isFilterModalVisible}
        style={{ margin: 0 }}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        animationInTiming={500}
        animationOutTiming={750}
        backdropColor="transparent"
      >
        <View style={styles.modalContainer}>
          <View style={styles.headerModal}>
            <TouchableOpacity
              onPress={toggleFilterModal}
              style={{ marginRight: 8 }}
            >
              <MaterialCommunityIcons
                name="close"
                size={20}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.headerModalText}>Filters</Text>
          </View>
          <View>
            <List.Section>
              <ScrollView showsVerticalScrollIndicator={false}>
                {/* Vessel */}
                <List.Accordion
                  title="Vessel"
                  left={() => (
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={20}
                      color={COLORS.grey}
                    />
                  )}
                  right={() => (
                    <Entypo
                      name="dot-single"
                      size={32}
                      style={styles.iconDot}
                    />
                  )}
                  titleStyle={styles.title}
                  style={styles.listContainer}
                  theme={{ colors: COLORS.white }}
                >
                  <React.Fragment>
                    <View style={styles.listItemContainer}>
                      <SearchBar
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                        clicked={clicked}
                        setClicked={setClicked}
                      />

                      <View style={{ paddingVertical: 8 }} />
                      <Checkbox.Item
                        label="Edith Maersk"
                        labelStyle={styles.checkBoxLabel}
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked(!checked);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="Madison Maersk"
                        labelStyle={styles.checkBoxLabel}
                        status={checked1 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked1(!checked1);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="Kondar Schulte"
                        labelStyle={styles.checkBoxLabel}
                        status={checked2 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked2(!checked2);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="Silver Ervilia"
                        labelStyle={styles.checkBoxLabel}
                        status={checked3 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked3(!checked3);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="Maersk Alfirk"
                        labelStyle={styles.checkBoxLabel}
                        status={checked4 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked4(!checked4);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="Emerald Spirit"
                        labelStyle={styles.checkBoxLabel}
                        status={checked5 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked5(!checked5);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="AKIJ OCEAN"
                        labelStyle={styles.checkBoxLabel}
                        status={checked6 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked6(!checked6);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="Pegasus"
                        labelStyle={styles.checkBoxLabel}
                        status={checked7 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked7(!checked7);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                    </View>
                  </React.Fragment>
                </List.Accordion>
                {/* Status */}
                <List.Accordion
                  title="Status"
                  left={() => (
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={20}
                      color={COLORS.grey}
                    />
                  )}
                  right={() => (
                    <Entypo
                      name="dot-single"
                      size={32}
                      style={styles.iconDot}
                    />
                  )}
                  titleStyle={styles.title}
                  style={styles.listContainer}
                  theme={{ colors: COLORS.primary }}
                >
                  <React.Fragment>
                    <View style={styles.listItemContainer}>
                      <SearchBar
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                        clicked={clicked}
                        setClicked={setClicked}
                      />
                      <View style={{ paddingVertical: 8 }} />
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="square-rounded"
                          size={24}
                          color={COLORS.overlayDivider}
                        />
                        <Checkbox.Item
                          label="Draft"
                          labelStyle={styles.checkBoxLabel}
                          status={checked8 ? "checked" : "unchecked"}
                          onPress={() => {
                            setChecked8(!checked8);
                          }}
                          uncheckedColor={COLORS.grey}
                          color={COLORS.primary}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="square-rounded"
                          size={24}
                          color={COLORS.primary}
                        />
                        <Checkbox.Item
                          label="Accepted"
                          labelStyle={styles.checkBoxLabel}
                          status={checked9 ? "checked" : "unchecked"}
                          onPress={() => {
                            setChecked9(!checked9);
                          }}
                          uncheckedColor={COLORS.grey}
                          color={COLORS.primary}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="square-rounded"
                          size={24}
                          color="#E4A400"
                        />
                        <Checkbox.Item
                          label="Pending"
                          labelStyle={styles.checkBoxLabel}
                          status={checked10 ? "checked" : "unchecked"}
                          onPress={() => {
                            setChecked10(!checked10);
                          }}
                          uncheckedColor={COLORS.grey}
                          color={COLORS.primary}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="square-rounded"
                          size={24}
                          color={COLORS.primary}
                        />
                        <Checkbox.Item
                          label="Delivery started"
                          labelStyle={styles.checkBoxLabel}
                          status={checked11 ? "checked" : "unchecked"}
                          onPress={() => {
                            setChecked11(!checked11);
                          }}
                          uncheckedColor={COLORS.grey}
                          color={COLORS.primary}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="square-rounded"
                          size={24}
                          color={COLORS.error}
                        />
                        <Checkbox.Item
                          label="Invoice overdue"
                          labelStyle={styles.checkBoxLabel}
                          status={checked12 ? "checked" : "unchecked"}
                          onPress={() => {
                            setChecked12(!checked12);
                          }}
                          uncheckedColor={COLORS.grey}
                          color={COLORS.primary}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="square-rounded"
                          size={24}
                          color={COLORS.overlayDivider}
                        />
                        <Checkbox.Item
                          label="Paid"
                          labelStyle={styles.checkBoxLabel}
                          status={checked13 ? "checked" : "unchecked"}
                          onPress={() => {
                            setChecked13(!checked13);
                          }}
                          uncheckedColor={COLORS.grey}
                          color={COLORS.primary}
                        />
                      </View>

                      <Text
                        style={{
                          fontFamily: FONTS.regular,
                          fontSize: SIZES.fontBase,
                          textTransform: "uppercase",
                          color: COLORS.grey,
                        }}
                      >
                        Hidden by default:
                      </Text>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="square-rounded"
                          size={24}
                          color={COLORS.grey900}
                        />
                        <Checkbox.Item
                          label="Deleted"
                          labelStyle={styles.checkBoxLabel}
                          status={checked14 ? "checked" : "unchecked"}
                          onPress={() => {
                            setChecked14(!checked14);
                          }}
                          uncheckedColor={COLORS.grey}
                          color={COLORS.primary}
                        />
                      </View>
                    </View>
                  </React.Fragment>
                </List.Accordion>
                {/* Location */}
                <List.Accordion
                  title="Location"
                  left={() => (
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={20}
                      color={COLORS.grey}
                    />
                  )}
                  right={() => (
                    <Entypo
                      name="dot-single"
                      size={32}
                      style={styles.iconDot}
                    />
                  )}
                  titleStyle={styles.title}
                  style={styles.listContainer}
                  theme={{ colors: COLORS.primary }}
                >
                  <React.Fragment>
                    <View style={styles.listItemContainer}>
                      <SearchBar
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                        clicked={clicked}
                        setClicked={setClicked}
                      />
                      <View style={{ paddingVertical: 8 }} />
                      <Checkbox.Item
                        label="Amsterdam"
                        labelStyle={styles.checkBoxLabel}
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked(!checked);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="Antwerp"
                        labelStyle={styles.checkBoxLabel}
                        status={checked1 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked1(!checked1);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="Fujairah"
                        labelStyle={styles.checkBoxLabel}
                        status={checked2 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked2(!checked2);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="Las Palmas"
                        labelStyle={styles.checkBoxLabel}
                        status={checked3 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked3(!checked3);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="Rotherdam"
                        labelStyle={styles.checkBoxLabel}
                        status={checked4 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked4(!checked4);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="Singapore (AEBB)"
                        labelStyle={styles.checkBoxLabel}
                        status={checked5 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked5(!checked5);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                    </View>
                  </React.Fragment>
                </List.Accordion>
                {/* Volume */}
                <List.Accordion
                  title="Volume"
                  left={() => (
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={20}
                      color={COLORS.grey}
                    />
                  )}
                  right={() => (
                    <Entypo
                      name="dot-single"
                      size={32}
                      style={styles.iconDot}
                    />
                  )}
                  titleStyle={styles.title}
                  style={styles.listContainer}
                  theme={{ colors: COLORS.primary }}
                >
                  <React.Fragment>
                    <View style={styles.listItemContainer}>
                      <Text
                        style={{
                          fontFamily: FONTS.regular,
                          fontSize: SIZES.heading6,
                          textTransform: "uppercase",
                          lineHeight: 17.38,
                          color: COLORS.grey,
                        }}
                      >
                        Volume (Litres)
                      </Text>
                      <View
                        style={{
                          backgroundColor: COLORS.overlayDivider,
                          padding: 16,
                          alignItems: "center",
                          marginVertical: 12,
                          borderRadius: 4,
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: FONTS.medium,
                            fontSize: SIZES.heading5,
                            lineHeight: 22,
                            color: COLORS.white,
                          }}
                        >
                          {value}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontFamily: FONTS.regular,
                          fontSize: SIZES.fontBase,
                          lineHeight: 22,
                          textAlign: "center",
                          color: COLORS.grey,
                        }}
                      >
                        Average volume: 300 Litres
                      </Text>

                      <Slider
                        min={0}
                        max={2000}
                        valueOnChange={(value) => setValue(value)}
                        initialValue={250}
                        knobColor="#07B999"
                        valueLabelsBackgroundColor={COLORS.overlayDivider}
                        inRangeBarColor={COLORS.overlayDivider}
                        outOfRangeBarColor="#07B999"
                        styleSize="small"
                        valueLabelsTextColor="#FFFFFF"
                      />
                    </View>
                  </React.Fragment>
                </List.Accordion>
                {/* Product */}
                <List.Accordion
                  title="Product"
                  left={() => (
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={20}
                      color={COLORS.grey}
                    />
                  )}
                  right={() => (
                    <Entypo
                      name="dot-single"
                      size={32}
                      style={styles.iconDot}
                    />
                  )}
                  titleStyle={styles.title}
                  style={styles.listContainer}
                  theme={{ colors: COLORS.primary }}
                >
                  <React.Fragment>
                    <View style={styles.listItemContainer}>
                      <SearchBar
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                        clicked={clicked}
                        setClicked={setClicked}
                      />
                      <View style={{ paddingVertical: 8 }} />
                      <Checkbox.Item
                        label="Diesel"
                        labelStyle={styles.checkBoxLabel}
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked(!checked);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="VLSF 380 CS1"
                        labelStyle={styles.checkBoxLabel}
                        status={checked1 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked1(!checked1);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="LSFO 0.5%"
                        labelStyle={styles.checkBoxLabel}
                        status={checked2 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked2(!checked2);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="IFO 380"
                        labelStyle={styles.checkBoxLabel}
                        status={checked3 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked3(!checked3);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                      <Checkbox.Item
                        label="VLSF 380 CS1"
                        labelStyle={styles.checkBoxLabel}
                        status={checked4 ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked4(!checked4);
                        }}
                        uncheckedColor={COLORS.grey}
                        color={COLORS.primary}
                      />
                    </View>
                  </React.Fragment>
                </List.Accordion>

                {/* Delivery date */}
                <List.Accordion
                  title="Delivery date"
                  left={() => (
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={20}
                      color={COLORS.grey}
                    />
                  )}
                  right={() => (
                    <Entypo
                      name="dot-single"
                      size={32}
                      style={styles.iconDot}
                    />
                  )}
                  titleStyle={styles.title}
                  style={styles.listContainer}
                  theme={{ colors: COLORS.primary }}
                >
                  <React.Fragment>
                    <View style={styles.listItemContainer}>
                      <DatePickerModal
                        mode="range"
                        visible={visible}
                        onDismiss={onDismiss}
                        startDate={undefined}
                        endDate={undefined}
                        onConfirm={onChange}
                        saveLabel="Save" // optional
                        label="Select period" // optional
                        startLabel="From" // optional
                        endLabel="To" // optional
                        animationType="slide" // optional, default is slide on ios/android and none on web
                      />
                      <Button
                        onPress={() => setVisible(true)}
                        mode="contained"
                        style={{ backgroundColor: COLORS.primary }}
                      >
                        Select Date Range
                      </Button>
                    </View>
                  </React.Fragment>
                </List.Accordion>

                <TouchableOpacity
                  style={{ padding: 16 }}
                  onPress={toggleAddFilterModal}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      fontSize: SIZES.fontBase,
                      color: COLORS.primary,
                    }}
                  >
                    + Add filter
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </List.Section>
          </View>
          <View style={styles.footer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 16,
              }}
            >
              <FlatButton
                label="Clear All"
                buttonPrimary={styles.button}
                buttonActive={styles.buttonactive}
              />
              <View style={{ marginHorizontal: 16 }} />
              <FlatButton
                label="Apply"
                buttonPrimary={styles.buttonprimaryactive}
                buttonActive={styles.buttonactive}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        isVisible={addFilterModalVisible}
        style={{ margin: 0 }}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        animationInTiming={500}
        animationOutTiming={750}
        backdropColor="transparent"
      >
        <View style={styles.modalContainer}>
          <View style={styles.headerModal}>
            <TouchableOpacity
              onPress={toggleAddFilterModal}
              style={{ marginRight: 8 }}
            >
              <MaterialCommunityIcons
                name="close"
                size={20}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.headerModalText}>Add Filter</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.switchContainer}>
              <Switch
                value={!isSwitchOn}
                onValueChange={onToggleSwitch}
                color={COLORS.primary}
              />
              <Text style={styles.switchLabel}>Vessel</Text>
            </View>

            <View style={styles.switchContainer}>
              <Switch
                value={!isSwitchOn1}
                onValueChange={onToggleSwitch1}
                color={COLORS.primary}
              />
              <Text style={styles.switchLabel}>Status</Text>
            </View>

            <View style={styles.switchContainer}>
              <Switch
                value={!isSwitchOn2}
                onValueChange={onToggleSwitch2}
                color={COLORS.primary}
              />
              <Text style={styles.switchLabel}>Location</Text>
            </View>

            <View style={styles.switchContainer}>
              <Switch
                value={!isSwitchOn3}
                onValueChange={onToggleSwitch3}
                color={COLORS.primary}
              />
              <Text style={styles.switchLabel}>Volume</Text>
            </View>

            <View style={styles.switchContainer}>
              <Switch
                value={!isSwitchOn4}
                onValueChange={onToggleSwitch4}
                color={COLORS.primary}
              />
              <Text style={styles.switchLabel}>Product</Text>
            </View>

            <View style={styles.switchContainer}>
              <Switch
                value={!isSwitchOn5}
                onValueChange={onToggleSwitch5}
                color={COLORS.primary}
              />
              <Text style={styles.switchLabel}>Delivery date</Text>
            </View>

            <View style={styles.switchContainer}>
              <Switch
                value={isSwitchOn6}
                onValueChange={onToggleSwitch6}
                color={COLORS.primary}
              />
              <Text style={styles.switchLabel}>Barge</Text>
            </View>

            <View style={styles.switchContainer}>
              <Switch
                value={isSwitchOn7}
                onValueChange={onToggleSwitch7}
                color={COLORS.primary}
              />
              <Text style={styles.switchLabel}>Buyer</Text>
            </View>

            <View style={styles.switchContainer}>
              <Switch
                value={isSwitchOn8}
                onValueChange={onToggleSwitch8}
                color={COLORS.primary}
              />
              <Text style={styles.switchLabel}>Supplier</Text>
            </View>
          </ScrollView>
        </View>
      </Modal>

      <View style={styles.topBar}>
        <View style={styles.rowContainer}>
          <Text style={styles.topBarTitle}>Performance</Text>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.actions} onPress={toggleFilterModal}>
            <MaterialCommunityIcons
              name="filter-variant"
              size={18}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.spacer} />
          <View style={styles.topBarIconContainer}>
            <TouchableOpacity style={styles.actions}>
              <MaterialCommunityIcons
                name="border-all"
                size={18}
                style={styles.iconActive}
              />
            </TouchableOpacity>
            <View style={styles.verticalDivider} />
            <TouchableOpacity
              style={styles.actions}
              onPress={() =>
                navigation.navigate("PerformanceTable", { titleNoID })
              }
            >
              <MaterialIcons
                name="view-headline"
                size={18}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.spacer} />
          <TouchableOpacity style={styles.actions}>
            <MaterialCommunityIcons
              name="file-move-outline"
              size={18}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DefaultWithExport;
