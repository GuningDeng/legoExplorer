import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'

export const RenderItemPart = ({ item, navigation }) => {
    return (
        <View key={item.setNum}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate(
                        'Detail',
                        {
                            setNum: item.setNum,
                            name: item.name,
                            numPart: item.numPart,
                            img: item.img,
                            url: item.url
                        }
                    )
                }
            >
                <View style={styles.renderItemViewOut} >
                    <Image
                        source={{ uri: item.img }}
                        style={[styles.renderItemViewImg, styles.itemImg]}
                    />
                    <View>
                        <Text style={[styles.renderItemViewTex,{ color: '#CD264B', fontWeight: 'bold' }]}>
                            {item.name}
                        </Text>
                        <Text style={[styles.renderItemViewTex]}>
                            Category: Minifigf.{"\n"}Parts: {item.numPart}.
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}