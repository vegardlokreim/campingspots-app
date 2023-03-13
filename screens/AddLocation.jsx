import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import React, {
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";

const AddLocation = () => {
  const navigation = useNavigation();
  const [markerCoords, setMarkerCoords] = useState(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0272, // 0.0272 degrees is approximately 3km
    longitudeDelta:
      0.0272 *
      (Dimensions.get("window").width /
        Dimensions.get("window").height),
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    (async () => {
      let { status } =
        await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync(
        {}
      );
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0272, // 0.0272 degrees is approximately 3km
        longitudeDelta:
          0.0272 *
          (Dimensions.get("window").width /
            Dimensions.get("window").height),
      });
    })();
  }, []);

  const handleSearch = async (data, details) => {
    const lat = details.geometry.location.lat;
    const lng = details.geometry.location.lng;
    setMarkerCoords({ latitude: lat, longitude: lng });
    setRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0272, // 0.0272 degrees is approximately 3km
      longitudeDelta:
        0.0272 *
        (Dimensions.get("window").width /
          Dimensions.get("window").height),
    });
  };

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setMarkerCoords(coordinate);
  };

  const nextPage = () => {
    console.log("Next");
    navigation.navigate("Step2", { markerCoords });
  };

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
          <Text>Neste</Text>
        </TouchableOpacity>
      </View>

      <View className="mx-4 my-4 z-50 rounded-3xl">
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={handleSearch}
          styles={{
            container: {
              flex: 0,
              position: "absolute",
              top: -20,
              left: 0,
              right: 0,
              zIndex: 999,
            },
            textInputContainer: {
              backgroundColor: "rgba(0,0,0,0)",
              borderTopWidth: 0,
              borderBottomWidth: 0,
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              paddingLeft: 20,
              paddingRight: 20,
              height: 60,
              color: "#5d5d5d",
              fontSize: 18,
            },
            predefinedPlacesDescription: {
              color: "#1faadb",
            },
          }}
          fetchDetails={true}
          query={{
            key: "AIzaSyAL22ZWpzZAq18PzIO0rCKH0Rbol6tnXZo",
            language: "no",
          }}
        />
      </View>

      <View className="mx-4 mt-[40px] mb-2">
        <MapView
          style={{
            height: "84%",
            zIndex: -1,
            borderRadius: 10,
          }}
          initialRegion={region}
          region={region}
          onPress={handleMapPress}
        >
          {markerCoords && (
            <Marker coordinate={markerCoords} />
          )}
        </MapView>
        <View className=" mt-4 flex-1">
          {markerCoords && (
            <TouchableOpacity
              className="bg-[#497F78] p-4 rounded-md"
              onPress={nextPage}
            >
              <Text className="text-center text-white font-semibold">
                Neste
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddLocation;
