import Nav from "@/components/navbar";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-8 shadow-md rounded-lg">
          <SignUp path="/sign-up" />
        </div>
      </div>
    </>
  );
}
