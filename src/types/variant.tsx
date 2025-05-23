import { Dispatch, SetStateAction } from "react";

export interface VariantProps {
  id: number;
  value: string;
  color: string;
  size: string;
}

export interface VariantProductProps {
  variants: VariantProps | undefined;
  setVariants: Dispatch<SetStateAction<VariantProps | undefined>>;

  thumb: string;
  setThumb: Dispatch<SetStateAction<string>>;
}

export const defaultValueVariantProductProps: VariantProductProps = {
  variants: undefined,
  setVariants: () => {},
  thumb: "",
  setThumb: () => {},
};
