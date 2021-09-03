import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, SafeAreaView, TextInput, View } from 'react-native'
import { styles } from './style'
import { RenderItemPart } from './Ui'
import { loadApiData } from './connectApi'

export const ListScreen = ({ navigation }) => {
  const { width } = Dimensions.get('window')
  const itemWidth = (width - 20) / 3
  const itemImgWidth = itemWidth - 20
  const [getData, setGetData] = useState([])
  const [renderData, setRenderData] = React.useState([])
  const [text, setText] = useState('')
  
  useEffect(() => {
    (async() => {
      let value = await loadApiData()
      setGetData(value)
    })()
  }, []);
  console.log('getData', getData[0]);

  const searchLego = (keyword) => {
    setText(keyword)
    getData.forEach(item => item.hidden = false)
    if (keyword.length > 0) {
      getData.map((val) => {
        if (val.name.search(keyword) === -1) {
          val.hidden = true
        }
      })
      setGetData(getData)
      console.log('true', renderData)
    } else {
      getData.map((item) => {
        item.hidden = false
      })
      setGetData(getData)
      console.log('false', renderData.length)
    }
  }

  const keyExtractor = (item) => {
    return `${item.setNum}`;
  }

  const renderItem = ({ item }) => {
    if (!item.hidden) {
      return (
        <RenderItemPart item={item} navigation={navigation} />
      )
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={
          {
            height: width * .19,
            backgroundColor: '#8ab933'
          }
        }
      >
        <TextInput
          style={
            [styles.search, { top: 9 }]
          }
          value={text}
          onChangeText={(text) => { searchLego(text) }}
          placeholder="Please enter name"
          returnKeyType={'search'}
          placeholderTextColor={'#aaa'}
        />
      </View>

      <SafeAreaView
        style={[styles.content]}
      >
        <FlatList
          data={getData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </SafeAreaView>
    </View>
  )
}

