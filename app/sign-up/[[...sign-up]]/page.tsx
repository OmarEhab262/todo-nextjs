import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-[90vh] w-screen items-center justify-center">
      <SignUp afterSignOutUrl={"/"} />;
    </div>
  );
}
