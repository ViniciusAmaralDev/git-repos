export type Alert = { title?: string; message: string };

export type AlertContext = {
  showAlert: (alert: Alert) => void;
};
