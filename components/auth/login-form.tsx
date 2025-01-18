import {
  ArrowRightIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { Button } from "../ui/button";
import { LINKS } from "@/lib/constants";
import Link from "next/link";

import { openSans } from "@/components/ui/fonts";
import TextInput from "../ui/text-input";

export default function LoginForm() {
  return (
    <form className="space-y-3 px-6">
      <div className="flex-1 rounded-lg backdrop-filter px-6 pb-4">
        <div
          className={`${openSans.className} font-bold mb-3 uppercase text-center gradient-background rounded-b-full py-4`}
        >
          <h2 className="bg-clip-text bg-gradient-to-br from-primary to-red-900 text-transparent">
            Login
          </h2>
        </div>
        <div className="grid gap-6 my-10">
          <TextInput name="email" type="email" icon={<UserIcon />} />
          <TextInput
            name="password"
            type="password"
            icon={<LockClosedIcon />}
          />
        </div>
        <Button className="btn-outline w-full rounded-full py-4 relative hover:btn-primary">
          <p className="text-sm">Log in</p>
          <ArrowRightIcon  className="absolute right-6 h-8" />
        </Button>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-muted">Don't have an account?</p>
          <Link href={LINKS.createAccount} as="create-account">
            <Button variant="link" className="text-primary p-0 h-auto italic">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
}
