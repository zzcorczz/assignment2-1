  /* 
    File - Styles.js
    Purpose - Helper file that stores all of my
    style attributes.
  */


    import { StyleSheet, Dimensions } from "react-native";
    import { Color } from "./Color";
    
    
    export const Styles = StyleSheet.create({
      image: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 35,
      },
      container: {
        flex: 1,
        backgroundColor: '#aaa9c7',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textBox: {
        backgroundColor: '#b2b2d5',
        borderRadius: 5,
        width: 300,
        borderColor: '#3d3d78',
        borderWidth: 1,
      },
      startFont: {
        fontSize: 15,
        color: '#12126a',
        fontWeight:'bold',
        marginTop: 20,
      },
      screenStyles: {
        headerShown: false,
      },
      resetConfirm: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 20,
      },
      resetStyle: {
        fontSize: 20,
        color: 'red',
        marginRight: 100,
      },
      confirmStyle: {
        fontSize: 20,
        color: 'blue',
      },
      
    })