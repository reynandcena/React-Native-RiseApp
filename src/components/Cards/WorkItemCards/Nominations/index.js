import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import sanityClient from "../../../../../sanity";
import ItemCard from "../ItemCard";
import { styles } from "../styles";

const NominationsCard = () => {
  const [nominations, setNominations] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "nomination"] | order(_createdAt asc)
    `
      )
      .then((data) => {
        setNominations(data);
      });
  }, []);
  return (
    <View style={styles.kanbanContainer}>
      <View style={styles.kanbanColumnTitle}>
        <Text style={styles.kanbanTitle}>Nominations</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {nominations.map((nomination) => (
          <ItemCard
            _key={nomination._id}
            id={nomination._id}
            buyer={nomination.buyer}
            vesselName={nomination.vesselName}
            port={nomination.port}
            nextPort={nomination.nextPort}
            deliveryDate={nomination.deliveryDate}
            product={nomination.product}
            volume={nomination.volume}
            volumeUnit={nomination.volumeUnit}
            orderNumber={nomination.orderNumber}
            status={nomination.status}
            comment={nomination.comment}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default NominationsCard;
