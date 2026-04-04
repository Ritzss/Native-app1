import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";

const { width } = Dimensions.get("window");

const product = {
  name: "Pure Brass Bottle",
  description: "Designed to support natural hydration.",
  price: 52.99,
  features: ["Handcrafted", "100% Pure Brass", "Plastic-Free"],
  variants: [
    {
      capacity: 500,
      images: [require("../Assets/Images/image.png")],
    },
    {
      capacity: 750,
      images: [require("../Assets/Images/image.png"),require("../Assets/Images/image.png")],
    },
    {
      capacity: 1000,
      images: [require("../Assets/Images/image.png"),require("../Assets/Images/image.png"),require("../Assets/Images/image.png")],
    },
  ],
};

export default function ProductScreen() {
  const [variant, setVariant] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const active = product.variants[variant];

  return (
    <ScrollView style={styles.container}>
      {/* IMAGE */}
      <FlatList
        data={active.images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const i = Math.round(
            e.nativeEvent.contentOffset.x / width
          );
          setCurrentImage(i);
        }}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />

      {/* DOTS */}
      <View style={styles.dots}>
        {active.images.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === currentImage && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* INFO CARD */}
      <View style={styles.card}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.desc}>{product.description}</Text>

        {/* VARIANTS */}
        <View style={styles.variantRow}>
          {product.variants.map((v, i) => (
            <Pressable
              key={i}
              onPress={() => setVariant(i)}
              style={[
                styles.variant,
                i === variant && styles.variantActive,
              ]}
            >
              <Text>{v.capacity}ml</Text>
            </Pressable>
          ))}
        </View>

        {/* PRICE */}
        <Text style={styles.price}>${product.price}</Text>

        {/* BUTTONS */}
        <View style={styles.btnRow}>
          <Pressable style={styles.cart}>
            <Text style={styles.cartText}>Add to Cart</Text>
          </Pressable>
          <Pressable style={styles.buy}>
            <Text style={styles.buyText}>Buy Now</Text>
          </Pressable>
        </View>

        {/* FEATURES */}
        <View style={styles.features}>
          {product.features.map((f, i) => (
            <Text key={i} style={styles.feature}>
              • {f}
            </Text>
          ))}
        </View>
      </View>

      {/* QUOTE */}
      <Text style={styles.quote}>
        “Designed to support natural hydration while reducing waste.”
      </Text>

      {/* BENEFITS CARD */}
      <View style={styles.benefits}>
        <Text style={styles.benefitTitle}>
          Health & Wellness Benefits
        </Text>

        <Text style={styles.benefitItem}>
          ✔ Better digestion support
        </Text>
        <Text style={styles.benefitItem}>
          ✔ Antibacterial properties
        </Text>
        <Text style={styles.benefitItem}>
          ✔ Keeps water fresh
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f2dd",
  },

  imageWrapper: {
    alignItems: "center",
    display:"flex",
    justifyContent:"center",
    marginVertical: 20,
    margin:16
  },

  image: {
    width: width * 0.8,
    height: 350,
    borderRadius: 25,
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#ccc",
    margin: 5,
  },

  activeDot: {
    backgroundColor: "#889551",
  },

  card: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 20,
    borderRadius: 20,
    elevation: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  desc: {
    marginVertical: 5,
    color: "#555",
  },

  variantRow: {
    flexDirection: "row",
    marginVertical: 10,
  },

  variant: {
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },

  variantActive: {
    borderWidth: 2,
    borderColor: "#889551",
  },

  price: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: "600",
  },

  btnRow: {
    flexDirection: "row",
  },

  cart: {
    flex: 1,
    backgroundColor: "#889551",
    padding: 15,
    marginRight: 10,
    borderRadius: 30,
  },

  buy: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#889551",
    padding: 15,
    borderRadius: 30,
  },

  cartText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  buyText: {
    textAlign: "center",
    color: "#889551",
    fontWeight: "bold",
  },

  features: {
    marginTop: 15,
  },

  feature: {
    marginVertical: 2,
  },

  quote: {
    textAlign: "center",
    margin: 20,
    color: "#889551",
    fontStyle: "italic",
  },

  benefits: {
    backgroundColor: "#e4e198",
    margin: 15,
    padding: 20,
    borderRadius: 20,
  },

  benefitTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  benefitItem: {
    marginVertical: 4,
  },
});