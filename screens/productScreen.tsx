



/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');

// !🔥 IMPORTANT: React Native needs static require
const img = require('../Assets/Images/image.png');

// *Product
// export const product = {
//   Productid: 'bb1',
//   name: 'Pure Brass Bottle',
//   description:
//     'Experience the ancient wisdom of Ayurveda with our handcrafted brass water bottle.',

//   category: 'bottles',
//   subcategory: 'brass bottles',

//   variants: [
//     {
//       images: [img, img, img],
//       capacity: 250,
//       weight: 210,
//       price: 21.99,
//       color: 'Antique Gold',
//       mrp: 26.99,
//     },
//     {
//       images: [img, img],
//       capacity: 500,
//       weight: 280,
//       price: 31.99,
//       color: 'Antique Gold',
//       mrp: 36.99,
//     },
//     {
//       images: [img],
//       capacity: 750,
//       weight: 380,
//       price: 41.99,
//       color: 'Antique Gold',
//       mrp: 46.99,
//     },
//     {
//       images: [img, img, img, img],
//       capacity: 1000,
//       weight: 480,
//       price: 51.99,
//       color: 'Antique Gold',
//       mrp: 56.99,
//     },
//   ],

//   details: {
//     features: [
//       'Solid Brass Construction',
//       'Handcrafted Hammered Texture',
//       'Leak-Proof Screw Cap',
//       'Reusable & Eco-Friendly',
//       'Traditional Ayurvedic Storage',
//     ],
//     material: 'Pure Brass',
//     finish: 'Hammered Matte Metallic',
//     design: 'Textured Grip Pattern',
//     sustainability: 'Reusable',
//     care: [
//       'Clean with lemon and salt to maintain shine',
//       'Do not use in dishwasher',
//       'Avoid storing acidic liquids',
//       'Dry thoroughly after washing',
//     ],
//   },
// };

// *🔥 Similar Products

// export const similarProducts = [
//   {
//     Productid: 'bt1',
//     name: 'Pure Brass Tumbler',
//     description: 'Traditional brass tumbler for daily hydration.',
//     category: 'Drinkware',
//     subcategory: 'Brass Tumblers',

//     variants: [
//       {
//         images: [img],
//         capacity: 300,
//         weight: 220,
//         price: 24.99,
//       },
//       {
//         images: [img],
//         capacity: 450,
//         weight: 260,
//         price: 29.99,
//       },
//     ],

//     details: {
//       material: 'Pure Brass',
//       finish: 'Polished Metallic',
//       design: 'Minimal',
//       sustainability: 'Reusable',
//       features: ['Traditional Drinkware', 'Durable Build', 'Eco Friendly'],
//       care: ['Hand wash only', 'Dry after washing'],
//     },
//   },

//   {
//     Productid: 'bj1',
//     name: 'Hammered Brass Jug',
//     description: 'Serve water with this handcrafted brass jug.',
//     category: 'Drinkware',
//     subcategory: 'Brass Jugs',

//     variants: [
//       {
//         images: [img],
//         capacity: 1200,
//         weight: 650,
//         price: 59.99,
//       },
//       {
//         images: [img],
//         capacity: 1500,
//         weight: 720,
//         price: 69.99,
//       },
//     ],

//     details: {
//       material: 'Pure Brass',
//       finish: 'Hammered Antique',
//       design: 'Jug with Handle',
//       sustainability: 'Reusable',
//       features: ['Ergonomic Handle', 'Elegant Design'],
//       care: ['Avoid dishwasher', 'Dry properly'],
//     },
//   },

//   {
//     Productid: 'fb1',
//     name: 'Brass Copper Fusion Bottle',
//     description: 'Fusion of brass & copper for premium hydration.',
//     category: 'bottles',
//     subcategory: 'fusion bottles',

//     variants: [
//       {
//         images: [img],
//         capacity: 750,
//         weight: 420,
//         price: 54.99,
//       },
//       {
//         images: [img],
//         capacity: 1000,
//         weight: 480,
//         price: 64.99,
//       },
//     ],

