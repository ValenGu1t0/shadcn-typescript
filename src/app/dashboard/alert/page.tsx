import { RocketIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

function AlertPage() {

  return (

    <div className="flex flex-col gap-3">
      
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Warning!</AlertTitle>
        <AlertDescription>
          Someone tried to enter your account!
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your account has been created!
        </AlertDescription>
      </Alert>
  
    </div>
  );

}

export default AlertPage;