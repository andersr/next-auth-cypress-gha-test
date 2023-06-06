import { useSession, signIn, signOut } from "next-auth/react";

export function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        Signed in as {session.user?.email} <br />
        <button data-testid="signOutBtn" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div>
      Not signed in <br />
      <button data-testid="signInBtn" onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
}
