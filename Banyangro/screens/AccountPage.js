import {View, Text, Pressable, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
export default function AccountPage() {
  const navigation = useNavigation();

  const [account, setAccount] = useState([
    {
      id: '1',
      name: 'SHAHZAIB',
      address: 'Paksitan',
      email: 'test@gmail.com',
      AccountId: '1234553636',
    },
  ]);

  return (
    <SafeAreaProvider className=" flex-1 bg-[#F9F9F9]">
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
              Account Info
            </Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={true}>
        <View
                  className=" flex flex-row justify-between shadow p-3 rounded-xl bg-white mb-3 mx-7 mt-5 border border-black">
                  <Text className="font-Interfont-normal text-base text-black">
                   AccountId: 1234553636
                  </Text>
                </View>

                <View
                  className=" flex flex-row justify-between shadow p-3 rounded-xl bg-white mb-3 mx-7 border border-black">
                  <Text className="font-Interfont-normal text-base text-black">
                   Test@gmail.com
                  </Text>
                </View>

                <View
                  className=" flex flex-row justify-between shadow p-3 rounded-xl bg-white mb-3 mx-7 border border-black">
                  <Text className="font-Interfont-normal text-base text-black">
                  Shahzaib
                  </Text>
                </View>

                <View
                  className=" flex flex-row justify-between shadow p-3 rounded-xl bg-white mb-3 mx-7 border border-black">
                  <Text className="font-Interfont-normal text-base text-black">
                   Address
                  </Text>
                </View>

        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}
