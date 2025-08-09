import { useMutation } from "@tanstack/react-query";
import { useServices } from "@hooks";
import type { ICreateMessageInput } from "@domain";

const useCreateMessage = () => {
  const { messageService } = useServices();

  const mutation = useMutation({
    mutationKey: ["createMessage"],
    mutationFn: (data: ICreateMessageInput) =>
      messageService.createMessage(data),
  });

  return mutation;
};

export default useCreateMessage;
