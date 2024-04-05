import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'

export default function Rooms() {
  const [articles,setArticles]=useState([])

  const getNews=()=>{
     axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d17eddec20ba45208ed3ca3ed29da56f',{
         params:{
             category:"technology"
         }
     })
     .then( (response)=> {
       // handle success
       console.log(response.data.articles);
       setArticles(response.data.articles);
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
     .finally(function () {
       // always executed
     });
  }
  useEffect(() => {
         getNews()
  }, [])
  return (
    <View  style={{margin:"15"}}>
      
    </View>
  )
}