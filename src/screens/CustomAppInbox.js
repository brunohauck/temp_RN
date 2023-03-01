import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
//import Clevertap from 'clevertap-react-native';

const CustomAppInbox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await 
      //Clevertap.getInboxMessages();
      setMessages(response);
    };

    fetchMessages();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.messageContainer}>
      <Text style={styles.messageText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  messageContainer: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginVertical: 8,
    borderRadius: 4,
  },
  messageText: {
    fontSize: 16,
  },
});

export default CustomAppInbox;