import {View, Text,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
export default function Profile() {
    const navigation = useNavigation();
  return (
    <View className=" justify-between flex flex-col h-full w-full  bg-[#F9F9F9]">
      <View className=" flex-1 flex-col">
        <View className=" flex flex-row bg-white shadow-gray-300 shadow-2xl justify-center items-center py-4">
          <Text className=" text-black items-center text-xl font-semibold font-Inter">
            Profile
          </Text>
        </View>

        <View className=" flex flex-col">
          <TouchableOpacity onPress={()=> {navigation.navigate('Account')}} className=" flex flex-row justify-between shadow p-3 rounded-xl mb-5 mx-7 mt-3 border bg-white border-black">
            <Text className="font-Interfont-normal text-base text-black mt-1">
              Account
            </Text>
            <MaterialCommunityIcons
              className=" items-center"
              name="chevron-right"
              color={colors.primary}
              size={30}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> {navigation.navigate('Bill')}} className=" flex flex-row justify-between shadow p-3 rounded-xl mb-5 mx-7 mt-0 border bg-white border-black">
            <Text className="font-Interfont-normal text-base text-black mt-1">
            Bills History
            </Text>
            <MaterialCommunityIcons
              className=" items-center"
              name="chevron-right"
              color={colors.primary}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className=" flex flex-row justify-center items-center p-3 rounded-xl mb-5 mx-7 mt-0 bg-[#ff914d]">
          <Text
            className="font-Inter font-normal text-base text-white">
            Signout
          </Text>
        </View>

        <View className=" flex flex-row justify-center items-center p-3 rounded-xl mb-5 mx-7 mt-0 bg-[#ff914d]">
          <Text
            className="font-Inter font-normal text-base text-white">
            Delete account
          </Text>
        </View>

    </View>
  );
}
