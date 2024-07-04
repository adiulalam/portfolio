import { createContext } from "react";
import type { ReactNode } from "react";
import type { Profile } from "@/server/db/schema/profile";
import type { ProjectType } from "./ProjectProvider";

export type ProfileType = Profile & { projects?: ProjectType[] };
type ProfileContextType = ProfileType | undefined;

export const ProfileContext = createContext<ProfileContextType>(undefined);

export const ProfileProvider = ({
  children,
  profile,
}: {
  children: ReactNode;
  profile: ProfileContextType;
}) => {
  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};
