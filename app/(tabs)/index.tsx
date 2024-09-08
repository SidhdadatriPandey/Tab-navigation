import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Slider from '@/components/Home/Slider';
import Header from '@/components/Home/Header';

const index = () => {
  const [inp,setInp]=useState<number>(0);
  return (
    <View >
        <Header setInp={setInp}/>
        <ScrollView style={{ marginTop: 10 }}
          contentContainerStyle={{
            paddingBottom: 160
          }}
        >
        <Slider inp={inp} />
        </ScrollView>
       
      
      </View >
  )
}

export default index
