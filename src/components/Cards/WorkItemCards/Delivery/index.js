import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import sanityClient from "../../../../../sanity";
import ItemCard from "../ItemCard";
import { styles } from "../styles";

const DeliveryCard = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "delivery"] | order(_createdAt asc)
    `
      )
      .then((data) => {
        setDeliveries(data);
      });
  }, []);

  return (
    <View style={styles.kanbanContainer}>
      <View style={styles.kanbanColumnTitle}>
        <Text style={styles.kanbanTitle}>Delivery</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {deliveries.map((delivery) => (
          <ItemCard
            _key={delivery._id}
            id={delivery._id}
            buyer={delivery.buyer}
            vesselName={delivery.vesselName}
            port={delivery.port}
            nextPort={delivery.nextPort}
            deliveryDate={delivery.deliveryDate}
            product={delivery.product}
            volume={delivery.volume}
            volumeUnit={delivery.volumeUnit}
            orderNumber={delivery.orderNumber}
            status={delivery.status}
            comment={delivery.comment}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default DeliveryCard;
