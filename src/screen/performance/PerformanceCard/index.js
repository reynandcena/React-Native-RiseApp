import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";

import ItemCard from "../../../components/Cards/WorkItemCards/ItemCard";
import HeaderGlobal from "../../../components/HeaderGlobal";
import FocusedStatusBar from "../../../components/StatusBar";
import sanityClient from "../../../../sanity";
import { COLORS, SIZES } from "../../../utils/constants";
import DefaultWithExport from "../../../components/TopBar/DefaultWithExport";
import WorkBoardFloatingButton from "../../../components/Buttons/WorkBoardFloatingButton";

const PerformanceScreen = () => {
  const [performances, setPerformances] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type in ["nomination", "delivery", "scheduling", "settlement"]] | order(_createdAt asc)
    `
      )
      .then((data) => {
        setPerformances(data);
      });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <HeaderGlobal />
      <DefaultWithExport />
      <View style={{ paddingHorizontal: SIZES.spacing, marginBottom: 150 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {performances.map((performance) => (
            <ItemCard
              _key={performance._id}
              id={performance._id}
              buyer={performance.buyer}
              vesselName={performance.vesselName}
              port={performance.port}
              nextPort={performance.nextPort}
              deliveryDate={performance.deliveryDate}
              product={performance.product}
              volume={performance.volume}
              volumeUnit={performance.volumeUnit}
              orderNumber={performance.orderNumber}
              status={performance.status}
              comment={performance.comment}
            />
          ))}
        </ScrollView>
      </View>
      <WorkBoardFloatingButton />
    </SafeAreaView>
  );
};

export default PerformanceScreen;