//     details: {
//       material: 'Brass + Copper',
//       finish: 'Hammered',
//       design: 'Fusion Bottle',
//       sustainability: 'Reusable',
//       features: ['Premium Build', 'Health Benefits'],
//       care: ['Use lemon cleaning', 'Dry after wash'],
//     },
//   },
// ];

//* ==============================APP Starting==================================

const DetailPage = ({ route, navigation }: any) => {
  const { product: productProp, similarProduct } = route.params || {};
  const [variant, setVariant] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [showCare, setShowCare] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const variantActive = productProp?.variants?.[variant];
  const images = variantActive?.images || [];

  const nextImage = () => {
    setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const features = [
    {
      icon: img,
      title: 'Supports Better Digestion Process',
      desc: 'Naturally infused water may aid the digestive process',
    },
    {
      icon: img,
      title: 'Naturally Antibacterial Properties',
      desc: 'Brass has inherent antimicrobial properties',
    },
    {
      icon: img,
      title: 'Helps Maintain Water Freshness',
      desc: 'Natural properties keep water pure and clean',
    },
    {
      icon: img,
      title: 'Rooted in Traditional Wellness Practices',
      desc: 'Inspired by ancient Ayurvedic wisdom',
    },
  ];

  const whyText = [
    'Brass is a natural copper-zinc alloy that has been used in traditional wellness practices for thousands of years, valued for its unique mineral properties.',
    'Storing water in brass vessels is rooted in Ayurvedic traditions, where the subtle interactions between water and metal are believed to support balance and vitality.',
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* IMAGE SLIDER */}
        <View style={styles.slider}>
          <FlatList
            horizontal
            pagingEnabled
            data={images}
            keyExtractor={(_, i) => i.toString()}
            onMomentumScrollEnd={e => {
              const index = Math.round(e.nativeEvent.contentOffset.x / width);
              setCurrentImage(index);
            }}
            renderItem={({ item }) => (
              <Image source={item} style={styles.image} />
            )}
          />

          <TouchableOpacity style={styles.leftArrow} onPress={prevImage}>
            <Text>{'<'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rightArrow} onPress={nextImage}>
            <Text>{'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* DOTS */}
        <View style={styles.dots}>
          {images.map((_: any, i: any) => (
            <View
              key={i}
              style={[styles.dot, i === currentImage && styles.activeDot]}
            />
          ))}
        </View>

        {/* PRODUCT INFO */}
        <View style={styles.info}>
          <Text style={styles.title}>{productProp?.name}</Text>
          <Text style={styles.description}>{productProp?.description}</Text>

          <Text style={styles.label}>
            Capacity: {variantActive?.capacity}ml
          </Text>

          {/* VARIANTS */}
          <View style={styles.row}>
            {productProp?.variants?.map((v: any, i: any) => (
              <TouchableOpacity
                key={i}
                onPress={() => setVariant(i)}
                style={[styles.variant, i === variant && styles.activeVariant]}
              >
                <Text
                  style={[
                    styles.variantText,
                    i === variant && styles.activeText,
                  ]}
                >
                  {v.capacity}ml
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.price}>${variantActive?.price}</Text>

          {/* BUTTONS */}
          {/* <View style={styles.row}>
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={{ color: '#fff' }}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buyBtn}>
            <Text>Buy Now</Text>
          </TouchableOpacity>
        </View> */}
        </View>

        <View>
          {/* Quote */}
          <Text style={styles.quote}>
            "Designed to support natural hydration{'\n'}
            while reducing everyday waste."
          </Text>

          {/* Health & Wellness */}
          <View style={styles.healthContainer}>
            <Text style={styles.healthTitle}>Health & Wellness Benefits</Text>

            <View style={styles.card2}>
              {features.map((item, index) => (
                <View key={index} style={styles.featureBox}>
                  <Image source={item.icon} style={styles.icon} />
                  <View style={styles.titlebox}>
                    <Text style={styles.featureTitle}>{item.title}</Text>

                    <Text style={styles.featureDesc}>{item.desc}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Why Brass */}
          <View style={styles.whyContainer}>
            <View style={styles.whyTextContainer}>
              <Text style={styles.whyTitle}>Why Brass ?</Text>

              {whyText.map((text, i) => (
                <View key={i} style={styles.whyRow}>
                  <View style={styles.verticalLine} />
                  <Text style={styles.whyDesc}>{text}</Text>
                </View>
              ))}
            </View>

            {width > 768 && (
              <Image
                source={require('../Assets/Images/image.png')}
                style={styles.sideImage}
              />
            )}
          </View>
        </View>

        {/* ACCORDIONS */}
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => setShowDetails(!showDetails)}
            style={styles.specsBox}
          >
            <Text style={styles.sectionTitle}>Specifications</Text>
            {showDetails && (
              <View style={styles.specs}>
                <Text>Material: {productProp?.details?.material}</Text>
                <Text>Finish: {productProp?.details?.finish}</Text>
                <Text>Weight: {variantActive?.weight}g</Text>
                <Text>Design: {productProp?.details?.design}</Text>
                <Text>
                  Sustainability: {productProp?.details?.sustainability}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* {showDetails && (
          <View style={styles.specs}>
            <Text>Material: {productProp?.details?.material}</Text>
            <Text>Finish: {productProp?.details?.finish}</Text>
            <Text>Weight: {variantActive?.weight}g</Text>
            <Text>Design: {productProp?.details?.design}</Text>
            <Text>Sustainability: {productProp?.details?.sustainability}</Text>
          </View>
        )} */}
        </View>

        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => setShowFeatures(!showFeatures)}
            style={styles.specsBox}
          >
            <Text style={styles.sectionTitle}>Features</Text>
            {showFeatures && (
              <View style={styles.specs}>
                {productProp?.details?.features?.map((f: any, i: any) => (
                  <Text key={i}>• {f}</Text>
                ))}
              </View>
            )}
          </TouchableOpacity>

          {/* {showFeatures && (
          <View style={styles.specs}>
            {productProp?.details?.features?.map((f: any, i: any) => (
              <Text key={i}>• {f}</Text>
            ))}
          </View>
        )} */}
        </View>

        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => setShowCare(!showCare)}
            style={styles.specsBox}
          >
            <Text style={styles.sectionTitle}>Care</Text>
            {showCare && (
              <View style={styles.specs}>
                {productProp?.details?.care?.map((c: any, i: any) => (
                  <Text key={i}>• {c}</Text>
                ))}
              </View>
            )}
          </TouchableOpacity>

          {/* {showCare && (
          <View style={styles.specs}>
            {productProp?.details?.care?.map((c: any, i: any) => (
              <Text key={i}>• {c}</Text>
            ))}
          </View>
        )} */}
        </View>

        {/* Sustainability & Eco Impact */}
        <View style={styles.container2}>
          <View style={styles.inner}>
            <Text style={styles.heading}>Sustainability & Eco Impact</Text>

            <Text style={styles.subHeading}>
              Every conscious choice contributes to a healthier planet.
            </Text>

            <View style={styles.highlightBox}>
              <Text style={styles.highlightText}>
                Choosing a brass bottle means choosing to reduce waste, honor
                tradition, and invest in a product that serves you and the Earth
                for years to come.
              </Text>
            </View>
          </View>
        </View>

        {/* SIMILAR PRODUCTS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle2}>You May Also Like</Text>
          <FlatList
            horizontal
            data={similarProduct}
            keyExtractor={item => item.Productid}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View>
                  <Image
                    source={item?.variants?.[0]?.images?.[0]}
                    style={styles.cardImg}
                  />
                  <Text style={styles.cardText}>{item.name}</Text>
                </View>
                <TouchableOpacity style={styles.cartBtn2}>
                  <Text style={{ color: '#fff' }}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
      {/* 🔥 FIXED BOTTOM BUTTONS */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.cartBtn}>
          <Text style={{ color: '#fff' }}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyBtn}>
          <Text>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  slider: { position: 'relative' },
  image: { width: 385, height: 550, borderRadius: 20, margin: 2 },
  leftArrow: { position: 'absolute', left: 10, top: '50%' },
  rightArrow: { position: 'absolute', right: 10, top: '50%' },

  dots: { flexDirection: 'row', justifyContent: 'center', margin: 10 },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    margin: 4,
  },

  specsBox: {
    backgroundColor: '#e4e198',
    borderRadius: 12,
    boxShadow: '5px 5px 2px #0000003d',
  },

  activeDot: { backgroundColor: '#889551' },

  info: { padding: 10, fontFamily: 'Inter' },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    color: '#889551',
  },
  description: { fontSize: 18, marginRight: 33 },
  label: { marginTop: 25, fontFamily: 'Inter', fontSize: 18 },

  specs: {
    lineHeight: 32,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    padding: 12,
    paddingInline: 22,
    backgroundColor: '#e4e198',
    marginInline: 7,
  },

  row: { flexDirection: 'row', gap: 10, marginTop: 10 },

  variantText: { color: '#979797d2' },
  activeText: { color: '#889551' },

  variant: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    borderColor: '#979797d2',
  },

  activeVariant: { borderWidth: 2, borderColor: '#889551' },

  price: { fontSize: 24, marginTop: 10 },

  // cartBtn: {
  //   backgroundColor: '#889551',
  //   padding: 10,
  //   flex: 1,
  //   alignItems: 'center',
  //   borderRadius: 20,
  // },
  // buyBtn: {
  //   backgroundColor: '#E4E198',
  //   padding: 10,
  //   flex: 1,
  //   alignItems: 'center',
  //   borderRadius: 20,
  // },

  section: { marginTop: 20 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 2,
    backgroundColor: '#e4e198',
    padding: 12,
    borderRadius: 10,
  },
  sectionTitle2: { fontSize: 18, fontWeight: 'bold', margin: 2 },

  card: {
    width: 150,
    marginBottom: 103,
    marginRight: 10,
    height: 300,
    paddingBottom: 3,
    borderRadius: 20,
    backgroundColor: '#e4e198',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  cardImg: { width: '100%', height: 200, marginBottom: 5, borderRadius: 20 },
  cardText: {
    marginInline: 8,
  },

  container2: {
    width: '100%',
  },
  inner: {
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 16,
  },
  heading: {
    textAlign: 'center',
    fontSize: 30, // approx md:text-6xl fallback
    color: '#000000',
    marginTop: 22,
  },
  subHeading: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '300',
    color: '#000000',
    marginInline: 28,
  },
  highlightBox: {
    backgroundColor: '#889551',
    padding: 16,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderRadius: 8,
  },
  highlightText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },

  quote: {
    textAlign: 'center',
    color: '#889551',
    width: '100%',
    fontSize: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  healthContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  healthTitle: {
    fontSize: width > 768 ? 40 : 28,
    textAlign: 'center',
    marginBottom: 10,
  },

  card2: {
    backgroundColor: '#e4e198',
    width: '85%',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    elevation: 5,
  },

  featureBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginBlock: 8,
    gap: 8,
  },

  titlebox: {
    width: '85%',
  },

  icon: {
    width: '10%',
    height: 25,
    marginBottom: 5,
  },

  featureTitle: {
    color: '#889551',
    fontSize: 16,
    fontWeight: 'bold',
  },

  featureDesc: {
    color: '#00000090',
    fontWeight: '300',
    marginTop: 4,
  },

  whyContainer: {
    flexDirection: width > 768 ? 'row' : 'column',
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
  },

  whyTextContainer: {
    flex: 1,
  },

  whyTitle: {
    fontSize: width > 768 ? 32 : 24,
    color: '#889551',
    marginBottom: 10,
  },

  whyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  verticalLine: {
    width: 6,
    height: '80%',
    backgroundColor: '#889551',
    borderRadius: 10,
    marginRight: 10,
  },

  whyDesc: {
    flex: 1,
    color: '#00000090',
  },

  sideImage: {
    width: 310,
    height: 353,
    marginLeft: 10,
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },

  cartBtn: {
    flex: 1,
    backgroundColor: '#889551',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 5,
  },

  cartBtn2: {
    backgroundColor: '#889551',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
    marginInline: 'auto',
  },

  buyBtn: {
    flex: 1,
    backgroundColor: '#E4E198',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 5,
  },
});
