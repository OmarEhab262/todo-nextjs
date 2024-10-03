import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-[90vh] w-screen items-center justify-center">
      <SignIn afterSignOutUrl={"/"} />
    </div>
  );
}
