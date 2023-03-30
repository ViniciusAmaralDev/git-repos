import { useTheme } from "styled-components";
import { Alert, AlertContext } from "./types";
import { Children } from "../../../@types/Children";
import AwesomeAlert from "react-native-awesome-alerts";
import React, { createContext, useContext, useState } from "react";

const Context = createContext({} as AlertContext);

export const AlertProvider = ({ children }: Children) => {
  const theme = useTheme();

  const [alert, setAlert] = useState<Alert>();
  const [isVisible, setIsVisible] = useState(false);

  const showAlert = (alert: Alert) => {
    setAlert({ title: alert.title ?? "Atenção", message: alert.message });
    setIsVisible(true);
  };

  return (
    <>
      <Context.Provider value={{ showAlert }}>{children}</Context.Provider>
      <AwesomeAlert
        show={isVisible}
        title={alert?.title}
        showProgress={false}
        message={alert?.message}
        showConfirmButton={true}
        confirmText="Ok, entendi"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        confirmButtonColor={theme.colors.BLUE}
        onConfirmPressed={() => setIsVisible(false)}
      />
    </>
  );
};

export const useAlert = () => useContext(Context);
