import {View, Text, Image, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors} from '../theme';

export default function CarDetailing({navigation}) {

    const [detailing, setCarDetailing] = useState([
        {
          id: "1",
          title: "HatchBack",
          "time": "120 mins",
          "including_item1": "✓ Door step",
          "including_item2": "✓ Car Vaccum",
          "including_item3": "✓ Car dusting",
          "including_item4": "✓ Inner Roof Cleaning",
          "including_item5": "✓ Seat Cleaning",
          "including_item6": "✓ Inner Digi Cleaning",
          "including_item7": "✓ Inner Doors Cleaning",
          "including_item8": "✓ Foot mate cleaning",
          "including_item9": "✓ Dashboard Polish",
          "including_item10": "✓ Interior Cleaning",
          "including_item11": "✓ High Pressure Wash",
          "including_item12": "✓ Car Shampoo",
          "including_item13": "✓ Tyre Polish",
          "including_item14": "✓ Glass Cleaning",
          "including_item15": "✓ Car Rubbing",
          "including_item16": "✓ Car Polish",
          "including_item17": "✓ Windshield Cleaning",
          "discount_price": "2499",
          "price": "999"
        },
        {
            id: "2",
            title: "SUV",
            "time": "180 mins",
            "including_item1": "✓ Door step",
            "including_item2": "✓ Car Vaccum",
            "including_item3": "✓ Car dusting",
            "including_item4": "✓ Inner Roof Cleaning",
            "including_item5": "✓ Seat Cleaning",
            "including_item6": "✓ Inner Digi Cleaning",
            "including_item7": "✓ Inner Doors Cleaning",
            "including_item8": "✓ Foot mate cleaning",
            "including_item9": "✓ Dashboard Polish",
            "including_item10": "✓ Interior Cleaning",
            "including_item11": "✓ High Pressure Wash",
            "including_item12": "✓ Car Shampoo",
            "including_item13": "✓ Tyre Polish",
            "including_item14": "✓ Glass Cleaning",
            "including_item15": "✓ Car Rubbing",
            "including_item16": "✓ Car Polish",
            "including_item17": "✓ Windshield Cleaning",
            "discount_price": "4499",
            "price": "₹1799"
        },
        {
            id: "3",
            title: "SEDAN",
            "time": "150 mins",
            "including_item1": "✓ Door step",
            "including_item2": "✓ Car Vaccum",
            "including_item3": "✓ Car dusting",
            "including_item4": "✓ Inner Roof Cleaning",
            "including_item5": "✓ Seat Cleaning",
            "including_item6": "✓ Inner Digi Cleaning",
            "including_item7": "✓ Inner Doors Cleaning",
            "including_item8": "✓ Foot mate cleaning",
            "including_item9": "✓ Dashboard Polish",
            "including_item10": "✓ Interior Cleaning",
            "including_item11": "✓ High Pressure Wash",
            "including_item12": "✓ Car Shampoo",
            "including_item13": "✓ Tyre Polish",
            "including_item14": "✓ Glass Cleaning",
            "including_item15": "✓ Car Rubbing",
            "including_item16": "✓ Car Polish",
            "including_item17": "✓ Windshield Cleaning",
            "discount_price": "3248",
            "price": "₹1299"
        }
        ])
    return (
        <SafeAreaProvider className=" flex-1 bg-[#F9F9F9]">
          <View className=" flex flex-col">
            <View className=" flex flex-row bg-white shadow-gray-300 shadow-2xl justify-between py-2">
             <Pressable onPress={()=> navigation.navigate('Dashboard')}>
             <Image
                className=" w-5 h-5 ml-4 my-2"
                source={require('../assets/back.png')}
              />
             </Pressable>
    
              <View className=" flex flex-row w-full -ml-8 justify-center items-center">
                <Text className=" text-black items-center text-lg font-bold font-Inter">
                  Car Detailing      
                </Text>
              </View>
            </View>

            <View>
        <Image className=" h-64" source={require('../assets/detailing.jpg')}/>
        </View>
           
        <ScrollView showsVerticalScrollIndicator={true} className=" mb-24">
      {detailing.length > 0 && detailing.map((item,index) =>{
        return(
          <View key={index} className=" mt-2 flex flex-col bg-white">

          <View className="flex flex-row justify-between mx-3">
              <Text className=" text-black text-xl font-extrabold mx-0 pt-2"> {item.title}
              </Text>
              <Text className=" text-green-600 font-semibold text-base font-Inter pt-[5px] mr-3">
                60% off
              </Text>
            </View>
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
                  {item.including_item5}
                  </Text>
                  <Text className=" text-black font-normal text-base">
                  {item.including_item6}
                  </Text>
                  <Text className=" text-black font-normal text-base">
                  {item.including_item7}
                  </Text>
                  <Text className=" text-black font-normal text-base">
                  {item.including_item8}
                  </Text>
                  <Text className=" text-black font-normal text-base">
                  {item.including_item9}
                  </Text>
                  <Text className=" text-black font-normal text-base">
                  {item.including_item10}
                  </Text>
                  <Text className=" text-black font-normal text-base">
                  {item.including_item11}
                  </Text>
                  <Text className=" text-black font-normal text-base">
                  {item.including_item12}
                  </Text>
                  <Text className=" text-black font-normal text-base">
                  {item.including_item13}
                  </Text>
                  <Text className=" text-black font-normal text-base">
                  {item.including_item14}
                  </Text>
                  <Text className=" text-black font-normal text-base">
                  {item.including_item15}
                  </Text>
                  <Text className=" text-black font-normal text-base">
                  {item.including_item16}
                  </Text>
                  <Text className=" text-black font-normal text-base">
                  {item.including_item17}
                  </Text>

                  <View className="flex flex-row w-full mt-2">
                  <Text className=" text-black font-extrabold text-xl">
                    Price:
                  </Text>
                  <Text className="font-medium text-sm mt-[7px] text-red-800 text-center line-through">
                    {item.discount_price}
                  </Text>
                  <Text className=" font-extrabold text-xl text-black text-center ml-1 mt-[2px]">
                    {item.price}
                  </Text>
                </View>

                </View>
                <View>
                  <Image
                    className=" rounded-tl-md rounded-tr-md w-24 h-20"
                    source={require('../assets/detailing.jpg')}
                  />
                  <Text
                    className=" text-center font-normal text-white py-1 rounded-bl-md rounded-br-md"
                    style={{backgroundColor: colors.primary}}>
                    Add
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