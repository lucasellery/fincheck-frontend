import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Informe um e-mail váildo"),
  // password: z.string().min(8, "Username must be at least 8 character"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "A senha deve conter pelo menos 8 dígitos"),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    // presumir que os dados do form estão válidos
    console.log("Chama a API com: ", data);
  });

  return { handleSubmit, register, errors };
}
