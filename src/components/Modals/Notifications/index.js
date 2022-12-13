import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

import {
  MaterialCommunityIcons,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

import { styles } from "./styles";
import { COLORS, FONTS, SIZES } from "../../../utils/constants";
import SearchBar from "../../InputText/SearchBar";
import { TextInput } from "react-native-paper";

const NotificationModal = ({ visibleModal, openModal }) => {
  const navigation = useNavigation();

  const [searchPhrase, setSearchPhrase] = useState("");

  const [clicked, setClicked] = useState(false);
  return (
    <Modal
      isVisible={visibleModal}
      style={{ margin: 0 }}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      animationInTiming={500}
      animationOutTiming={750}
      backdropColor="transparent"
    >
      <View style={styles.modalContainer}>
        <View style={styles.Divider}>
          <TouchableOpacity onPress={openModal} style={styles.headerModal}>
            <MaterialCommunityIcons
              name="close"
              size={20}
              color={COLORS.grey}
            />
            <Text style={styles.headerModalText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.marked}>Mark all as read</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: SIZES.spacing,
            }}
          >
            <View style={styles.profile}>
              <Text style={styles.profileText}>BC</Text>
            </View>
            <View style={{ marginLeft: SIZES.base }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.fontBase,
                      color: COLORS.white,
                    }}
                  >
                    Bessie Cooper
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.fontBase,
                    color: COLORS.grey,
                    marginHorizontal: 4,
                  }}
                >
                  shared
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.fontBase,
                      color: COLORS.white,
                    }}
                  >
                    &#123;Task name&#125;
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.fontBase,
                    color: COLORS.grey,
                    marginHorizontal: 4,
                  }}
                >
                  with you
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginTop: -10,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.fontBase,
                    color: COLORS.grey,
                    marginHorizontal: 4,
                  }}
                >
                  05 Dec 2022
                </Text>
                <View
                  style={{
                    height: 4,
                    width: 4,
                    backgroundColor: COLORS.grey,
                    borderRadius: 100,
                    marginHorizontal: 4,
                  }}
                />
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.fontBase,
                      color: COLORS.grey,
                    }}
                  >
                    Workflow name
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.fontBase,
                    color: COLORS.grey,
                    marginHorizontal: 4,
                  }}
                >
                  /
                </Text>

                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.fontBase,
                      color: COLORS.grey,
                      marginHorizontal: 4,
                    }}
                  >
                    Work item name
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.spacer} />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: SIZES.spacing,
            }}
          >
            <View style={styles.profile}>
              <Text style={styles.profileText}>LW</Text>
            </View>
            <View style={{ marginLeft: SIZES.base }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.fontBase,
                      color: COLORS.white,
                    }}
                  >
                    Lisa Williamson
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.fontBase,
                    color: COLORS.grey,
                    marginHorizontal: 4,
                  }}
                >
                  sent
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.fontBase,
                      color: COLORS.white,
                    }}
                  >
                    &#123;Task name&#125;
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.fontBase,
                    color: COLORS.grey,
                    marginHorizontal: 4,
                  }}
                >
                  with you
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginTop: -10,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.fontBase,
                    color: COLORS.grey,
                    marginHorizontal: 4,
                  }}
                >
                  05 Dec 2022
                </Text>
                <View
                  style={{
                    height: 4,
                    width: 4,
                    backgroundColor: COLORS.grey,
                    borderRadius: 100,
                    marginHorizontal: 4,
                  }}
                />
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.fontBase,
                      color: COLORS.grey,
                    }}
                  >
                    Workflow name
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.fontBase,
                    color: COLORS.grey,
                    marginHorizontal: 4,
                  }}
                >
                  /
                </Text>

                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.fontBase,
                      color: COLORS.grey,
                      marginHorizontal: 4,
                    }}
                  >
                    Work item name
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.spacer} />

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{
                paddingHorizontal: SIZES.spacing,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={styles.profile}>
                  <Text style={styles.profileText}>JW</Text>
                </View>
                <View style={{ marginLeft: SIZES.base }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: FONTS.regular,
                          fontSize: SIZES.fontBase,
                          color: COLORS.white,
                        }}
                      >
                        Jenny Wilson
                      </Text>
                    </TouchableOpacity>

                    <Text
                      style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.fontBase,
                        color: COLORS.grey,
                        marginHorizontal: 4,
                      }}
                    >
                      CC'd you on
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: FONTS.regular,
                          fontSize: SIZES.fontBase,
                          color: COLORS.white,
                        }}
                      >
                        &#123;Task name&#125;
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      marginTop: -10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.fontBase,
                        color: COLORS.grey,
                        marginHorizontal: 4,
                      }}
                    >
                      05 Dec 2022
                    </Text>
                    <View
                      style={{
                        height: 4,
                        width: 4,
                        backgroundColor: COLORS.grey,
                        borderRadius: 100,
                        marginHorizontal: 4,
                      }}
                    />
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: FONTS.regular,
                          fontSize: SIZES.fontBase,
                          color: COLORS.grey,
                        }}
                      >
                        Workflow name
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.fontBase,
                        color: COLORS.grey,
                        marginHorizontal: 4,
                      }}
                    >
                      /
                    </Text>

                    <TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: FONTS.regular,
                          fontSize: SIZES.fontBase,
                          color: COLORS.grey,
                          marginHorizontal: 4,
                        }}
                      >
                        Work item name
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TextInput
                placeholder="Message from submition panel goes here once "
                selectionColor={COLORS.grey}
                underlineColor={COLORS.overlayDivider}
                activeUnderlineColor={COLORS.grey}
                backgroundColor={COLORS.overlayDivider}
                placeholderTextColor={COLORS.white}
                textColor={COLORS.grey}
                autoCapitalize="none"
                style={{
                  height: 50,
                  width: "90%",
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.heading5,
                  paddingHorizontal: 10,
                  alignSelf: "flex-end",
                }}
              />
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.spacer} />

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{
                paddingHorizontal: SIZES.spacing,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "flex-start",
                  marginLeft: -8,
                }}
              >
                <View style={styles.profile}>
                  <Text style={styles.profileText}>GH</Text>
                </View>
                <View style={{ marginLeft: SIZES.base }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: FONTS.regular,
                          fontSize: SIZES.fontBase,
                          color: COLORS.white,
                        }}
                      >
                        Guy Hawkins
                      </Text>
                    </TouchableOpacity>

                    <Text
                      style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.fontBase,
                        color: COLORS.grey,
                        marginHorizontal: 4,
                      }}
                    >
                      left a comment on
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: FONTS.regular,
                          fontSize: SIZES.fontBase,
                          color: COLORS.white,
                        }}
                      >
                        &#123;Task name&#125;
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      marginTop: -10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.fontBase,
                        color: COLORS.grey,
                        marginHorizontal: 4,
                      }}
                    >
                      Now
                    </Text>
                    <View
                      style={{
                        height: 4,
                        width: 4,
                        backgroundColor: COLORS.grey,
                        borderRadius: 100,
                        marginHorizontal: 4,
                      }}
                    />
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: FONTS.regular,
                          fontSize: SIZES.fontBase,
                          color: COLORS.grey,
                        }}
                      >
                        Workflow name
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.fontBase,
                        color: COLORS.grey,
                        marginHorizontal: 4,
                      }}
                    >
                      /
                    </Text>

                    <TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: FONTS.regular,
                          fontSize: SIZES.fontBase,
                          color: COLORS.grey,
                          marginHorizontal: 4,
                        }}
                      >
                        Work item name
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TextInput
                placeholder="Comment goes here"
                selectionColor={COLORS.grey}
                underlineColor={COLORS.overlayDivider}
                activeUnderlineColor={COLORS.grey}
                backgroundColor={COLORS.overlayDivider}
                placeholderTextColor={COLORS.white}
                textColor={COLORS.grey}
                autoCapitalize="none"
                style={{
                  height: 50,
                  width: "90%",
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.heading5,
                  paddingHorizontal: 10,
                  alignSelf: "flex-end",
                }}
              />
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.spacer} />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: SIZES.spacing,
            }}
          >
            <View style={styles.profile}>
              <Text style={styles.profileText}>AR</Text>
            </View>
            <View style={{ marginLeft: SIZES.base }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.fontBase,
                      color: COLORS.white,
                    }}
                  >
                    Alex Robertson
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.fontBase,
                    color: COLORS.grey,
                    marginHorizontal: 4,
                  }}
                >
                  sent back
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.fontBase,
                      color: COLORS.white,
                    }}
                  >
                    &#123;Task name&#125;
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.fontBase,
                    color: COLORS.grey,
                    marginHorizontal: 4,
                  }}
                >
                  with you
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginTop: -10,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.fontBase,
                    color: COLORS.grey,
                    marginHorizontal: 4,
                  }}
                >
                  05 Dec 2022
                </Text>
                <View
                  style={{
                    height: 4,
                    width: 4,
                    backgroundColor: COLORS.grey,
                    borderRadius: 100,
                    marginHorizontal: 4,
                  }}
                />
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.fontBase,
                      color: COLORS.grey,
                    }}
                  >
                    Workflow name
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.fontBase,
                    color: COLORS.grey,
                    marginHorizontal: 4,
                  }}
                >
                  /
                </Text>

                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: FONTS.regular,
                      fontSize: SIZES.fontBase,
                      color: COLORS.grey,
                      marginHorizontal: 4,
                    }}
                  >
                    Work item name
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default NotificationModal;
