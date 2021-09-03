import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, SafeAreaView, Text, View, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { styles } from './style'
import { RenderItemPart } from './Ui'

export const Favorites = ({ navigation }) => {
  const [date, setDate] = useState([])
  
  const getMultiple = async () => {
    let values
    let getData = []
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
      values = await AsyncStorage.multiGet(keys)
      if (values !== null) {
        for (let i = 0; i < values.length; i++) {
          getData.push({
            setNum: JSON.parse(values[i][1]).setNum,
            name: JSON.parse(values[i][1]).name,
            numPart: JSON.parse(values[i][1]).numPart,
            img: JSON.parse(values[i][1]).img,
            url: JSON.parse(values[i][1]).url
          })

        }
        setDate(getData)
      }
    } catch (e) {
      console.error(e)
    }
    console.log('values', values)
    console.log('getData', getData)
  }

  useEffect(() => {
    getMultiple()
  }, []);

  const removeAll = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      console.log(keys)
      await AsyncStorage.multiRemove(keys)
      console.log('keys removed')
    } catch (error) {

    }
  }

  const keyExtractor = (item) => {
    return `${item.setNum}`
  }

  const renderItem = ({ item }) => (<RenderItemPart item={item} navigation={navigation} />)

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={[styles.content]}
      >
        {date ?
          <FlatList
            data={date}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
          : <Text>No Favaorite</Text>}
      </SafeAreaView>
      <View style={{marginBottom: 23, paddingLeft: 9, paddingRight: 9}}>
        <Button title="Remove all" onPress={removeAll} color="#ff5844" />
      </View>
    </View>
  );
}
