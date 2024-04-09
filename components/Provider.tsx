'use client';
import { SessionProvider } from "next-auth/react";

import React, {ReactNode} from "react";

// Define the type for the props
interface ProviderProps {
  session: any; // You can replace 'any' with the actual type of session if available
  children: ReactNode;
}
const Provider = ({ children, session }: ProviderProps) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;
