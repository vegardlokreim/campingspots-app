import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  HeartIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

const AddLocation = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="mx-4 mt-4 pb-5 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <ArrowSmallLeftIcon color="#497F78" size={30} />
        </TouchableOpacity>

        <Text className="flex-1 text-center font-medium text-2xl text-gray-700">
          Tekst
        </Text>
        <TouchableOpacity>
          <ArrowSmallRightIcon color="#497F78" size={30} />
        </TouchableOpacity>
      </View>

      <View className="mx-4 mb-2 overflow-hidden rounded-2xl">
        <MapView
          className="h-[240px]"
          initialRegion={{
            latitude: 60.391262,
            longitude: 5.322054,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        ></MapView>
      </View>

      {/* Felter */}
      <View className="mx-4 mt-4">
        <TextInput
          placeholder="Test"
          className="p-3 rounded-2xl border border-gray-400"
        />
        <TextInput
          placeholder="Test"
          multiline
          className="mt-4 p-3 rounded-2xl border border-gray-400 h-[200px]"
        />
      </View>
    </SafeAreaView>
  );
};

export default AddLocation;
