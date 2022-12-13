import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { List, TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

import { ASSETS, COLORS, FONTS, SIZES } from "../../../utils/constants";
import SearchBar from "../../InputText/SearchBar";

import { styles } from "./styles";
import DefaultInput from "../../InputText/DefaultInput";

const ActivityTab = () => {
  const [text, setText] = React.useState("");

  const [searchPhrase, setSearchPhrase] = useState("");

  const [clicked, setClicked] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
        </View>
        <List.Section>
          <List.Accordion
            title={
              <Text>
                Jenny Wilson <Text style={styles.innerText}>edited</Text> Vessel
                type
              </Text>
            }
            style={styles.listContainer}
            titleStyle={styles.title}
            theme={{ colors: COLORS.white }}
            left={(props) => (
              <List.Icon
                {...props}
                icon={ASSETS.Avatar5}
                color={COLORS.systemsWarning}
              />
            )}
          >
            <React.Fragment>
              <View style={styles.listContent}>
                <Text style={styles.listText}>21 Jul 2022, 10:15 AM</Text>
                <View style={styles.spacerVertical} />
                <Text style={styles.listText}>Issuance Volume:</Text>
                <View style={styles.spacerVertical} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.listTextWhite}>Tanker</Text>
                  <View style={styles.spacerHorizontal} />
                  <MaterialIcons
                    name="arrow-right-alt"
                    size={24}
                    color={COLORS.grey}
                  />
                  <View style={styles.spacerHorizontal} />
                  <Text style={styles.listTextWhite}>Oil Tanker</Text>
                </View>
              </View>
            </React.Fragment>
          </List.Accordion>
        </List.Section>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={ASSETS.Avatar7}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
          <View style={styles.spacerHorizontal} />
          <View style={styles.spacerHorizontal} />
          <Text style={{ color: COLORS.white }}>
            Wade Warren <Text style={styles.innerText}>left a comment</Text>
          </Text>
        </View>
        <Text style={[styles.listText, { marginLeft: 27 }]}>
          21 Jul 2022, 10:15 AM
        </Text>
        <View style={styles.spacerVertical} />
        <View style={styles.spacerVertical} />
        <View style={{ paddingHorizontal: SIZES.spacing }}>
          <DefaultInput
            val={text}
            onChangeText={(text) => setText(text)}
            label="Reporting period comment goes here"
            textcolor={COLORS.white}
            background={COLORS.overlayDivider}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ActivityTab;
