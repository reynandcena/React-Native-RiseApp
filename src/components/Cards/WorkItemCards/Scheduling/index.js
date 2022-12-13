import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import sanityClient from "../../../../../sanity";
import ItemCard from "../ItemCard";
import { styles } from "../styles";

const SchedulingCard = () => {
  const [schedulings, setSchedulings] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "scheduling"] | order(_createdAt asc)
    `
      )
      .then((data) => {
        setSchedulings(data);
      });
  }, []);

  return (
    <View style={styles.kanbanContainer}>
      <View style={styles.kanbanColumnTitle}>
        <Text style={styles.kanbanTitle}>Scheduling</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {schedulings.map((scheduling) => (
          <ItemCard
            _key={scheduling._id}
            id={scheduling._id}
            buyer={scheduling.buyer}
            vesselName={scheduling.vesselName}
            port={scheduling.port}
            nextPort={scheduling.nextPort}
            deliveryDate={scheduling.deliveryDate}
            product={scheduling.product}
            volume={scheduling.volume}
            volumeUnit={scheduling.volumeUnit}
            orderNumber={scheduling.orderNumber}
            status={scheduling.status}
            comment={scheduling.comment}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SchedulingCard;
