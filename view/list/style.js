import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')
const itemWidth = (width - 20) / 3
const itemImgWidth = itemWidth - 20

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2e2e2'
    },
    search: {
        position: 'absolute',
        left: 11,
        right: 11,
        height: 40,
        paddingLeft: 13,
        lineHeight: 40,
        backgroundColor: '#fff',
        borderRadius: 5

    },
    content: {
        flex: 1,
        marginTop: 5,
        marginLeft: 9,
        marginRight: 9,
        marginBottom: 5,
        borderRadius: 5
    },
    renderItemViewOut: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: itemWidth,
        marginBottom: 5,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemImg: {
        marginLeft: 10,
        backgroundColor: '#ff5844',
        borderRadius: 5
    },
    itemName: {
        textAlign: 'center'
    }
});