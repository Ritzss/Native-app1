import { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';

const Header = () => {
    const [text, setText] = useState('');
    const [expanded, setExpanded] = useState(false);
    const [menu, setMenu] = useState(false);
    
    const widthAnim = useRef(new Animated.Value(150)).current;
    
    const screenWidth = Dimensions.get('window').width;
    const slideAnim = useRef(new Animated.Value(screenWidth)).current;

  const toggleSearch = () => {
    Animated.timing(widthAnim, {
      toValue: 150,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  const toggleMenu = () => {
    if (!menu) {
      setMenu(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: screenWidth,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenu(false));
    }
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.item}>
          <Text style={styles.text}>Logo</Text>
        </View>

        <View style={styles.searchMenu}>
          <View style={styles.item}>
            <Animated.View style={[styles.search, { width: widthAnim }]}>
              <TextInput
                value={text}
                onChangeText={setText}
                style={styles.text1}
                placeholder="Search..."
                placeholderTextColor="#00000080"
              />

              <TouchableOpacity onPress={toggleSearch}>
                <Icon name="search" size={22} color="gray" />
              </TouchableOpacity>
            </Animated.View>
          </View>

          <Pressable
            onPress={toggleMenu}
            android_ripple={{ color: '#e4e19890' }}
            style={styles.item}
          >
            <Text style={styles.text}>Menu</Text>
          </Pressable>
        </View>
      </View>
      <Animated.View
        style={[
          styles.menu,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <Pressable
          android_ripple={{ color: '#e4e198' }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Text style={styles.menuItems}>Home</Text>
        </Pressable>
        <Pressable
          android_ripple={{ color: '#e4e198' }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Text style={styles.menuItems}>Favorites</Text>
        </Pressable>
        <Pressable
          android_ripple={{ color: '#e4e198' }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Text style={styles.menuItems}>Orders History</Text>
        </Pressable>
        <Pressable
          android_ripple={{ color: '#e4e198' }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Text style={styles.menuItems}>Collection</Text>
        </Pressable>
        <Pressable
          android_ripple={{ color: '#e4e198' }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Text style={styles.menuItems}>Login/Register</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#889551',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 25,
  },

  item: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  search: {
    backgroundColor: '#ffffff',
    width: 150,
    height: '80%',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    overflow: 'hidden',
  },

  text1: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },

  text: {
    fontSize: 16,
    color: '#fff',
  },

  searchMenu: {
    // flex: 1,
    flexDirection: 'row',
    width: 200,
    gap: 20,
  },

  menu: {
    position: 'absolute',
    width: '100%',
    top: 50, // 👈 below header (your header height)
    left: 0,
    backgroundColor: '#efe198d0', // give it color or it’s invisible genius
    zIndex: 10, // make sure it comes on top
    gap: 2,
    padding: 20,
    height: 820,
  },

  menuItems: {
    borderBottomWidth: 1,
    width: '100%',
    fontSize: 18,
    marginInline: 'auto',
    paddingTop: 20,
  },
});
