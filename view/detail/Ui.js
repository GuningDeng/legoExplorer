import React from 'react'
import { Button, Dimensions, Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'

const { width } = Dimensions.get('window')
const itemWidth = (width - 20) / 3
const itemImgWidth = itemWidth - 20

export const DedtailscrollView = ({setNum, modalVisible, setModalVisible, setThePartImg, thePartImg, setThePartName, thePartName, partData, name, numPart, img, hasItem, url, removeValue, storeData, OpenURLButton }) => {
    const supportedURL = url
    return (
        <ScrollView>
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.modalViewOut}>
                        <View style={styles.modalViewIn}>
                        <Image source={{uri:thePartImg}} style={styles.modalImg} />
                            <Text style={{marginBottom:15}}>{thePartName}</Text>
                            <Button title="confirm" onPress={()=>setModalVisible(false)} color="#8ab933" />
                        </View>
                    </View>
                </Modal>
                <View style={styles.detailCard}>
                    <View style={styles.detailCardImg}>
                        <Image
                            source={{ uri: img }}
                            style={[{ width: width * .8, height: width * .8, resizeMode: "contain"}]}
                        />
                    </View>
                    <View style={{ paddingLeft: width * .035, paddingRight: width * .035, }}>
                        <Text style={[{ fontWeight: 'bold' }, styles.detailText]}>
                            {name}
                        </Text>
                        <Text style={styles.detailText}>
                            Set_num: {setNum}.{"\n"}
                            Parts: {numPart}.{"\n"}
                        </Text>
                        {partData &&
                            <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-start",marginBottom:15}}>
                                {partData.map((item,index) => (
                                    <TouchableOpacity key={index} onPress={() =>{setModalVisible(true);setThePartName(item.partName);setThePartImg(item.partImg)}}>
                                        <Image source={{uri:item.partImg}} style={{width:itemImgWidth,height:itemImgWidth,marginBottom:7,marginLeft:7,borderRadius:3}} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        }
                        {hasItem === true ? <Button title="remove from my favorite" onPress={removeValue} color="#8ab933" /> : <Button title="Add to my favorite" onPress={storeData} color="#8ab933" />}
                        <View style={{marginTop:15}}>
                            <OpenURLButton url={supportedURL}>Go to shop</OpenURLButton>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}