import { Result } from "../../loaders/Test/noopTest.ts";

export interface Props {
  test: Result;
}

export default function Exemplo({ test }: Props) {
  return (
    <div>
      {test.status}
    </div>
  );
}
