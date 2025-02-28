import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import sliderImages from "../constants/index";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

const ImageSlider = () => {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      itemWidth={wp(100) - 70}
      firstItem={1}
      autoplayInterval={4000}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
};

const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain" }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};

export default ImageSlider;
