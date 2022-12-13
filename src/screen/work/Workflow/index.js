import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";

import HeaderGlobal from "../../../components/HeaderGlobal";
import FocusedStatusBar from "../../../components/StatusBar";
import { COLORS } from "../../../utils/constants";
import sanityClient, { urlFor } from "../../../../sanity";
import { styles } from "./styles";
import WorkCard from "../../../components/Cards/WorkCard";
import WorkFloatingButton from "../../../components/Buttons/WorkFloatingButton";

const WorkScreen = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "work"] | order(_createdAt asc)
    `
      )
      .then((data) => {
        setWorks(data);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <HeaderGlobal />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Work</Text>
        </View>
        {works.map((work) => (
          <WorkCard
            key={work._id}
            wid={work._id}
            title={work.workName}
            subtitle={work.description}
            items={work.items}
            asset={urlFor(work.image).url()}
          />
        ))}
      </ScrollView>
      <WorkFloatingButton />
    </SafeAreaView>
  );
};

export default WorkScreen;
