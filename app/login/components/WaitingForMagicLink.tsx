import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const WaitingForMagicLink = ({
  toggleState,
}: {
  toggleState: () => void;
}) => {
  return (
    <>
      <div className="flex items-center justify-center p-8">
        <div className="flex flex-col gap-4 bg-black border border-neutral-200 p-4 rounded-xl max-w-sm w-full">
          <h1 className="text-xl">Please check your email to continue</h1>
          <div className="flex flex-col gap-2">
            <p className="text-sm">
              We have sent a magic link by email, which provides access to your
              account.
            </p>
            <p className="text-md opacity-60">Tip: check your spam folder. </p>
          </div>
          <div>
            <Button onClick={toggleState} variant="secondary" size="sm">
              <ArrowLeft size={14} />
              Back{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
