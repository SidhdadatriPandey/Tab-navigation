import { View, Text, Image } from 'react-native';
import React from 'react';

interface HeaderProps {
  inp: number;
}

const Slider: React.FC<HeaderProps> = ({ inp }) => {
  console.log(inp);
  
  const image1 = "https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-600nw-2158034833.jpg";
  const image2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ38Eax9BLpLkLdRrO0ZJD3dUaXf4s6efw6zg&s";
  const image3 = "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.jpg?s=612x612&w=0&k=20&c=mJeYiZyGQXLXXZ6AWKbLwQDiuLr-YLRGV4VjHKdX0pM=";
  const image4 = "https://www.gkftii.com/blog/img/multimedia-courses-scope-and-career.webp";

  const getImageUri = (index: number) => {
    switch (index) {
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image3;
      case 4:
        return image4;
      default:
        return image1;
    }
  };

  return (
    <View style={{ padding: 15, alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>#Special for you</Text>

      {inp === 0 ? (
        <View style={{ gap: 20, justifyContent: 'center' }}>
          <Image
            source={{ uri: image1 }}
            style={{ width: 320, height: 165, marginBottom: 20 }}
          />
          <Image
            source={{ uri: image2 }}
            style={{ width: 320, height: 165, marginBottom: 20 }}
          />
          <Image
            source={{ uri: image3 }}
            style={{ width: 320, height: 165, marginBottom: 20 }}
          />
          <Image
            source={{ uri: image4 }}
            style={{ width: 320, height: 165, marginBottom: 20 }}
          />
        </View>
      ) : (
        <View>
          <Image
            source={{ uri: getImageUri(inp) }} 
            style={{ width: 320, height: 165, marginBottom: 20 }}
          />
        </View>
      )}
    </View>
  );
};

export default Slider;
