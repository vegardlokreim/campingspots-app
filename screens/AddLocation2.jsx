import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, {
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import { ArrowSmallLeftIcon } from "react-native-heroicons/outline";
import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";

const AddLocation2 = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [selectedImages, setSelectedImages] = useState([]);

  const markerCoords = useRoute().params.markerCoords;

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={console.log("Hello")}>
        <Text>Select File</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddLocation2;
