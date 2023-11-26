import { MMKV } from "react-native-mmkv";

export const mmkvDatabase = new MMKV({
  id: `git-repos`,
  encryptionKey: "hunter2",
  path: `git-repos/database`,
});
