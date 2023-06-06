import { useSession, signIn, signOut } from "next-auth/react";

export function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div data-testid="isSignedIn">
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div data-testid="notSignedIn">
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
