import { View, Text } from 'react-native'
import React, { FC } from 'react'
import CustomSafeAreaScrollView from '../components/global/CustomSafeAreaViewScroll'

const HomeScreen: FC = () => {
  return (
    <CustomSafeAreaScrollView style={{flex:1,alignItems:'center',justifyContent:"center",}}>
      <Text style={{color:"white",flex:1}}>Testing Complete</Text>
    </CustomSafeAreaScrollView>
  )
}

export default HomeScreen