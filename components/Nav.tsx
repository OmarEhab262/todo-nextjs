import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 px-20">
      <SignedIn>
        <ModeToggle />
        <UserButton />
      </SignedIn>
      <SignedOut></SignedOut>
    </nav>
  );
};

export default Nav;
