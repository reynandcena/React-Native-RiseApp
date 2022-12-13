import React from "react";
import { View, ScrollView } from "react-native";
import NominationsCard from "../WorkItemCards/Nominations";
import SchedulingCard from "../WorkItemCards/Scheduling";
import DeliveryCard from "../WorkItemCards/Delivery";
import SettlementCard from "../WorkItemCards/Settlement";

const WorkItemCardView = () => {
  return (
    <ScrollView horizontal>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NominationsCard />
        <SchedulingCard />
        <DeliveryCard />
        <SettlementCard />
      </View>
    </ScrollView>
  );
};

export default WorkItemCardView;
