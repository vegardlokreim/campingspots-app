import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import img1 from "../assets/img_card1.jpg";
import { MapPinIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const LocationCard = ({
  src = "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  title,
  area,
  id,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Location", { id });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        className="h-[150px] w-[270px] object-cover rounded-t-3xl "
        source={{ uri: src }}
      />
      <View className="p-4 border-b border-l border-r border-gray-300 rounded-b-2xl">
        <Text className="text-xl font-medium text-gray-800">
          {title}
        </Text>
        <View className="mt-2 flex-row items-center space-x-1">
          <MapPinIcon color="#FC5252" size={15} />
          <Text className="uppercase text-gray-400 font-bold text-[12px]">
            {area}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;
