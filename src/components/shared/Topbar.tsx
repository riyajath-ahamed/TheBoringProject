import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logoTransWt.png" alt="logo" width={30} height={30} />

        {/* Adding an aanimation on hove to see the whole name and set TBP ass default */}
        <p className="text-heading3-bold text-light-1 max-xs:hidden">The Boring Project</p>
        
      </Link>

      <div className="flex text-light-1 items-center gap-1">
        <div className="block md:hidden">
            <SignedIn>
               <SignOutButton>
                <div className="flex cursor-pointer">


                </div>
               </SignOutButton>
            </SignedIn>

        </div>

        <OrganizationSwitcher
            appearance={{
                elements: {
                    organizationSwitcherTrigger : "py-2 px-4"
                }
            }}

        />

      </div>
    </nav>
  );
}

export default Topbar;
