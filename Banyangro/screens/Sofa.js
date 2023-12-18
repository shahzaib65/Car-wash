import {View, Text, Image, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors} from '../theme';

export default function Sofa({navigation}) {
    const [carpet, setCarpet] = useState([
        {
          id: "1",
          service1: "Dry Vacuuming",
          "service2": "Removal of accumulated dust particles, dirt ,debris from all surfaces ,corners and , crevices .",
          "service3": "Shampooing",
          "service4": "Form best shampoo application on sofas fabric using the sponge.",
          "service5": "Wet Vacuuming",
          "service6": "Cleaning the shampoo by vacuuming and wiping the water using a microfiber cloth.",
          "service7": "Drying",
          "service8" : "Please allow the sofa to dry completely for 4 - 5 hours under the fan .",
          "service9": "3 seats sofa ",
          "price": " ₹499"
        },
        {
          id: "2",
          service1: "Dry Vacuuming",
          "service2": "Removal of accumulated dust particles, dirt ,debris from all surfaces ,corners and , crevices .",
          "service3": "Shampooing",
          "service4": "Form best shampoo application on sofas fabric using the sponge.",
          "service5": "Wet Vacuuming",
          "service6": "Cleaning the shampoo by vacuuming and wiping the water using a microfiber cloth.",
          "service7": "Drying",
          "service8" : "Please allow the sofa to dry completely for 4 - 5 hours under the fan .",
          "service9": "4 seats sofa",
          "price": " ₹699"
        },
        {
          id: "3",
          title: "Carpet Cleaning",
          service1: "Dry Vacuuming",
          "service2": "Removal of accumulated dust particles, dirt ,debris from all surfaces ,corners and , crevices .",
          "service3": "Shampooing",
          "service4": "Form best shampoo application on sofas fabric using the sponge.",
          "service5": "Wet Vacuuming",
          "service6": "Cleaning the shampoo by vacuuming and wiping the water using a microfiber cloth.",
          "service7": "Drying",
          "service8" : "Please allow the sofa to dry completely for 4 - 5 hours under the fan .",
          "service9": "5 seats sofa",
          "price": " ₹739"
        },
        {
          id: "4",
          title: "Carpet Cleaning",
          service1: "Dry Vacuuming",
          "service2": "Removal of accumulated dust particles, dirt ,debris from all surfaces ,corners and , crevices .",
          "service3": "Shampooing",
          "service4": "Form best shampoo application on sofas fabric using the sponge.",
          "service5": "Wet Vacuuming",
          "service6": "Cleaning the shampoo by vacuuming and wiping the water using a microfiber cloth.",
          "service7": "Drying",
          "service8" : "Please allow the sofa to dry completely for 4 - 5 hours under the fan .",
          "service9": '6 seats sofa ',
          "price": " ₹830"
        },
        {
            id: "5",
            title: "Carpet Cleaning",
            service1: "Dry Vacuuming",
            "service2": "Removal of accumulated dust particles, dirt ,debris from all surfaces ,corners and , crevices .",
            "service3": "Shampooing",
            "service4": "Form best shampoo application on sofas fabric using the sponge.",
            "service5": "Wet Vacuuming",
            "service6": "Cleaning the shampoo by vacuuming and wiping the water using a microfiber cloth.",
            "service7": "Drying",
            "service8" : "Please allow the sofa to dry completely for 4 - 5 hours under the fan .",
            "service9": '7 seats sofa ',
            "price": " ₹999"
          },
       
     
      
        ])
    
    
      return (
        <SafeAreaProvider className=" flex-1 bg-[#F9F9F9]">
        <View className="flex flex-col">
        <View className=" flex flex-row bg-white shadow-gray-300 shadow-2xl justify-between py-2">
                   <Pressable onPress={()=> navigation.navigate('Dashboard')}>
                   <Image
                      className=" w-5 h-5 ml-4 my-2"
                      source={require('../assets/back.png')}
                    />
                   </Pressable>
                    <View className=" flex flex-row w-full -ml-8 justify-center items-center">
                      <Text className=" text-black items-center text-lg font-bold font-Inter">
                     Sofa      
                      </Text>
                    </View>
                  </View>
    
                  <View>
        <Image className=" h-64" source={require('../assets/sofa.jpg')}/>
        </View>
        
        <Text className=" text-black text-xl font-extrabold mx-4 pt-2">
                      Sofa Cleaning
                    </Text>
    
        <ScrollView showsVerticalScrollIndicator={true} className=" mb-96">
          {
            carpet.length > 0 && carpet.map((item,index)=>{
              return (
                <View key={index} className=" mt-2 flex flex-col bg-white">
                    
                    <View className=" flex flex-row justify-between mx-4">
                      <View className=" flex flex-col pb-4">
                      <Text className="  text-black font-extrabold text-base">
                        {item.service9}
                        </Text>
                        <Text className=" text-black font-semibold text-base">{item.service1}:</Text>
                        <Text className=" text-black  font-normal text-sm">
                         {item.service2}
                        </Text>
                        <Text className=" text-black font-semibold text-base">
                        {item.service3}
                        </Text>
                        <Text className=" text-black  font-normal text-base">
                        {item.service4}
                        </Text>
                        <Text className=" text-black font-semibold text-base">
                          {item.service5}
                        </Text>
                        <Text className="  text-black font-normal text-base">
                        {item.service6}
                        </Text>
                        <Text className=" text-black font-semibold text-base">
                          {item.service7}
                        </Text>
                        <Text className="  text-black font-normal text-base">
                        {item.service8}
                        </Text>
                        
    
      <View className=" flex flex-row justify-between">  
                        <Text
                          className=" text-center font-normal text-white pt-2 mt-0  w-auto px-10 rounded-md"
                          style={{backgroundColor: colors.primary}}>
                          Add
                        </Text>
                        <Text className=" font-extrabold text-xl mt-2 text-black text-center">
                          {item.price}
                        </Text>
                      </View>
    
                      </View>
                     
                    </View>
                  </View>
              )
            })
          }
        </ScrollView>
        </View>
          
        </SafeAreaProvider>
      )
}