import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  heading: {
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    padding: 2,
    marginBottom: 0
  },
  sectionText: {
    padding:3,
    lineHeight:25,
    textAlign:'center'
  },
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:130,
    height:130
  },
  imageWrap: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    height:1000,
    marginBottom:40,
    padding:50
  },
  toolbar: {
    height:58,
  }
});
