import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet,TouchableOpacity, Text,SafeAreaView, View, Image, ScrollView,FlatList  } from 'react-native';

import CustomListview from './costumList';

const data = require('./data.json');
  let a=[]
  let sum1=0,sum2=0,total=0;
  for(let i=0;i<data.length;i++)
  {
    if(data[i].paid_by=="you")
    {
      sum1+=data[i].amount;
    }
    else
    {
      sum2+=data[i].amount;
    }
    total=sum1-sum2;
    console.log(total);
    let b=[];
    b.push(data[i].date,data[i].description,data[i].amount,data[i].paid_by);
    a.push(b);
    console.log(a);
  }

let getCol = () => {
  if(total>0)
    return '#45b061';
  return '#d14924';
};
let getAmount=() =>{
  if(total<0)
    return total*-1;
  return total;
}
let getButtonName=() =>{
  if(total>0)
  {
    return "Get Credit"
  }
  return "Settle Up"
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      marginTop:275,
      paddingHorizontal: 10,
    },
    button:{
      alignItems: "center",
      alignSelf:'center',
      position:'absolute',
      backgroundColor: "#188c14",
      width:375,
      padding: 20,
      borderRadius:50
    },
    rectangle: {
      height: 128,
      width: 350,
      marginTop:150,
      backgroundColor:getCol(),
      position: 'absolute', 
      zIndex: 99,
      marginLeft:20,
      borderRadius:7,
    },
    tasksWrapper: {
      paddingTop:50,
      paddingLeft:20,
      position: 'absolute',
      width: '100%',
      flexDirection: 'row',
    },
    list:{
        marginTop:200,
        backgroundColor:'blue'
    },
    sectionTitle: {
      fontSize: 30,
      fontFamily: 'serif',
      paddingLeft: 10,
      paddingTop:10,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
  });
  let getImage=(title)=>{
    if(title=='movie')
    {
        return 'https://preview.pngtab.com/21/22/7/KVvg9NsFAz/symbol-video-film-brand-filmography.jpg';
    }
    if(title=='dinner')
    {
        return 'https://www.clipartmax.com/png/middle/64-648687_installation-dinner-icon-dinner-icon-png.png';
    }
    if(title=="date night")
    {
        return 'https://static.thenounproject.com/png/3549015-200.png';
    }
    if(title=="grocery")
    {
        return 'https://thumbs.dreamstime.com/b/paper-bag-vegetables-groceries-paper-bag-vegetables-groceries-paper-bag-include-carrot-cucumber-tomato-corn-healthy-117891737.jpg';
    }
  }

  let datee=(moment)=>{
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let y=parseInt(moment.substring(0,4));
    let m=parseInt(moment.substring(5,7));
    let da=parseInt(moment.substring(8,10));
    var dn = new Date(y, m-1, da);
    let c=[];
    c.push(monthNames[dn.getMonth()]);
    c.push(dn.getDate());
    return c;
  }

  let gettext=(who,amt)=>{
    if(who=='you')
      return 'You paid ₹'+amt.toString();
    return who[0].toUpperCase()+who.substring(1,)+' paid you ₹'+amt.toString();
  }

  let getcolor=(who)=>{
    if(who=="you")
      return '#45b061';
    return '#d14924';
  }
  let getamt=(who,amt)=>{
    if(who=="you")
      return '+'+amt.toString();
    return '-'+amt.toString();
  }

  function Item({ date, description, amount,paid,url }) {
    return (
      <View style={{
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row',
      }}>
        <View style={{fontWeight:'bold'}}>
        <Text style={{fontSize:20,color:'#8b948d'}}>{date[0]}</Text>
        <Text style={{fontSize:15,alignSelf:'center',color:'#8b948d'}}>{date[1]}</Text>
        </View>
        <Image style={{height:50,width:50,paddingRight:30,borderRadius:50,marginLeft:12}} source={{uri:url}} />
        <View style={{width:150}}>
        <Text style={{marginLeft:15,fontSize:20,fontWeight:'bold'}}>{description[0].toUpperCase()+description.substring(1,)}</Text>
        <Text style={{marginLeft:15,color:'#8b948d'}}>{gettext(paid,amount)}</Text>
        </View>
        <Text style={{paddingLeft:40, color:getcolor(paid),fontWeight:'bold',fontSize:20, paddingTop:10}}>{getamt(paid,amount)}</Text>
      </View>
    );
  }

console.log("HI")
export default function App() {
  return (
    <View>
    <View style={{backgroundColor:"#e6dfdf", padding:50}}>
    <View style={styles.tasksWrapper}>
        <Image source = {{uri:'https://media.allure.com/photos/5c9a6a0d22884f17cd8697c5/3:2/w_2250,h_1500,c_limit/kylie-jenner-no-makeup-lede.jpg'}}
   style = {{ width: 70, height: 70 ,borderRadius:50}}
   />
      <Text style={styles.sectionTitle}>Prerana M S</Text>
      <Image source = {{uri:'http://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png'}}
   style = {{ width: 40, height: 40, marginLeft:40,marginTop:10}}
   />
      <Image source = {{uri:'https://cdn1.iconfinder.com/data/icons/web-and-user-interface-21/512/30-512.png'}}
   style = {{ width: 30, height: 30, marginLeft:2,marginTop:16,marginRight:5}}
   />
   </View>
   <View style={styles.rectangle}>
        <Text style={{textAlign:'center',color:'white',fontFamily:'sans-serif-light',fontSize:20,marginTop:20}}>Total Payable</Text>
        <Text style={{textAlign:'center',color:'white',fontFamily:'Roboto',fontSize:50,marginTop:10,fontWeight:'bold'}}>{"₹ "+getAmount()}</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}>
          <Text style={{textAlign:'center',color:'white',fontFamily:'sans-serif',fontSize:20}}>{getButtonName()}</Text>
        </TouchableOpacity>
      </View>
    </View>
      <View style={styles.tasksWrapper,{backgroundColor:"white"}}>
        <FlatList
              data={data}
              renderItem={({ item }) => <Item date={datee(item.date)} url={getImage(item.description)} description={item.description} amount={item.amount} paid={item.paid_by} />}
              keyExtractor={item => item.id}
          />
      </View>
    </View>
  );
}


