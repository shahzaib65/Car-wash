import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors} from '../theme';

export default function FoamCarwash({navigation}) {
  return (
    <SafeAreaProvider className=" flex-1 bg-[#F9F9F9]">
      <View className=" flex flex-col">
        <View className=" flex flex-row bg-white shadow-gray-300 shadow-2xl justify-between py-2">
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Image
              className=" w-5 h-5 ml-4 my-2"
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>

          <View className=" flex flex-row w-full -ml-8 justify-center items-center">
            <Text className=" text-black items-center text-lg font-bold font-Inter">
              Foam Wash
            </Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={true}>
          <View>
            <Image
              className=" h-64"
              source={require('../assets/image10.jpeg')}
            />
          </View>

          <View className=" mt-2 flex flex-col bg-white">
            <View className="flex flex-row justify-between mx-3">
              <Text className=" text-black text-xl font-extrabold mx-0 pt-2">
                {' '}
                Foam Car Wash
              </Text>
              <Text className=" text-green-600 font-semibold text-base font-Inter pt-[5px] mr-3">
                60% off
              </Text>
            </View>
            <View className=" flex flex-row justify-between mx-4">
              <View className=" flex flex-col pb-4">
                <Text className=" text-black font-bold text-base">
                  Time: 40min
                </Text>
                <Text className=" text-black font-normal text-base">
                  ✓ Door Step
                </Text>
                <Text className=" text-black font-normal text-base">
                  ✓ Car Vaccum
                </Text>
                <Text className=" text-black font-normal text-base">
                  ✓ Car dusting
                </Text>
                <Text className=" text-black font-normal text-base">
                  ✓ Car dusting
                </Text>
                <Text className=" text-black font-normal text-base">
                  ✓ Interior Cleaning
                </Text>
                <Text className=" text-black font-normal text-base">
                  ✓ High Pressure Wash
                </Text>
                <Text className=" text-black font-normal text-base">
                  ✓ Car Shampoo
                </Text>
                <Text className=" text-black font-normal text-base">
                  ✓ Tyre Cleaning
                </Text>
                <Text className=" text-black font-normal text-base">
                  ✓ Glass Cleaning
                </Text>

                <View className="flex flex-row w-full mt-2">
                  <Text className=" text-black font-extrabold text-xl">
                    Price:{' '}
                  </Text>
                  <Text className="font-medium text-sm mt-[8px] text-red-800 text-center line-through">
                    ₹876
                  </Text>
                  <Text className=" font-extrabold text-xl text-black text-center ml-1 mt-1">
                    ₹350
                  </Text>
                </View>
              </View>
              <View>
                <Image
                  className=" rounded-tl-md rounded-tr-md w-24 h-20"
                  source={require('../assets/image10.jpeg')}
                />
                <Text
                  className=" text-center font-normal text-white py-1 rounded-bl-md rounded-br-md"
                  style={{backgroundColor: colors.primary}}>
                  Add
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}
