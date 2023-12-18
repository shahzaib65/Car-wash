import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../theme'


export default function Booking() {
  return (
    <View className=" justify-between flex flex-col h-full w-full  bg-[#F9F9F9]">
  <View className=" flex-1 flex-col">
  <View className=" flex flex-row bg-white shadow-gray-300 shadow-2xl justify-center items-center py-4">
          <Text className=" text-black items-center text-xl font-semibold font-Inter">
            Booking Details
          </Text>
        </View>

   <View className=" flex flex-row mt-3 justify-around mx-2">
   <Text className=" text-center py-1 px-6 font-medium text-base font-Inter rounded" style={{backgroundColor: colors.confirm_bg,color: colors.confirm}}>Confirmed</Text>
   <Text className=" text-center py-1 px-6 font-medium text-base font-Inter rounded" style={{backgroundColor: colors.pending_bg,color: colors.pending}}>Pending</Text>
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
                <Text className=" text-base text-black font-Inter font-semibold">Booking status:</Text>
               <Text className=" text-sm  font-Inter font-normal px-2 rounded text-white" style={{backgroundColor: colors.confirm_bg,color: colors.confirm}}>Confirmed</Text>
                </View>

                <View className=" flex flex-row justify-between px-4 mt-3">
                <Text className=" text-base text-black font-Inter font-semibold">Schedule:</Text>
               <Text className=" text-sm  font-Inter font-normal px-2 rounded text-black" style={{backgroundColor: colors.white}}>10-10-23 4:30 pm</Text>
                </View>

                <View className=" flex flex-row justify-between px-4 mt-3">
                <Text className=" text-base text-black font-Inter font-semibold">Service time:</Text>
               <Text className=" text-sm  font-Inter font-normal px-2 rounded text-black" style={{backgroundColor: colors.white}}>40 mins</Text>
                </View>

                <View className=" flex flex-row justify-between px-4 mt-3">
                <Text className=" text-base text-black font-Inter font-semibold">Charges:</Text>
               <Text className=" text-sm  font-Inter font-normal px-2 rounded text-black" style={{backgroundColor: colors.white}}>₹100</Text>
                </View>

                <View className=" flex flex-row justify-between px-4 mt-3">
                <Text className=" text-base text-black font-Inter font-semibold">Payment status:</Text>
               <Text className=" text-sm  font-Inter font-normal px-2 rounded text-black" style={{backgroundColor: colors.pending_bg ,color: colors.pending}}>Unpaid</Text>
                </View>


              </View>

      </ScrollView>


  </View>
    </View>
  )
}