import {View, Text, Image, ScrollView, TextInput,TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {colors} from '../theme';
import VideoPlayer from 'react-native-video-player';
import {AirbnbRating} from "react-native-ratings"
import {useNavigation} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function HomeScreen() {

  const navigation = useNavigation();

  const images = [
    require('../assets/slider1.jpeg'),
    require('../assets/slider2.jpeg'),
    require('../assets/slider3.jpeg'),
    require('../assets/slider4.jpeg'),
  ];

  const [services, setServices] = useState([
    {
      id: '1',
      path: require('../assets/wash.jpg'),
      title: 'Normal wash',
    },
    {
      id: '2',
      path: require('../assets/carpet.jpg'),
      title: 'Carpet',
    },
    {
      id: '3',
      path: require('../assets/sofa.jpg'),
      title: 'Sofa',
    },
    {
      id: '4',
      path: require('../assets/detailing.jpg'),
      title: 'Detailing',
    },
    {
      id: '5',
      path: require('../assets/image10.jpeg'),
      title: 'Foam Wash',
    }
  ]);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Akash kumar',
      rating: 5,
    },
    {
      id: 2,
      name: 'Ragav',
      rating: 5,
    },
    {
      id: 3,
      name: 'Aditya',
      rating: 5,
    },

    {
      id: 3,
      name: 'Nafees',
      rating: 5,
    },
  ]);

  return (
    <SafeAreaProvider className=" flex-1 bg-[#F9F9F9]">
    <ScrollView
    showsVerticalScrollIndicator={true}>
      <View className="flex flex-col">

   <View className=" flex flex-col bg-white mt-2 mb-2 pb-2">
   <Text className="font-semibold font-Inter text-base mx-4 mt-2" style={{color: colors.gray}}>HELLO SHAHZAIB 👋</Text>
   <Text className=" font-extrabold text-2xl mx-3 font-Inter" style={{color: colors.looking}}>What you are looking for today</Text>
  <View className=" mx-3 h-10 rounded-md border border-black mt-2 flex flex-row justify-between items-center px-2">
  <TextInput className=" text-start"  placeholder='Please Search Here'/>
  <Image className="w-5 h-5 items-center" source={require("../assets/search.png")}/>
  </View>
   </View>
        <View className=" flex flex-col">
        
          <View className=" flex flex-col bg-white h-auto  mb-2 pb-2 shadow-inner">
            <Text className=" mx-5 my-1 text-black font-semibold font-Inter text-xl">
              Cars
            </Text>
            <View className=" flex flex-row justify-around mx-0 mt-2">
              <Pressable onPress={()=>{ navigation.navigate('HatchBack')}}
                style={{backgroundColor: colors.hatchback}}
                className="rounded-full w-16 h-16 flex flex-col justify-center items-center">
                <Image
                  className=" w-14 h-14 mt-1 items-center"
                  source={require('../assets/hatch_back.png')}
                />
              </Pressable>

              <View
                style={{backgroundColor: colors.suv}}
                className="rounded-full w-16 h-16 flex  justify-cente items-center">
                <TouchableOpacity onPress={()=>{ navigation.navigate('SUV')}}>
                <Image
                  className=" w-14 h-14 mt-1 items-center"
                  source={require('../assets/suv_car.png')}
                />
                </TouchableOpacity>
              </View>

              <View
                style={{backgroundColor: colors.sedan}}
                className="rounded-full w-16 h-16  flex justify-cente items-center">
              <TouchableOpacity onPress={()=>{ navigation.navigate('SEDAN')}}>
              <Image
                  className=" w-14 h-14 mt-1 items-center"
                  source={require('../assets/sedan.png')}
                />
              </TouchableOpacity>
              </View>

              <View
                style={{backgroundColor: colors.arrow}}
                className="rounded-full w-16 h-16  flex justify-cente items-center">
                <Image
                  className=" w-6 h-6 mt-5 items-center"
                  source={require('../assets/right-arrow.png')}
                />
              </View>
            </View>
            <View className=" flex flex-row justify-around mx-0 mt-[2px]">
              <Text className=" font-medium text-sm text-black">HATCH</Text>
              <Text className=" font-medium text-sm text-black">SUV</Text>
              <Text className=" font-medium text-sm text-black">Sedan</Text>
              <Text className=" font-medium text-sm text-black">MORE</Text>
            </View>
          </View>

          <View>
          <SliderBox
            images={images}
            inactiveDotColor="black"
            dotColor={colors.primary}
            dotStyle={{width: 10, height: 10, borderRadius: 10}}
            paginationBoxVerticalPadding={20}
            autoplay={true}
            imageLoadingColor="black"
            circleLoop={true}
          />
        </View>

        <View className=" flex flex-col bg-white h-auto  my-0 pb-2 shadow-inner">
            <Text className=" mx-5 my-1 text-black font-semibold font-Inter text-xl">
              Cleaning Services
            </Text>
            <ScrollView horizontal={true} className="mx-4">
              {services.length > 0 &&
                services.map((item, index) => {
                  return (
                    <TouchableOpacity className="" key={index} onPress={()=> {
                      if(index === 1){
                       navigation.navigate('Carpet')
                      }
                      if(index === 2){
                        navigation.navigate('Sofa')
                      }
                      if(index === 0){
                        navigation.navigate('normal')
                      }
                      if(index === 4){
                        navigation.navigate('foam')
                      }
                      if(index === 3){
                        navigation.navigate('detailing')
                      }
                    }}>
                      <View className=" flex flex-col items-center">
                        <Image
                          className=" rounded-xl w-20 h-20 mx-2"
                          source={item.path}
                        />
                        <Text className=" text-center text-black font-normal text-sm ">
                          {item.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </View>

          <View>
            <VideoPlayer
              video={require('../assets/video.mp4')}
              showDuration={true}
              autoplay
              controlsTimeout={2000}
              disableControlsAutoHide={true}
              defaultMuted={true}
              pauseOnPress={true}
            />
          </View>

          <View className="flex flex-col bg-white h-auto my-2 pb-2 shadow-inner">
            <Text className=" mx-5 my-1 text-black font-semibold font-Inter text-xl">
              Client Reviews
            </Text>
            <ScrollView horizontal={true} className="mx-4">
              {reviews.length > 0 &&
                reviews.map((item, index) => {
                  return(
                    <View className=" flex flex-col justify-center items-center border rounded-lg mr-2" key={index}>
                    <Text className=" items-center text-black px-2 mt-1 font-medium font-Inter">{item.name}</Text>
                    <Text className=" text-black font-normal font-Inter text-xs">Fast service</Text>
                    <AirbnbRating className="pb-2" isDisabled count={5} showRating={false} reviewColor='green' size={10} defaultRating={5}/>
                  </View>
                  )
                })}
            </ScrollView>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
