import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodyPart } from "../api/exerciseDB";
import { ScrollView } from "react-native-virtualized-view";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "@expo/vector-icons/AntDesign";
import ExerciseList from "../components/ExerciseList";

const exercises = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log("item", item);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bodypart) => {
    let data = await fetchExercisesByBodyPart(bodypart);
  };
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />

      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 mx-4 absolute flex justify-center items-center  rounded-full"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <AntDesign name="caretleft" size={24} color="white" />
      </TouchableOpacity>

      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700"
        >
          {item.name} exercises
        </Text>

        <View className="mb-20">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
};

export default exercises;
