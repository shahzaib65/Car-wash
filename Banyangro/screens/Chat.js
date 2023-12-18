import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../theme'


export default function Chat() {
  return (
    <View className="justify-between flex flex-col h-full w-full  bg-[#F9F9F9]">
    <View className=" flex flex-row bg-white shadow-gray-300 shadow-2xl justify-center items-center py-4">
          <Text className=" text-black items-center text-xl font-semibold font-Inter">
            Chat
          </Text>
        </View>

  <View className=" flex justify-center items-center">
  <Text>Chat feature we will finalized</Text>

  </View>

    </View>
  )
}