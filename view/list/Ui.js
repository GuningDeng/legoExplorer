import React from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'

export const RenderItemPart = ({ item, navigation }) => {
    const { width } = Dimensions.get('window')
    const itemWidth = (width - 20) / 3
    const itemImgWidth = itemWidth - 20

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
                <View
                    style={styles.renderItemViewOut}
                >
                    <Image
                        source={{ uri: item.img }}
                        style={[
                            {
                                width: itemImgWidth,
                                height: itemImgWidth
                            },
                            styles.itemImg
                        ]}
                    />
                    <View>
                        <Text
                            style={
                                [styles.itemName],
                                {
                                    width: width - itemImgWidth,
                                    paddingLeft: width * .065,
                                    color: '#CD264B',
                                    fontWeight: 'bold'
                                }
                            }
                        >
                            {item.name}
                        </Text>
                        <Text
                            style={
                                [styles.itemName],
                                {
                                    width: width / 2,
                                    paddingLeft: width * .065
                                }
                            }
                        >
                            Category: Minifigf.{"\n"}Parts: {item.numPart}.
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
