import {StyleSheet, } from 'react-native'
import { Searchbar } from 'react-native-paper';
import React, {useState} from 'react'
import { Colors } from '../../constants/colors';

function SearchBar({onIconPress}){
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar 
      style={styles.search}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      icon={require('../../assets/images/search.png')}
      iconColor={Colors.primary100}
      onIconPress={onIconPress}  
      clearIcon={require('../../assets/images/delete.png')}  
    />
  );
}

export default SearchBar;

const styles = StyleSheet.create({
    search:{
        borderRadius:15,
        borderWidth:2,
        borderColor:Colors.primary400,
        marginTop:'3%',
        marginHorizontal:'5%'
    }
})