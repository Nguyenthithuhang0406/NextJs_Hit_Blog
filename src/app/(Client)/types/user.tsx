import { StaticImageData } from "next/image";

export interface IUser {
  avatar: StaticImageData,
  name: string,
  status: boolean,
};