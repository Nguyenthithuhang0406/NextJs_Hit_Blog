import { IUser } from "@/app/(Client)/types/user";
import { StaticImageData } from "next/image";

export interface IProps {
  image: StaticImageData,
  title: string,
  description: string,
  user: IUser,
  time: string,
}