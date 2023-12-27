import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
	return (
		<>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">Entre em sua conta</h1>

        <p className="space-x-2">
          <span className="text-base text-gray-700 font-normal tracking-[-0.5px]">
            Novo por aqui?
          </span>

          <Link
            to="/register"
            className="text-teal-900 font-medium tracking-[-0.5px] hover:brightness-125 hover:delay-150"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form className="mt-[60px] flex flex-col gap-4">
        <Input type="email" placeholder="E-mail" name="email" />
        <Input type="password" placeholder="Senha" name="password" />

        <Button type="submit">
          Entrar
        </Button>
      </form>
    </>
	)
}
