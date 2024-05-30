import { Suggestion } from "apps/commerce/types.ts";


interface Props {
  /**
  * @description The description of name.
  */
  name?: string;

  sug: Suggestion | null;
}

export default function Section({ sug }: Props) {
  return <div>Hello {sug.products?.map(x => x.productID).join(" ")}</div>
}