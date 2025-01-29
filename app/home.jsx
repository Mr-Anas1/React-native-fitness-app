import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

const home = () => {
  return (
    <SafeAreaView className="flex-1 flex bg-white space-y-5" edges={["top"]}>
      <StatusBar style="dark" />

      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>

          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
          <Image
            style={{ height: hp(6), width: hp(6) }}
            source={require("../assets/avatar.png")}
            className="rounded-full"
          />

          <View
            style={{ height: hp(5.5), width: hp(5.5) }}
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default home;
