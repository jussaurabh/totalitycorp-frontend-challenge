import { Session } from "@supabase/supabase-js";
import { createContext } from "react";

export const UserAuthContext = createContext<Session | null>(null);
