import React, { useState } from 'react';



import Navigation from './Components/src/Navigation/Navigation.js'


const App=()=> {
  return (
    <Navigation />
  )
}
export default App;

//   const [title, setTitle] = useState('')
//   const [description, setDescription] = useState('')
//   const [data, setData] = useState([

//   ])

//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
//         <FlatList style={styles.list}
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//           ListHeaderComponent={()=>{
//             return(
//               <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
//                 <Text style={{fontSize:24,color:'gray'}}>Your To - Do List</Text>
//               </View>
//             )
//           }}
//         />
//         <View style={styles.inputView}>
//           <Input placeholder={'Title'}
//             value={title}
//             onChangeText={(value) => setTitle(value)}
//           />
//           <Input placeholder={'Description'}
//             value={description}
//             onChangeText={(value) => setDescription(value)}
//           />

//           <Button text={'Add'} onPress={() => {
//             let arr = data.slice();
//             let obj = {
//               id: data.length,
//               title: title,
//               description: description
//             }
//             arr.push(obj)

//             setData(arr)
//             setTitle('')
//             setDescription('')
//           }} />


//         </View>

//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: 'gray',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 24,
//     color: 'white'
//   },
//   list: {
//     flex: 1
//   },
//   description: {
//     fontSize: 18,
//     color: 'white'
//   },
//   inputView: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'

//   }
// });
