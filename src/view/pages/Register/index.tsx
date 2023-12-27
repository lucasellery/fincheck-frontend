import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Register() {
	return (
		<>
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">Crie sua conta</h1>

        <p className="space-x-2">
          <span className="text-base text-gray-700 font-normal tracking-[-0.5px]">
            Já possui uma conta?
          </span>

          <Link
            to="/login"
            className="text-teal-900 font-medium tracking-[-0.5px] hover:brightness-125 hover:delay-150"
          >
            Fazer Login
          </Link>
        </p>
      </header>

      <form className="mt-[60px] flex flex-col gap-4">
        <Input type="text" placeholder="Nome" name="name" />
        <Input type="email" placeholder="E-mail" name="email" />
        <Input type="password" placeholder="Senha" name="password" />

        <Button type="submit">
          Criar conta
        </Button>
      </form>
    </>
	)
}
