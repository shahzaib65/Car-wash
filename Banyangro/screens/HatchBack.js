import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors} from '../theme';

export default function HatchBack({navigation}) {

  const [hatch, setHatch] = useState([
  {
    id: "1",
    title: "Only exterior wash",
    "time": "30 mins",
    "including_item1": "✓ Door step",
    "including_item2": "✓ High Pressure wash",
    "including_item3": "✓ Car shampoo",
    "including_item4": "✓ Tyre Cleaning",
    "price": " ₹ 99"
  },
  {
    id: "2",
    title: "interior + exterior ",
    "time": "40 mins",
    "including_item1": "✓ Door step",
    "including_item2": "✓ Car Vacuum",
    "including_item3": "✓ Dusting",
    "including_item4": "✓ Tyre Cleaning",
    "price": " ₹ 239"
  },
  {
    id: "3",
    title: "interior plus exterior Fome wash ",
    "time": "55 mins",
    "including_item1": "✓ Door step",
    "including_item2": "✓ Interior vacuum",
    "including_item3": "✓ Dashboard Polish",
    "including_item4": "✓ Interior dusting",
    "including_item5": "✓ High pressure wash",
    "including_item6": "✓ Tyre polish",
    "including_item7": "✓ Foam Wash",
    "including_item8": "✓ Glass Cleaning",
    "price": " ₹ 299"
  },
  {
    id: "4",
    title: "INTERIOR CLEANING only ",
    "time": "30 mins",
    "including_item1": "✓ Door step",
    "including_item2": "✓ Dusting",
    "including_item3": "✓ Car vacuum",
    "including_item4": "✓ Door cleaning",
    "including_item5": "✓ seat cleaning",
    "including_item6": "✓ Foot mate Cleaning",
    "price": " ₹ 139"
  },
  {
    id: "5",
    title: "Exterior deep cleaning ",
    "time": "120 mins",
    "including_item1": "✓ Door step",
    "including_item2": "✓ Shampoo Wash ",
    "including_item3": "✓ Full body rubbing",
    "including_item4": "✓ Polishing",
    "including_item5": "✓ Tyre polish",
    "including_item6": "✓ Glass cleaning",
    "price": " ₹ 599"
  },
  {
    id: "6",
    title: "Interior Deep + Cleaning   ",
    "time": "60 mins",
    "including_item1": "✓ Door step",
    "including_item2": "✓ Inner roof cleaning",
    "including_item3": "✓ Dashboard polish",
    "including_item4": "✓ Digi Cleaning",
    "including_item5": "✓ Seat Cleaning",
    "including_item6": "✓ Seat Belt Cleaning",
    "including_item7": "✓ Foot Mate Cleaning ",
    "including_item8": "✓ Inner Door Cleaning",
    "price": " ₹ 450"
  },

  ])

  return (
    <SafeAreaProvider className=" flex-1 bg-[#F9F9F9]">
      <View className=" flex flex-col">
        <View className=" flex flex-row bg-white shadow-gray-300 shadow-2xl justify-between py-2">
         <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')}>
         <Image
            className=" w-5 h-5 ml-4 my-2"
            source={require('../assets/back.png')}
          />
         </TouchableOpacity>

          <View className=" flex flex-row w-full -ml-8 justify-center items-center">
            <Text className=" text-black items-center text-lg font-bold font-Inter">
              Hatch Back
            </Text>
          </View>
        </View>
       
    <ScrollView showsVerticalScrollIndicator={true} className=" mb-24">
  {hatch.length > 0 && hatch.map((item,index) =>{
    return(
      <View key={index} className=" mt-2 flex flex-col bg-white">
          <Text className=" text-black text-xl font-extrabold mx-4 pt-2">
            {item.title}
          </Text>
          <View className=" flex flex-row justify-between mx-4">
            <View className=" flex flex-col pb-4">
              <Text className=" text-black font-bold text-base">Time: {item.time}</Text>
              <Text className=" text-black font-normal text-base">
               {item.including_item1}
              </Text>
              <Text className=" text-black font-normal text-base">
              {item.including_item2}
              </Text>
              <Text className=" text-black font-normal text-base">
              {item.including_item3}
              </Text>
              <Text className=" text-black font-normal text-base">
                {item.including_item4}
              </Text>
              <Text className=" text-black font-normal text-base">
                {' '}
                ✓ Door step{' '}
              </Text>
            </View>
            <View>
              <Image
                className=" rounded-tl-md rounded-tr-md w-24 h-20"
                source={require('../assets/image7.jpeg')}
              />
              <Text
                className=" text-center font-normal text-white py-1 rounded-bl-md rounded-br-md"
                style={{backgroundColor: colors.primary}}>
                Add
              </Text>
              <Text className=" font-extrabold text-xl mt-2 text-black text-center">
                {item.price}
              </Text>
            </View>
          </View>
        </View>
    )
  })}
    </ScrollView>


        
      </View>
    </SafeAreaProvider>
  );
}
