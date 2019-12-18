import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';

// Styles
import styles from './styles';

class Feed extends Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <TouchableOpacity
        style={{marginRight: 20}}
        onPress={() => navigation.navigate('New')}>
        <Text>FOTO</Text>
      </TouchableOpacity>
    ),
  });

  state = {
    feed: [],
  };

  renderList = () => {
    if (!this.state.feed.length)
      return (
        <View>
          <Text>Não existem posts.</Text>
        </View>
      );

    return (
      <FlatList
        data={this.state.feed}
        keyExtractor={post => post._id}
        renderItem={({item}) => (
          <View style={styles.feedItem}>
            <View style={styles.feedItemHeader}>
              <View style={styles.userInfo}>
                <Text style={styles.name}>{item.author}</Text>
                <Text style={styles.place}>{item.place}</Text>
              </View>
            </View>

            <Image
              style={styles.feedImage}
              source={{uri: `http://localhost:3333/files/${item.image}`}}
            />

            <View style={styles.feedItemFooter}>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => {}}>
                  <Text>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} onPress={() => {}}>
                  <Text>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} onPress={() => {}}>
                  <Text>Send</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.likes}>{item.likes} curtidas</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.hashtags}>{item.hashtags}</Text>
            </View>
          </View>
        )}
      />
    );
  };

  render() {
    return <View style={styles.container}>{this.renderList()}</View>;
  }
}

export default Feed;
