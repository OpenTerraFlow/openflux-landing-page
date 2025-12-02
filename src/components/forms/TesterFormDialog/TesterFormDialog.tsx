import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormState = {
  name: string;
  email: string;
};
type TesterFormDialogProps = {
  open: boolean;
  onClose: () => void;
};

const TesterFormDialog = (props: TesterFormDialogProps) => {
  const { open, onClose } = props;

  return (
    <form className="grid gap-4 py-4">
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="Email" />
        </div>
      </div>
    </form>
  );
};

export default TesterFormDialog;
