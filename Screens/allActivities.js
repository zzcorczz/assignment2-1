import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { Styles } from '../Components/Styles'

export default function AllActivities( {navigation} ) {

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
    <View style={Styles.container}>
      <Text>AllActivities</Text>
    </View>
  )


}