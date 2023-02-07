import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import Constants from "../../Constants";
const List = () => {
  const [filter, setfilter] = useState("name")
  const [searchText,setsearchText]=useState("")
  const [ListData,setListData]=useState([
    {
      text:"AUDI ME (DAFZA tenants only)",
      subText:"DAFZA",
      even:true
},
{
  text:"AUDI ME (AUDI staff only)",
  subText:"DAFZA",
  even:false
},
{
  text:"Adagio Premium The Palm 1",
  subText:"Adagio Premium - The Palm - Dubai - ...",
  even:true
},
{
  text:"Adagio Premium The Palm 2",
  subText:"Adagio Premium - The Palm - Dubai - ...",
  even:false
},
{
text:"Al Bahar Hotel & Resort",
subText:"Al Ghurfa, Fujairah, UAE",
even:true
},
{
text:"Al Forsan Main Building AC charger",
subText:"Al Forsan, Abu Dhabi",
even:false
},
{
  text:"Al Forsan Main Building DC charger",
  subText:"Al Forsan, Abu Dhabi",
  even:true
  },
  {
    text:"Al Forsan Town Square Spinneys",
    subText:"Al Forsan, Abu Dhabi, UAE",
    even:false
    },
    {
      text:"Al Forsan Water Sports",
      subText:"Al Forsan, Abu Dhabi",
      even:true
      },
])
  const ListItem = (props) => {
    return (
      <View style={{
        padding: 12,
        flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: props.even ? "#eef6eb" : "#dbedd5"
      }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="ios-location"
            size={40}
            color={"#52a034"}
            style={{ marginStart: 5, marginEnd: 20 }}
          />
          <View>
            <Text style={{ fontWeight: "800", color: "#606664", fontSize: 17 }}>
              {props.text}
            </Text>
            <Text style={{ fontWeight: "500", color: "#859487", marginTop: 5, fontSize: 15 }}>
              {props.subText}
            </Text>
          </View>
        </View>
        <Entypo
          name="chevron-small-right"
          size={30}
          color="#00000"
        />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.textInput}
          autoCorrect={false}
          // secureTextEntry
          value={searchText}
          placeholder="Where do you want to charge to"
          placeholderTextColor={"#d6d8da"}
          onChangeText={(e)=>setsearchText(e)}
        />
        <FontAwesome
          style={styles.iconStyle}
          name='search'
          color='#d6d8da'
          size={15}
        />
        <Entypo
          name="sound-mix"
          size={30}
          color="black"
          style={{ paddingTop: 15, paddingStart: 5 }}
        />
      </View>
      <View
        style={styles.bottomLine}
      />
      <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 20, marginEnd: 10, marginBottom: 15 }}>
        <Text 
        // onPress={() => setfilter("sort")}
         style={[styles.textStyle, { color: filter === "sort" ? Constants.colors.textColor : null }]}>
          Sort By
        </Text>
        <Text onPress={() => setfilter("name")} style={[styles.textStyle, { color: filter === "name" ? Constants.colors.textColor : null }]}>
          Name
        </Text>
        <Text onPress={() => setfilter("distance")} style={[styles.textStyle, { color: filter === "distance" ? Constants.colors.textColor : null }]}>
          Distance
        </Text>
      </View>
     {ListData.length>0&&ListData?.filter((i)=>i.text.toLowerCase().includes(searchText.toLowerCase())||i.subText.toLowerCase().includes(searchText.toLowerCase())).length>0?
      ListData?.filter((i)=>i.text.toLowerCase().includes(searchText.toLowerCase())||i.subText.toLowerCase().includes(searchText.toLowerCase())).sort(function(a, b){
        if(filter=="name")
        {if(a.text < b.text) { return -1; }
        if(a.text > b.text) { return 1; }
        return 0;}
        else 
        {if(a.subText < b.subText) { return -1; }
        if(a.subText > b.subText) { return 1; }
        return 0;}
    })
      ?.map((data)=>(
        <ListItem
        even={data.even}
        text={data.text}
        subText={data.subText}
      />
      )):<Text style={{ fontWeight: "800", color: "#606664", fontSize: 17 }}>
      No data found
    </Text>
     }
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    // fontFamily:Constants.fontFamily,
    fontSize: 16,
    color: "black",
    paddingStart: 10,
    fontWeight: "600"
  },
  bottomLine: {
    borderBottomColor: "#000", borderBottomWidth: 1, flex: 1,
    width: "75%", marginStart: "12%", marginTop: -10, marginEnd: "14%"
  },
  iconStyle: {
    position: "absolute",
    left: 10,
    fontWeight: "500",
    paddingTop: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    flex: 1,
    marginStart: 10, marginEnd: 10
  },
  textInput: {
    fontWeight: "500",
    fontSize: 18,
    flex: 1,
    backgroundColor: "#f2f4f5",
    width: '90%',
    borderRadius: 5,
    marginTop: 20,
    padding: 12,
    paddingStart: 35,

    color: "#d6d8da"
  }
});
export default List;