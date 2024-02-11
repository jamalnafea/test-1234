import { UserButton } from "@clerk/nextjs";

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-purple-600 py-4">
      <div className="w-10/12 mx-auto  flex justify-between items-center">
        <Link href={"/"}>
          <h4 className="text-white text-2xl font-bold flex items-center">
            Clerk is Awesome
          </h4>
        </Link>

        <div>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
}
