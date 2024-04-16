import { atom } from "recoil";

export const rolesAuth = atom({
  key: "rolesAuth",
  default: {
    isUser: false,
    isMod: false,
    isAdmin: false
  },
});