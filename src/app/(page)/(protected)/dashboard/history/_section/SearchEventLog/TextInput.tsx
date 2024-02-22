import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import Icon from "@/libs/icon";
import cn from "@/utils/cn";

type Props = { icon: string; label: string; iconClassName?: string } & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextInput: FC<Props> = ({ label, icon, iconClassName, ...props }) => {
  return (
    <div className="flex w-full max-w-[200px] flex-col  gap-y-2">
      <h1 className="text-sm font-normal">{label}</h1>

      <div className="group relative">
        <input
          type="text"
          className="w-full rounded-[4px]  bg-[#d9d9d999] px-[10px] py-[6px] text-[14px] focus:outline-blue-500"
          {...props}
        />
        <Icon
          icon={icon}
          className={cn(
            "absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#00000040] transition-transform group-focus-within:rotate-180",
            iconClassName,
          )}
        />
      </div>
    </div>
  );
};

export default TextInput;
