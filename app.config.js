import 'dotenv/config';

export default
{
  expo: {
    name: "Marvel",
    slug: "Marvel",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra:{
      apiKey: "AIzaSyAQl16s4L6kx-1-3x3_AbqzC2Whx4ow4II",
      authDomain: "marvel-94788.firebaseapp.com",
      projectId: "marvel-94788",
      storageBucket: "marvel-94788.appspot.com",
      messagingSenderId: "318282758810",
      appId: "1:318282758810:web:6d707e69d2121a227dbd23",
      measurementId: "G-X758WZKVSP"
    }
  }
}
