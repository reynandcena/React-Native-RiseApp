import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import sanityClient from "../../../../../sanity";
import ItemCard from "../ItemCard";
import { styles } from "../styles";

const SettlementCard = () => {
  const [settlements, setSettlements] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "settlement"] | order(_createdAt asc)
    `
      )
      .then((data) => {
        setSettlements(data);
      });
  }, []);

  return (
    <View style={styles.kanbanContainer}>
      <View style={styles.kanbanColumnTitle}>
        <Text style={styles.kanbanTitle}>Settlement</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {settlements.map((settlement) => (
          <ItemCard
            _key={settlement._id}
            id={settlement._id}
            buyer={settlement.buyer}
            vesselName={settlement.vesselName}
            port={settlement.port}
            nextPort={settlement.nextPort}
            deliveryDate={settlement.deliveryDate}
            product={settlement.product}
            volume={settlement.volume}
            volumeUnit={settlement.volumeUnit}
            orderNumber={settlement.orderNumber}
            status={settlement.status}
            comment={settlement.comment}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SettlementCard;
