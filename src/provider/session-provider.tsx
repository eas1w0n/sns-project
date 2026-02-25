import GlobalLoader from "@/components/globall-loader";
import { useProfileData } from "@/hooks/queries/use-profile-data";
import supabase from "@/lib/supabase";
import {
  useIsSessioinLoaded,
  useSession,
  useSetSession,
} from "@/store/session";
import { useEffect, type ReactNode } from "react";

export default function SessionProvider({ children }: { children: ReactNode }) {
  const session = useSession();
  const setSession = useSetSession();
  const isSessionLoaded = useIsSessioinLoaded();

  const { data: profile, isLoading: isProfileLoading } = useProfileData(
    session?.user.id,
  );

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  if (!isSessionLoaded) return <GlobalLoader />;
  if (isProfileLoading) return <GlobalLoader />;

  return children;
}
