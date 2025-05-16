"use-client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"


function AlertDialogPage() {

  return (

    <AlertDialog>

      <AlertDialogTrigger asChild>
        <Button variant="outline">About Us</Button>
      </AlertDialogTrigger>


      <AlertDialogContent>

        <AlertDialogHeader>
          <AlertDialogTitle>Welcome! We are MUI Enterprise!</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>

  )
}

export default AlertDialogPage;