import React from "react";
import { Modal, View, Button } from "react-native";

import { messages } from "./messages";
import { styles } from "./styles";

interface Props {
  showCreateEventModal: boolean;
  cancelCreateEvent: () => void;
}

export const CreateEventModal = ({
  showCreateEventModal,
  cancelCreateEvent,
}: Props) => {
  const cancelButtonHandler = () => {
    cancelCreateEvent();
  };

  return (
    <Modal visible={showCreateEventModal} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.button}>
          <Button
            title={messages.CANCEL_BUTTON_TITLE}
            onPress={cancelButtonHandler}
            color="red"
          />
        </View>
      </View>
    </Modal>
  );
};
