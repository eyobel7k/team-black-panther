import EditProfile from "./EditProfile";
import Footer from "./Footer";
import Friends from "./Friends";
import Header from "./Header";
import HeaderLogPage from "./HeaderLogPage";
import Home from "./Home";
import Images from "./Images";
import LogInPage from "./LogInPage";
import Message from "./Message";
import Newsfeed from "./Newsfeed";
import PasswordReset from "./PasswordReset";
import Profile from "./Profile";
import ResetPasswordPage from "./ResetPasswordPage";
import SignUpPage from "./SignUpPage";
import ThemeLoggedIn from "./ThemeLoggedIn";
import ThemeLoggedOut from "./ThemeLoggedOut";
import Terms from "./Terms";
import Rule from "./Rule";
import About from "./About";
import Contact from "./Contact";
import Chat from "./Chat";
import { AppRegistry, Platform } from "react-native";
import App from "../App";

AppRegistry.registerComponent("main", () => App);

if (Platform.OS === "web") {
  const rootTag =
    document.getElementById("root") || document.getElementById("main");
  AppRegistry.runApplication("main", { rootTag });
}

export {
  EditProfile,
  Footer,
  Friends,
  Header,
  HeaderLogPage,
  Home,
  Images,
  LogInPage,
  Message,
  Newsfeed,
  PasswordReset,
  Profile,
  ResetPasswordPage,
  SignUpPage,
  ThemeLoggedIn,
  ThemeLoggedOut,
  Terms,
  Rule,
  About,
  Contact,
  Chat,
};
