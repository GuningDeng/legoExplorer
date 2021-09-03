import React, { useEffect, useCallback, useState } from 'react'
import { Alert, Button, Linking } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DedtailscrollView } from './Ui'
import { loadApiDataParts } from './connectApi'

export const DetailScreen = ({ navigation, route }) => {
    const { setNum, name, numPart, img, url } = route.params
    const [partData, setPartData] = useState()
    const [thePartName, setThePartName] = useState()
    const [thePartImg, setThePartImg] = useState()
    const [date, setDate] = useState()
    const [modalVisible, setModalVisible] = useState(false)
    const [hasItem, setHasItem] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            title: `Detail`
        })
    }, []);

    useEffect(() => {
        (async() => {
            let getSetNum = await setNum
            console.log('getSetNum',getSetNum);
            let value = await loadApiDataParts(getSetNum)
            // console.log(value);
            setPartData(value)
        })()
    }, []);
    console.log('partData')

    const supportedURL = url
    const OpenURLButton = ({ url, children }) => {
        const handlePress = useCallback(async () => {
            const supported = await Linking.canOpenURL(url)
            if (supported) {
                await Linking.openURL(url)
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`)
            }
        }, [url])
        return <Button title={children} onPress={handlePress} color="#8ab933" />
    }

    const storeData = async () => {
        let value = {
            setNum: setNum,
            name: name,
            numPart: numPart,
            img: img,
            url: url
        }
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(value.setNum, jsonValue)
        } catch (e) {
            console.error(e)
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(setNum)
            const item = JSON.parse(jsonValue)
            if (item !== null) {
                setDate(item)
                setHasItem(true)
                console.log(hasItem)
            }
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const removeValue = async () => {
        try {
            await AsyncStorage.removeItem(setNum)
        } catch (e) {
            console.error(e)
        }
        console.log('remove:' + setNum)
    }

    return (
        <DedtailscrollView modalVisible={modalVisible} setModalVisible={setModalVisible} thePartImg={thePartImg} setThePartImg={setThePartImg} setThePartName={setThePartName} thePartName={thePartName} partData={partData} setNum={setNum} name={name} numPart={numPart} img={img} hasItem={hasItem} url={url} supportedURL={supportedURL} removeValue={removeValue} storeData={storeData} OpenURLButton={OpenURLButton} />
    );
}

