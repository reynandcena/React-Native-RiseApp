import React, { useState } from "react";
import { SafeAreaView, View, FlatList } from "react-native";

import PeopleCard from "../../../components/Cards/PeopleCard";
import HeaderGlobal from "../../../components/HeaderGlobal";
import SearchBar from "../../../components/InputText/SearchBar";
import FocusedStatusBar from "../../../components/StatusBar";
import PeopleTopBar from "../../../components/TopBar/PeopleTopBar";
import { COLORS, Contacts } from "../../../utils/constants";
import { styles } from "./styles";

const PeopleScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const [clicked, setClicked] = useState(false);

  const [people, setPeople] = useState(Contacts);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setPeople(Contacts);
    }

    const filteredData = Contacts.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setPeople(!Contacts);
    } else {
      setPeople(filteredData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <HeaderGlobal />
      <PeopleTopBar />
      <SearchBar
        searchPhrase={people}
        setSearchPhrase={handleSearch}
        clicked={clicked}
        setClicked={setClicked}
      />
      <View style={styles.peopleContainer}>
        <FlatList
          data={people}
          renderItem={({ item }) => <PeopleCard data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default PeopleScreen;
