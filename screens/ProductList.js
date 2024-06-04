import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LottieView from 'lottie-react-native'


// Animasyonlar için "README.md" ve "ASSETS" klasörüne BAK !!!

const ProductList = ({ navigation }) => {
//------------------------------------------------------    
const [isPlaying, setIsPlaying] = useState(false);
//------------------------------------------------------
const triggerConfetti = () => {
  setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    //   navigation.navigate('ProductDetails');
  }, 2000); // 2 saniye boyunca oynat, sonra durdur ve navigasyona git
};
//------------------------------------------------------
  return (
    <View style={styles.productListContainer}>


      <Pressable style={styles.button} 
                 onPress={triggerConfetti}>
            <Text style={styles.buttonText}>Start Animation</Text>
      </Pressable>
            {isPlaying && (
                <LottieView
                source={require('../assets/snow.json')}
                autoPlay
                loop={false}
                style={styles.lottie}
                onAnimationFinish={() => setIsPlaying(false)}
                />
            )}


    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
  productListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
})
