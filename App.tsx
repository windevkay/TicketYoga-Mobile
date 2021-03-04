import React, { useState } from "react";
import { View } from "react-native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { AppHeader, CreateEventModal } from "./components";

export default function App() {
  const [loaded] = useFonts({
    antoutline: require("@ant-design/icons-react-native/fonts/antoutline.ttf"),
    antfill: require("@ant-design/icons-react-native/fonts/antfill.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  const [showCreateEventModal, setShowCreateEventModal] = useState<boolean>(
    false
  );
  const openCreateEventModal = () => setShowCreateEventModal(true);
  const cancelCreateEvent = () => setShowCreateEventModal(false);

  return (
    <View>
      <AppHeader openCreateEventModal={openCreateEventModal} />
      <CreateEventModal
        showCreateEventModal={showCreateEventModal}
        cancelCreateEvent={cancelCreateEvent}
      />
    </View>
  );
}
