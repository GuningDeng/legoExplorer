import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')
const itemWidth = (width - 20) / 3
const itemImgWidth = itemWidth - 20

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    alignItems: 'center'
  },
  modalViewOut: {
    flex:1, alignItems:"center",
    justifyContent:"center",
    backgroundColor:"rgba(0,0,0,.55)"
  },
  modalViewIn: {
    width:width*.9,
    minHeight:width*.9,
    padding:width*.07,
    paddingBottom:width*.1,
    backgroundColor:"#fff", 
    borderRadius:5
  },
  modalImg: {
    width:itemImgWidth*3,
    height:itemImgWidth*3,
    marginBottom:15,
    borderRadius:3
  },
  detailCard: {
    width: width * .9,
    marginTop: width * .05,
    marginBottom: width * .15,
    paddingBottom: width * .075,
    backgroundColor: '#ff5844',
    borderRadius: 7,
    overflow: 'hidden'
  },
  detailCardImg:{
    display: 'flex',
    alignItems:"center", 
    justifyContent:"center", 
    width: width * .9, 
    height: width * .9, 
    backgroundColor: '#fff'
  },
  itemImg: {
    backgroundColor: '#ff5844',
    borderRadius: 5
  },
  detailText: {
    paddingTop: 9,
    color: '#e6e6e6',
    lineHeight: 23
  }
});