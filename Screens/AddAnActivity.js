import { View, Text } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Styles } from '../Components/Styles';
import TextBox from '../Components/TextBox';

export default function AddAnActivity( { navigation, route } ) {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    [
      {label: 'Walking', value: 'Walking'},
      {label: 'Running', value: 'Running'},
      {label: 'Swimming', value: 'Swimming'},
      {label: 'Weights', value: 'Weights'},
      {label: 'Yoga', value: 'Yoga'},
      {label: 'Cycling', value: 'Cycling'},
      {label: 'Hiking', value: 'Hiking'},
    ]
  )

  function openHanlder() {
    if (open === true) {
      setOpen(false);
    }
    else if (open === false) {
      setOpen(true);
    }
  }



  return (
    <View style={Styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOepn={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <TextBox
        intro={'Duration (min) *'}
      />
      <TextBox/>
    </View>
  )
}