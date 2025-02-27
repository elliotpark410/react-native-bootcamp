/* eslint-disable max-len */
import { View, Image, ScrollView } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";

import { ScreenContainer } from "~/components/ScreenContainer";
import { ButtonOpinion } from "~/components/ButtonOpinion";

interface Props {
  navigation: any;
}

export const DisappointedScreen = ({ navigation }: Props) => {
  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer
      title=""
      withGoBack
      accessoryFooter={
        <View style={{ padding: 24, marginBottom: 12 }}>
          <ButtonOpinion />
          <Button onPress={handleCancel} mode="text">
            Not now
          </Button>
        </View>
      }
    >
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmM2ZjZiZWIxODg0ODJiNmU0MjQwYWI2OTU3NGQ5OGEyNzZkYzdmYSZjdD1n/2mMOygvfZpM15SzLBD/giphy.gif",
          }}
          style={{ width: "100%", height: 160 }}
        />
        <View style={{ padding: 16 }}>
          <Text variant="headlineLarge" style={{ marginVertical: 24 }}>
            We are so sorry…
          </Text>
          <Text variant="bodyLarge">
            …that we disappointed you! Help us know how we can improve our
            service by answering this survey.
          </Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};
