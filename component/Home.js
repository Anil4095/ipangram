import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionButton from "react-native-circular-action-menu";

const Home = () => {
  const [overlayVisible, setOverlayVisible] = React.useState(false);
  const Location = require("../images/Trans.png");
  const Profile = require("../images/Profile.png");
  const Rafer = require("../images/rafer.png");
  const Add = require("../images/Add.png");
  const Play = require("../images/Play.png");
  const Sound = require("../images/sound.png");

  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        borderWidth: 1,
        backgroundColor: overlayVisible ? "rgba(0,0,0,0.8)" : "black",
      }}
    >
      <ScrollView>
        <View style={styles.mainHeaderContainer}>
          <View style={styles.headerLeftContainer}>
            <View style={styles.hederInnerLeftContainer}>
              <Image source={Location} style={styles.locationImage} />
            </View>
            <View style={styles.hederLeftTextContainer}>
              <Text style={styles.descriptionText}> Bengaluru</Text>
            </View>
          </View>
          <View style={styles.headerRightContainer}>
            <View style={styles.hederInnerRightContainer}>
              <Image source={Profile} style={styles.profileImage} />
            </View>
            <View style={styles.hederInnerRightContainer}>
              <Image source={Profile} style={styles.profileImage} />
            </View>
          </View>
        </View>
        <View style={styles.mainTextContainer}>
          <View style={styles.mainTextOuterContainer}>
            <View style={styles.mainTextInnerContainer}>
              <Text style={styles.textContainetr}>Logo Design Brief</Text>
            </View>
            <View style={styles.playIconView}>
              <View style={styles.playIcnInnerView}>
                <Image source={Play} style={styles.playIcon} />
              </View>
              <View style={styles.soundIconView}>
                <Image source={Sound} style={styles.soundIcon} />
              </View>
            </View>
          </View>
          <View style={styles.descriptionOuterTextView}>
            <Text style={styles.descriptionText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, but also the leap into electronic
              typesetting, remaining essentially unchanged.{" "}
            </Text>
          </View>
          <View style={styles.descriptionOuterTextView}>
            <Text style={styles.descriptionText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry's
            </Text>
          </View>
        </View>
        <View style={styles.inputTextOuterView}>
          <View style={styles.inputTextInnerView}>
            <View style={styles.textInputIconView}>
              <Image source={Location} style={styles.locationImage} />
            </View>
            <View style={styles.textInputView}>
              <TextInput
                placeholder="Fun, Minimal, Attractive"
                placeholderTextColor="#ffffff"
                style={styles.inputText}
              ></TextInput>
            </View>
          </View>
          <View style={styles.inputTextInnerView}>
            <View style={styles.textInputIconView}>
              <Image source={Location} style={styles.locationImage} />
            </View>
            <View style={styles.textInputView}>
              <TextInput
                placeholder="Any"
                placeholderTextColor="#ffffff"
                style={styles.inputText}
              ></TextInput>
            </View>
          </View>
          <View style={styles.inputTextInnerView}>
            <View style={styles.textInputIconView}>
              <Image source={Location} style={styles.locationImage} />
            </View>
            <View style={styles.textInputView}>
              <TextInput
                placeholder="Logo Design, Food and Beverage"
                placeholderTextColor="#ffffff"
                style={styles.inputText}
              ></TextInput>
            </View>
          </View>
          <View style={styles.inputTextInnerView}>
            <View style={styles.textInputIconView}>
              <Image source={Location} style={styles.locationImage} />
            </View>
            <View style={styles.textInputView}>
              <TextInput
                placeholder="08 aug 2021"
                placeholderTextColor="#ffffff"
                style={styles.inputText}
              ></TextInput>
            </View>
          </View>
          <View style={styles.inputTextInnerView}>
            <View style={styles.textInputIconView}>
              <Image source={Location} style={styles.locationImage} />
            </View>
            <View style={styles.textInputView}>
              <TextInput
                placeholder="08 Sep 2021"
                placeholderTextColor="#ffffff"
                style={styles.inputText}
              ></TextInput>
            </View>
          </View>
        </View>
        <View style={styles.actionButtonMainView}>
          <View style={styles.actionButtonInnerView}>
            <View style={styles.actionButtonView}>
              <ActionButton
                buttonColor="gray"
                onPress={() => setOverlayVisible(!overlayVisible)}
              >
                <ActionButton.Item
                  buttonColor="#3498db"
                  title="Notifications"
                  onPress={() => {
                    console.log("hello");
                  }}
                ></ActionButton.Item>
                <ActionButton.Item
                  buttonColor="#3498db"
                  title="Notifications"
                  onPress={() => {
                    console.log("hello");
                  }}
                ></ActionButton.Item>
                <ActionButton.Item
                  buttonColor="#3498db"
                  title="Notifications"
                  onPress={() => {
                    console.log("hello");
                  }}
                ></ActionButton.Item>
                <ActionButton.Item
                  buttonColor="#3498db"
                  title="Notifications"
                  onPress={() => {
                    console.log("hello");
                  }}
                ></ActionButton.Item>
                <ActionButton.Item
                  buttonColor="#3498db"
                  title="Notifications"
                  onPress={() => {
                    console.log("hello");
                  }}
                ></ActionButton.Item>
                <ActionButton.Item
                  buttonColor="#3498db"
                  title="Notifications"
                  onPress={() => {
                    console.log("hello");
                  }}
                ></ActionButton.Item>
              </ActionButton>
            </View>
            <View style={styles.actionButtonRightIcon}>
              <Image source={Add} style={styles.RaferImage} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainHeaderContainer: {
    borderWidth: 0,
    borderColor: "white",
    width: "100%",
    height: hp(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeftContainer: {
    borderWidth: 0,
    width: "60%",
    height: hp(9),
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hederInnerLeftContainer: {
    width: "25%",
    height: "100%",
    borderWidth: 0,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  hederLeftTextContainer: {
    width: "75%",
    height: hp(9),
    borderWidth: 0,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  locationImage: {
    height: "30%",
    width: "22%",
    backgroundColor: "transparent",
  },
  profileImage: {
    height: "45%",
    width: "60%",
    backgroundColor: "transparent",
  },
  ProfileIcon: {
    borderWidth: 0,

    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
    borderColor: "white",
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    width: "30%",
    height: "100%",
    borderColor: "white",
  },
  hederInnerRightContainer: {
    width: "50%",
    height: "100%",
    borderWidth: 0,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    fontSize: 16,
  },
  RaferImage: {
    height: 55,
    width: 55,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 20,
    color: "white",
  },
  mainTextContainer: {
    borderWidth: 0,
    borderColor: "white",
    height: hp(30),
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textContainetr: { fontSize: 20, fontWeight: "bold", color: "white" },
  mainTextInnerContainer: {
    borderWidth: 0,
    borderColor: "white",
    height: "100%",
    width: "60%",
    justifyContent: "center",
    alignSelf: "center",
  },
  mainTextOuterContainer: {
    borderWidth: 0,
    borderColor: "white",
    height: hp(8),
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
  },
  descriptionText: { color: "white" },
  descriptionOuterTextView: {
    borderWidth: 0,
    borderColor: "white",
    height: hp(14),
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  playIconView: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0,
    borderColor: "white",
    height: "100%",
    width: "35%",
  },
  textInputIconView: {
    borderBottomWidth: 0.5,
    borderColor: "gray",
    height: "100%",
    width: "18%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputTextInnerView: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
    height: hp(8),
    borderColor: "white",
  },
  inputTextOuterView: {
    borderWidth: 0,
    height: hp(40),
    width: "100%",
    borderColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textInputView: {
    borderBottomWidth: 0.5,
    borderColor: "gray",
    height: "100%",
    width: "82%",
    justifyContent: "center",
    alignSelf: "center",
  },
  actionButtonMainView: {
    borderWidth: 0,
    borderColor: "white",
    height: hp(15),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonInnerView: {
    borderWidth: 0,
    borderColor: "white",
    height: "100%",
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionButtonView: {
    borderWidth: 0,
    zIndex: 1,
    borderColor: "white",
    height: "100%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonRightIcon: {
    marginTop: 25,
    borderWidth: 0,
    borderColor: "white",
    height: "100%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  playIcnInnerView: {
    width: "30%",
    height: "100%",
    borderWidth: 0,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  playIcon: {
    height: 25,
    width: 25,
  },
  soundIconView: {
    width: "70%",
    height: "100%",
    borderWidth: 0,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  soundIcon: {
    height: 25,
    width: "100%",
  },
});
export default Home;
