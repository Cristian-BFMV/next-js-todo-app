import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CreateUserFormSuccessProps {
  handleCloseModal: () => void;
  open: boolean;
}

export const CreateUserFormSuccess = ({
  handleCloseModal,
  open,
}: CreateUserFormSuccessProps) => {
  return (
    <Dialog onOpenChange={handleCloseModal} open={open}>
      <DialogContent className="flex justify-center gap-12 h-80 flex-col">
        <DialogHeader>
          <DialogTitle className="text-slate-900 text-center">
            La cuenta de usuario ha sido creada
          </DialogTitle>
          <DialogDescription className="text-slate-500">
            ¡Bienvenido a TodoApp! Vamos a completar las tareas, una a la vez.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="grid grid-cols-1 items-center">
          <Button onClick={handleCloseModal}>Empezar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
