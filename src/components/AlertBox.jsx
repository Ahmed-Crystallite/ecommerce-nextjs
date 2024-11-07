import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/Dialog"

const AlertBox = () => {
  return (
    <Dialog defaultOpen={true}>
      <DialogTrigger className="hidden">Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-1 text-xl leading-tight text-red-700">Please Avoid Sharing Personal Information</DialogTitle>
          <DialogDescription className="text-base text-black leading-normal capitalize">
          This is a sample site intended for visitor engagement and user experience purposes only.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AlertBox
