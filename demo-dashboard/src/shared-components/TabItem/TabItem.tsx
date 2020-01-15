import { FC, ReactNode } from "react";

interface Props {
  title: string;
  value?: number;
  children: ReactNode;
}

// dummy component to force typescript
const TabItem: FC<Props> = () => {
  return null;
};

export default TabItem;
