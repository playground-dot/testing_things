import { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

export const ImageActionsFooter = ({ favourited }: { favourited: boolean }) => {
    const [imageIsFavourited, setImageIsFavourited] = useState<boolean>(favourited);
    const [downloadButtonPressed, setDownloadButtonPressed] = useState<boolean>(false);

    useEffect(() => {
        setImageIsFavourited(!imageIsFavourited)
    }, [favourited]);

    const handleFavouritePress = () => {
        setImageIsFavourited(!imageIsFavourited)
      };

    const handleDownloadPress = () => {
      setDownloadButtonPressed(!downloadButtonPressed)
    };

    return (
        <View style={styles.footer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handleFavouritePress}
        >
            <Text
              style={{ color: imageIsFavourited ? "green": "red" }}
            >
              {imageIsFavourited ? "favourited": "not favourited"}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handleDownloadPress}
        >
            <Text
              style={{ color: downloadButtonPressed ? "green": "red" }}
            >
              {downloadButtonPressed ? "downloaded": "download"}
            </Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    footer: {
      backgroundColor: "inherit",
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 20,
    },
    iconContainer: {
      padding: 10,
    },
  });