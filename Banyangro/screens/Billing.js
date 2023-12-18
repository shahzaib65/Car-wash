import { View, Text,Pressable,Image,ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../theme'

export default function Billing({navigation}) {
  return (
    <View className=" flex-1 bg-[#F9F9F9]">
    <View className="flex flex-col">
      <View className=" flex flex-row bg-white shadow-gray-300 shadow-2xl justify-between py-2">
        <Pressable onPress={() => navigation.navigate('Dashboard')}>
          <Image
            className=" w-5 h-5 ml-4 my-2"
            source={require('../assets/back.png')}
          />
        </Pressable>
        <View className=" flex flex-row w-full -ml-8 justify-center items-center">
          <Text className=" text-black items-center text-lg font-bold font-Inter">
            Billing Info
          </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={true}>
                <View
                className=" flex flex-col  bg-white py-4 my-2">
                <View className=" flex flex-row justify-between px-4">
                <Text className=" text-base text-black font-Inter font-semibold">Book id:</Text>
               <Text className=" text-sm text-black font-Inter font-normal">1232452572862956729</Text>
                </View>


                <View className=" flex flex-row justify-between px-4 mt-3">
                <Text className=" text-base text-black font-Inter font-semibold">Service:</Text>
               <Text className=" text-sm text-black font-Inter font-normal">Normal wash</Text>
                </View>

                <View className=" flex flex-row justify-between px-4 mt-3">
                <Text className=" text-base text-black font-Inter font-semibold">Service status:</Text>
               <Text className=" text-sm  font-Inter font-normal px-2 rounded text-white" style={{backgroundColor: colors.primary}}>Completed</Text>
                </View>


                <View className=" flex flex-row justify-between px-4 mt-3">
                <Text className=" text-base text-black font-Inter font-semibold">Status:</Text>
               <Text className=" text-sm  font-Inter font-normal px-2 rounded text-black" style={{backgroundColor: colors.white}}>Paid</Text>
                </View>

                <View className=" flex flex-row justify-between px-4 mt-3">
                <Text className=" text-base text-black font-Inter font-semibold">Charges:</Text>
               <Text className=" text-sm  font-Inter font-normal px-2 rounded text-black" style={{backgroundColor: colors.white}}>₹100</Text>
                </View>

              </View>

           

      </ScrollView>
    </View>
  </View>
  )
}