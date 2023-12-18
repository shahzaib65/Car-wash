import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ResetPassword() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className=" flex-1 bg-white">
      <View className=" flex justify-center items-center mt-4">
        <Image
          source={require('../assets/logo.png')}
          style={{height: hp(30), width: wp(36)}}
          className=" items-center"
        />
      </View>

      <View className=" flex flex-col">
        <View style=" flex justify-start">
          <Text className=" mx-8 text-black font-Inter font-bold text-2xl">
            Reset Password
          </Text>
        </View>

        <TextInput
          className="shadow p-3 font-Inter rounded-xl mb-5 mx-7 mt-3 font-normal text-base"
          style={{backgroundColor: colors.input}}
          placeholder="New Password"
          placeholderTextColor="#2C2C2C"
          autoCapitalize="none"
          //  value={values.email}
          //  onChangeText={handleChange('email')}
          //   onBlur={() => setFieldTouched('email')}
          //   textAlign={I18nManager.isRTL ? 'right' : 'left'}
          keyboardType="email-address"
          selectionColor={'black'}
          returnKeyType="next"
        />

        <TextInput
          className="shadow p-3 rounded-xl mb-2 font-Inter font-normal text-base mx-7 mt-0"
          style={{backgroundColor: colors.input}}
          placeholder="Confirm Password"
          placeholderTextColor="#2C2C2C"
          autoCapitalize="none"
          //  value={values.email}
          //  onChangeText={handleChange('email')}
          //   onBlur={() => setFieldTouched('email')}
          //   textAlign={I18nManager.isRTL ? 'right' : 'left'}
          keyboardType="email-address"
          selectionColor={'black'}
          returnKeyType="next"
        />

<TouchableOpacity
          className="shadow p-3 rounded-xl mb-5 mx-7 mt-3"
          style={{backgroundColor: colors.primary}}
          onPress={() => navigation.navigate('Login')}>
          <Text className="text-center text-white text-lg font-semibold">
            Reset
          </Text>
        </TouchableOpacity>



      </View>
    </SafeAreaView>
  );
}
