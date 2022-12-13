import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

const CameraScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Camera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
      style={{ width: "100%", height: "100%", flex: 1 }}
    >
      <TouchableOpacity onPress={snap}>
        <View style={{ width: "100%", height: "100%", zIndex: 999 }} />
      </TouchableOpacity>
    </Camera>
  );
};

export default CameraScreen;
