import { View } from "react-native";

export const Spacer = ({ space, children, topSpace, bottomSpace }) => {
  let top = topSpace && { paddingTop: topSpace };
  let bottom = topSpace && { paddingBottom: bottomSpace };

  return (
    <>
      {!children && <View style={{ paddingVertical: space, ...top }} />}
      {children && (
        <>
          <View style={{ paddingTop: space, ...top }} />
          {children}
          <View style={{ paddingBottom: space, ...bottom }} />
        </>
      )}
    </>
  );
};
