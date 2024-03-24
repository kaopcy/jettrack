import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";

import cn from "@/utils/cn";

export const Header: FC<
  { children: ReactNode } & DetailedHTMLProps<HTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>
> = ({ children, className, ...props }) => {
  return (
    <th {...props} className={cn("border-b-2 p-4 pt-0 text-center font-semibold", className)}>
      {children}
    </th>
  );
};

export const Row: FC<
  { children: ReactNode } & DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>
> = ({ children, className, ...props }) => {
  return (
    <tr {...props} className={cn("py-4 even:bg-[#EDEBEB]", className)}>
      {children}
    </tr>
  );
};

export const Column: FC<
  { children: ReactNode } & DetailedHTMLProps<HTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>
> = ({ children, className, ...props }) => {
  return (
    <td {...props} className={cn("p-4 text-center", className)}>
      {children}
    </td>
  );
};
