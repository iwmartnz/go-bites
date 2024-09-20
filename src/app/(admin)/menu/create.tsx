import { Button, Input, Text, View } from '@/components/ui';
import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Stack } from 'expo-router';

const CreateProductScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const onCreate = () => {
    console.log('creating product');

    resetFields();
  };

  const resetFields = () => {
    setName('');
    setPrice('');
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Create Product' }} />
      <View style={styles.container}>
        <Image
          source={{
            uri:
              image ||
              'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png',
          }}
          style={styles.image}
        />
        <Text type='link' style={styles.textButton} onPress={pickImage}>
          Select Image
        </Text>
        <View style={styles.formField}>
          <Text type='label'>Name</Text>
          <Input
            value={name}
            onChangeText={setName}
            size='lg'
            placeholder='name'
          />
        </View>
        <View style={styles.formField}>
          <Text type='label'>Price ($)</Text>
          <Input
            value={price}
            onChangeText={setPrice}
            size='lg'
            placeholder='name'
            keyboardType='numeric'
          />
        </View>

        <Button text='Create' onPress={onCreate} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  image: {
    width: '50%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  textButton: {
    alignSelf: 'center',
    paddingBottom: 15,
  },
  formField: {
    gap: 5,
    paddingBottom: 15,
  },
});

export default CreateProductScreen;
