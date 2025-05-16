"use-client"

import { Button } from "@/components/ui/button"
import { Loader2, MailOpen } from "lucide-react";

function ButtonPage() {

  return (

    <div className="flex flex-row gap-3 w-1/4">
      
        <Button variant="default">Default</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="link">Visit</Button>
        <Button variant="ghost">Option</Button>
        <Button variant="secondary">Accept</Button>

        <Button disabled>
            <Loader2 className="animate-spin" /> Please wait
        </Button>

        <Button>
            <MailOpen /> Login with Email
        </Button>

    </div>
  );

}

export default ButtonPage;