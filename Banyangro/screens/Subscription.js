import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {colors} from '../theme';
export default function Subscription() {

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonIndex) => {
      setSelectedButton(buttonIndex);
    };


  return (
    <SafeAreaView className="flex-1">
   <View className=" flex flex-col">
    <View className=" w-full h-auto shadow-inner bg-white">
  <View className="justify-center flex flex-row items-center py-3">
  <Text className=" items-center text-center font-bold text-xl text-black">Subscription</Text>
  </View>
    </View>


    <View className="flex flex-row justify-center items-center mt-2">
    <ScrollView horizontal={true}>

    <TouchableOpacity className=" px-4 py-2 mx-2 border rounded"
        style={{
          borderColor: selectedButton === 1 ? colors.primary : 'black',
          backgroundColor: selectedButton === 1 ? colors.primary : 'white',
          
        }}
        onPress={() => handleButtonClick(1)}>
        <Text className=" text-sm font-bold font-Inter" style={{color: selectedButton === 1 ? 'white': 'black'}}>Normal Wash</Text>
      </TouchableOpacity>

      <TouchableOpacity className=" px-4 py-2 mx-2 border rounded"
        style={{
          borderColor: selectedButton === 2 ? colors.primary : 'black',
          backgroundColor: selectedButton === 2 ? colors.primary : 'white',
          
        }}
        onPress={() => handleButtonClick(2)}>
        <Text className=" text-sm font-bold font-Inter" style={{color: selectedButton === 2 ? 'white': 'black'}}>Foam Wash</Text>
      </TouchableOpacity>

      <TouchableOpacity className=" px-4 py-2 mx-2 border rounded"
        style={{
          borderColor: selectedButton === 3 ? colors.primary : 'black',
          backgroundColor: selectedButton === 3 ? colors.primary : 'white',
          
        }}
        onPress={() => handleButtonClick(3)}>
        <Text className=" text-sm font-bold font-Inter" style={{color: selectedButton === 3 ? 'white': 'black'}}>Normal wash + Full detailing</Text>
      </TouchableOpacity>
     
      <TouchableOpacity className=" px-4 py-2 mx-2 border rounded"
        style={{
          borderColor: selectedButton === 4 ? colors.primary : 'black',
          backgroundColor: selectedButton === 4 ? colors.primary : 'white',
          
        }}
        onPress={() => handleButtonClick(4)}>
        <Text className=" text-sm font-bold font-Inter" style={{color: selectedButton === 4 ? 'white': 'black'}}>Foam wash + Full detailing</Text>
      </TouchableOpacity>


</ScrollView>
    </View>

    <View className=" h-auto mt-2 flex flex-co rounded border border-[#00000030] bg-white mx-2">
<View className=" flex flex-row justify-between">
<View className=" flex flex-col">
<Text className=" text-black text-lg font-bold font-Inter ml-2 mt-2">Standard-1</Text>
<Text className=" text-black text-sm font-medium font-Inter ml-2 mt-0">You drive it , We Shine it</Text>
</View>
<Text className=" text-white mt-4 px-3 py-1 h-7 mr-2 rounded-full font-normal font-Inter bg-black">Subscribe</Text>

</View>
  <View className=" w-full h-[1px] bg-black mx-0 mt-2"/>
  
<View className=" flex flex-row">
<Text className=" font-bold text-black text-base font-Inter ml-2 mt-2">Monthly package:</Text>
<Text className=" text-black font-medium font-Inter mt-[10px] text-sm"> 4 wash one in a week</Text>
</View>

<View className=" flex flex-row">
<Text className=" font-bold text-black text-base font-Inter ml-2 mt-0">Duration:</Text>
<Text className=" text-black font-medium font-Inter mt-[2px] text-sm">1 month</Text>
</View>

   <Text className=" text-black text-sm font-Inter mt-0 font-medium ml-2">• Interior vaccum</Text>
<Text className=" text-black text-sm font-Inter mt-0 font-medium ml-2">•Exterior pressure wash with shampoo</Text>
<Text className=" text-black text-sm font-Inter mt-0 font-medium ml-2">•Tyre Cleaning</Text>
 <View className=" flex flex-row py-2">
 <Text className=" text-black text-[18px] font-Inter mt-0 font-bold ml-2">₹:</Text>
 <Text className="line-through text-black font-Inter mt-[5px] ml-1 font-normal text-xs">1000</Text>
 <Text className=" text-black text-base font-Inter mt-0 font-bold ml-1">900</Text>
 </View>
    </View>
   </View>
    </SafeAreaView>
  )
}