import { useEffect } from "react";
import RootRoute from "./root-route";
import supabase from "./lib/supabase";
import { useIsSessioinLoaded, useSetSession } from "./store/session";

export default function App() {
  const setSession = useSetSession();
  const isSessionLoaded = useIsSessioinLoaded();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  if (!isSessionLoaded) return <div>로딩 중...</div>;

  return <RootRoute />;
}
