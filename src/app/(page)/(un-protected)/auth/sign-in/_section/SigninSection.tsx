"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { DetailedHTMLProps, FC, InputHTMLAttributes, useState } from "react";
import { FieldErrors, SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { z } from "zod";

import Icon from "@/libs/icon";
import cn from "@/utils/cn";

const formSchema = z.object({
  username: z.string().min(1, { message: "username is required to login" }),
  password: z.string().min(1, { message: "password is required to login" }),
});

const SigninSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async ({ username, password }, e) => {
    e?.preventDefault();
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
        callbackUrl: `${window.location.origin}`,
      });
      if (res?.ok) window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex w-full max-w-[350px] flex-col overflow-hidden rounded-xl bg-white px-5 pb-10 pt-5"
    >
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-10 flex items-center justify-center bg-[#00000030]"
        >
          <Icon icon="line-md:loading-loop" className="h-16 w-16 animate-spin text-white" />
        </motion.div>
      )}
      <h1 className="text-2xl font-bold">Login</h1>
      <span className="mb-4 font-medium text-zinc-400">please sign in to continue</span>
      <div className="flex w-full flex-col gap-4">
        <Input
          errors={errors}
          placeholder="username"
          icon="material-symbols:person-2-outline"
          name="username"
          register={register}
        />
        <Input
          type="password"
          errors={errors}
          placeholder="password"
          icon="material-symbols:lock-outline"
          name="password"
          register={register}
        />
      </div>
      <button className="mt-8 w-full rounded-lg bg-[#1D3557] py-2.5 text-lg font-bold text-white hover:bg-[#182a41]">
        Login
      </button>
    </form>
  );
};

const Input: FC<
  {
    icon: string;
    name: keyof z.infer<typeof formSchema>;
    register: UseFormRegister<z.infer<typeof formSchema>>;
    errors: FieldErrors<z.infer<typeof formSchema>>;
  } & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ icon, className, register, name, errors, ...props }) => {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      <div className="flex w-full items-center gap-2 rounded-md bg-[#f1f0f1] px-2">
        <div className="h-6 w-6">
          <Icon icon={icon} className="h-full w-full" />
        </div>
        <input
          type="text"
          className={cn("w-full border-none bg-transparent py-3 text-base outline-none", className)}
          {...props}
          {...register(name)}
        />
      </div>
      <div className="text-xs text-red-500 ">{errors[name]?.message ?? <div className="invisible">hidden</div>}</div>
    </div>
  );
};

export default SigninSection;
