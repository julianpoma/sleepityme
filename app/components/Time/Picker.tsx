import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, { useState } from 'react';
import { IOS, tw } from '../../utils';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IProps {
  onTimeSelected: Function;
  time: string;
}

const TimeScreen: React.FC<IProps> = ({ onTimeSelected, time }) => {
  const [showPicker, setShowPicker] = useState(false);

  const onPickerConfirm = date => {
    setShowPicker(false);
    onTimeSelected(date);
  };

  const onPickerCancel = () => setShowPicker(false);

  return (
    <>
      <TouchableOpacity
        style={styles.timeBox}
        onPress={() => setShowPicker(true)}
      >
        <Text style={styles.timeText}>{time}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        headerTextIOS="Pick a time"
        is24Hour={false}
        isVisible={showPicker}
        minuteInterval={5}
        mode="time"
        onCancel={onPickerCancel}
        onConfirm={onPickerConfirm}
      />
    </>
  );
};

const styles = StyleSheet.create({
  timeBox: {
    borderBottomColor: tw.color.light.gray300,
    borderBottomWidth: tw.borderWidth.border2,
    paddingVertical: tw.padding.p1,
    shadowRadius: 10,
  },
  timeText: {
    color: tw.color.light.primary700,
    fontSize: tw.text.xl5,
    // fontWeight: IOS ? '600' : 'bold',
  },
});

export default TimeScreen;
