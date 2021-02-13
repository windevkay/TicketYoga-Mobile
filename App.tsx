import React, { useState } from "react";
import { View } from "react-native";

import { AppHeader, CreateEventModal } from "./components";

export default function App() {
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
