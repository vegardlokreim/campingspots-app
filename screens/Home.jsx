import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React, {
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  BellAlertIcon,
  MagnifyingGlassIcon,
  MapIcon,
} from "react-native-heroicons/outline";
import LocationCard from "../components/LocationCard";

import img1 from "../assets/img_card1.jpg";
import img2 from "../assets/img_card2.jpg";
import img3 from "../assets/img_card3.jpg";
import img4 from "../assets/img_card4.jpg";
import img5 from "../assets/img_card5.jpg";
import axios from "axios";

const Home = () => {
  const interval = 290; // Adjust this value to set the distance between cards
  const navigation = useNavigation();

  const images = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
  };

  const [locations, setLocations] = useState(null);

  useEffect(() => {
    const data = axios
      .get("http://34.125.71.166:4000/destination")
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        {/* First row */}
        <View className="mx-4 mt-4 flex-row justify-between items-center">
          <View>
            <Text className="uppercase text-gray-400 font-bold text-xs">
              Good morning
            </Text>
            <View className="flex-row items-center space-x-2">
              <Text className="text-[#497F78] font-bold text-xl">
                Bergen, Norway
              </Text>
              <ChevronDownIcon color="#497F78" size={15} />
            </View>
          </View>
          <BellAlertIcon color="#497F78" size={30} />
        </View>

        {/* Second Row - Search input*/}
        <View className="mx-4 mt-4 p-2 flex-row space-x-2 border border-[#b1c1bf] rounded-3xl">
          <MagnifyingGlassIcon color="#497F78" size={20} />
          <TextInput
            className="flex-1"
            placeholder="Finn ditt neste eventyr"
          />
        </View>

        {/* Thrir Row - Category buttons */}
        <View className="mx-4 mt-4">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-2"
          >
            <TouchableOpacity className="px-4 py-2 bg-[#497F78] rounded-full">
              <Text className="text-white font-bold">
                Alle
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 border border-[#497F78] rounded-full">
              <Text className="text-[#497F78] font-bold">
                Badeplass
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 border border-[#497F78] rounded-full">
              <Text className="text-[#497F78] font-bold">
                Hengekøye
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 border border-[#497F78] rounded-full">
              <Text className="text-[#497F78] font-bold">
                Topptur
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 border border-[#497F78] rounded-full">
              <Text className="text-[#497F78] font-bold">
                Telt
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 border border-[#497F78] rounded-full">
              <Text className="text-[#497F78] font-bold">
                Tursti
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 border border-[#497F78] rounded-full">
              <Text className="text-[#497F78] font-bold">
                Utsikt
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Fourth Row - Favorite locatons */}
        <View className="mx-4 mt-4 flex-row justify-between">
          {/* Left side */}
          <View className="flex-row items-center space-x-2">
            <MapIcon color="#EC924F" size={18} />
            <Text className="font-semibold text-gray-400 text-md">
              Favoritter
            </Text>
          </View>
          {/* Right side */}
          <View className="flex-row items-center space-x-2">
            <Text className="font-semibold text-gray-400 text-md">
              Se alle
            </Text>
            <ChevronRightIcon
              color="rgb(156,163,175)"
              size={12}
            />
          </View>
        </View>

        {/* Fifth row - Favorite location cards */}
        <View className="mx-4 mt-4">
          <ScrollView
            horizontal
            snapToInterval={interval}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            className="space-x-5"
          >
            {locations &&
              locations.map((loc) => (
                <View key={loc._id}>
                  <LocationCard
                    src={loc.url}
                    title={loc.title}
                    area="Bergen, Vestaland"
                    id={loc._id}
                  />
                </View>
              ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
