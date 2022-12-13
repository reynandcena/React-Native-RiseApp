import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import HeaderGlobal from "../../../components/HeaderGlobal";
import FocusedStatusBar from "../../../components/StatusBar";
import { styles } from "./styles";
import { COLORS } from "../../../utils/constants";
import FormCard from "../../../components/Cards/FormCard";
import ContactCard from "../../../components/Cards/ContactCard";
import sanityClient, { urlFor } from "../../../../sanity";

const ContactScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "contact"] | order(_createdAt asc)
    `
      )
      .then((data) => {
        setContacts(data);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.background} />
      <HeaderGlobal />
      <View style={styles.topbar}>
        <TouchableOpacity
          style={styles.topbarlink}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={18} style={styles.icon} />
          <Text style={styles.linkText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <FormCard />
          {contacts.map((contact) => (
            <ContactCard
              key={contact._id}
              id={contact._id}
              location={contact.location}
              flag={urlFor(contact.flag).url()}
              address={contact.address}
              phone1={contact.phone1}
              phone2={contact.phone2}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;
