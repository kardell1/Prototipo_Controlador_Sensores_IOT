import { FormLogin } from './components/FormLogin';
export const Login = () => {
  return (
    <section className="fondo flex justify-center min-h-screen  p-5 ">
      <div className="flex flex-col justify-center items-center gap-8 lg:w-[25%] relative ">
        <h1 className="font-bold text-slate-100 py-5 text-4xl ">Invernadero</h1>
        <div className=" w-full">
          <FormLogin />
        </div>
      </div>
    </section>
  );
};
