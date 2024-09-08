import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

interface HeaderProps {
  setInp: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({ setInp }) => {
  const image = "https://icons.iconarchive.com/icons/martz90/circle/512/gmail-icon.png";

  return (
    <View style={{
      padding: 20,
      paddingTop: 50,
      backgroundColor: Colors.PRIMARY,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      }}>
        <Image
          source={{ uri: image }}
          style={{
            width: 45,
            height: 45,
            borderRadius: 22.5,
            marginRight: 10,
          }}
        />
        <View>
          <Text style={{ color: '#fff' }}>Welcome</Text>
          <Text style={{ fontSize: 19, color: '#fff' }}>Siddharth Pandey</Text>
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
      }}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput
          placeholder="Search..."
          style={{
            flex: 1,
            marginLeft: 10,
            height: 40,
            color: '#000',
          }}
          onChangeText={(val) => setInp(Number(val) || 0)} // Convert the string to a number or default to 0
        />
      </View>
    </View>
  );
};

export default Header;
