import React from "react";
import { View, Image } from "react-native";
import Button from "@ant-design/react-native/lib/button";

import { appHeaderStyles } from "./styles";

interface Props {
  openCreateEventModal: () => void;
}

export const AppHeader = ({ openCreateEventModal }: Props) => {
  const createEventButtonHandler = () => openCreateEventModal();

  return (
    <View style={appHeaderStyles.header}>
      <View style={appHeaderStyles.headerItems}>
        <Image
          source={require("./assets/tylogo.png")}
          style={appHeaderStyles.logo}
        />
        <View style={appHeaderStyles.headerButtons}>
          <Button
            type="primary"
            style={appHeaderStyles.ctaButton}
            onPress={createEventButtonHandler}
          >
            Create Event
          </Button>
        </View>
      </View>
    </View>
  );
};
