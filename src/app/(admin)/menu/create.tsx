import { Button, Input, Text, View } from '@/components/ui';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';

const CreateProductScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const onSubmit = () => {
    if (isUpdating) {
      onUpdate();
    } else {
      onCreate();
    }
  };

  const onCreate = () => {
    console.log('creating product');

    resetFields();
  };

  const onUpdate = () => {
    console.log('updating product');

    resetFields();
  };

  const onDelete = () => {
    console.log('Deleted');
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

  const onConfirmDelete = () => {
    Alert.alert('Confirm', 'Are you sure you want to delete this product?', [
      { text: 'Cancel' },
      { text: 'Delete', style: 'destructive', onPress: onDelete },
    ]);
  };

  return (
    <>
      <Stack.Screen
        options={{ title: isUpdating ? 'Update Product' : 'Create Product' }}
      />
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
        <View style={styles.actions}>
          <Button text={isUpdating ? 'Update' : 'Create'} onPress={onSubmit} />
          {isUpdating && (
            <Button text='Delete' type='ghost' onPress={onConfirmDelete} />
          )}
        </View>
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
  actions: {
    paddingTop: 15,
    gap: 5,
  },
});

export default CreateProductScreen;
