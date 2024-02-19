import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'

export default function SpecialActivities({navigation}) {
  
  function addHandler() {
    navigation.navigate('Add')
  }
  
  
  useEffect(() => navigation.setOptions(
    {headerRight: () => (
        <Button
          title='Add'
          onPress={addHandler}
        />
      )}
    )
  )
  
  return (
    <View>
      <Text>SpecialActivities</Text>
    </View>
  )
}