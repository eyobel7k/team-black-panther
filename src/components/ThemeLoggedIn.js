import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function ThemeLoggedIn({
  children,
  navigation,
  scrollToTop,
  scrollToTopFromNewsfeed,
}) {
  const { width } = useWindowDimensions();
  const widthBreakpoint = 700;

  const scroll = useRef(null);

  if (scrollToTop || scrollToTopFromNewsfeed) {
    scroll.current.scrollTo({ x: 0, y: 0, animated: true });
  }

  return (
    <View style={styles.container} navigation={navigation}>
      <View style={styles.Header}>
        <Header navigation={navigation} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContentContainer}
        ref={scroll}
      >
        {children}

        {width < widthBreakpoint && (
          <View style={styles.Footer}>
            <Footer navigation={navigation} />
          </View>
        )}
      </ScrollView>

      {width >= widthBreakpoint && (
        <View style={styles.Footer}>
          <Footer navigation={navigation} />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    borderTopWidth: 2,
    borderColor: "#D3D3D3",
  },
  scrollContentContainer: {
    justifyContent: "space-between",
    paddingTop: "5%",
    paddingBottom: "50%",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#efd595",
  },
  text: {
    margin: 5,
    fontSize: 24,
    fontWeight: "100",
    // fontFamily: "Serif",
  },
  Header: {
    height: "20%",
    top: 0,
  },
  Footer: {
    height: "20%",
    bottom: 0,
  },
});

export default ThemeLoggedIn;
