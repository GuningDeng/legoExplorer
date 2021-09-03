import React, { useEffect, useState } from 'react' 
import { FlatList, SafeAreaView, View } from 'react-native'
import { styles } from './style'
import { loadApiData } from './connectApi'
import { RenderItemPart } from './Ui'

export const Minifigs = ({navigation}) => {
  const [apiData, setApiData] = useState()
  useEffect(() => {
    (async() => {
      let value = await loadApiData()
      setApiData(value)
    })()
  }, []);
  console.log('apiData');  
  const keyExtractor = (item) => {
    return `${item.setNum}`
  }

  const renderItem = ({ item }) => {
    return (
      <RenderItemPart item={item} navigation={navigation} />
    )
  }

  return (
    <View style={styles.container}>
        <SafeAreaView
          style={[styles.content]}
        >
          <FlatList
            data={apiData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </SafeAreaView>
    </View>
  )
}