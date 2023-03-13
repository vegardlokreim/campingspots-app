import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import React, {
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import axios from "axios";

import {
  ArrowSmallLeftIcon,
  BellAlertIcon,
  MapIcon,
} from "react-native-heroicons/outline";
import MapView, { Marker } from "react-native-maps";

const Location = () => {
  const navigation = useNavigation();
  const id = useRoute().params.id;
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const loc = axios
      .get(`http://34.125.71.166:4000/destination/${id}`)
      .then((response) => setLocation(response.data));
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  if (!location) {
    return <ActivityIndicator />;
  }

  if (!location.url) {
    location.url =
      "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  }
  return (
    <SafeAreaView>
      <View className="mx-4 mt-4 pb-5 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <ArrowSmallLeftIcon color="#497F78" size={30} />
        </TouchableOpacity>

        <Text className="flex-1 text-center font-medium text-2xl text-gray-700">
          {location.title}
        </Text>
        <BellAlertIcon color="#497F78" size={30} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image row */}
        <View className="mx-4 mt-4">
          <Image
            source={{
              uri: location.url,
            }}
            className="h-[30vh] w-[100%] rounded-lg "
          />
        </View>
        <View className="mx-4 mt-4">
          <Text className="text-2xl font-medium text-gray-700">
            {location.title}
          </Text>
          <Text className=" text-[16px] leading-5 font-md text-gray-600">
            {location.description}
          </Text>
        </View>
        <View className="mx-4 mt-8 flex-row items-center justify-between">
          <Text className=" text-[20px] leading-5 font-medium text-gray-600">
            Kart
          </Text>
          <View className="flex-row space-x-2">
            <MapIcon color="#EC924F" size={18} />
            <Text className="text-sm text-gray-600">
              Åpne i kart
            </Text>
          </View>
        </View>
        <View className="mx-4 mt-4 mb-20 rounded-lg overflow-hidden">
          <MapView
            className="h-[240px]"
            initialRegion={{
              latitude: location.lat,
              longitude: location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            scrollEnabled={false}
            zoomEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              coordinate={{
                latitude: location.lat,
                longitude: location.lng,
              }}
              title={location.title}
            />
          </MapView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Location;
