import type { Section } from "deco/blocks/section.ts";
import Faq from "./Content/Faq.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Props {
    coisas: Section[];
    current?: number;
}

export default function Exemplo({ coisas, current }: Props) {
    const coisa = coisas[current ?? 0];
    return (
        <div>
            <coisa.Component {...coisa.props} />
            <button
                  class="btn cursor-pointer w-4 h-2 absolute"
                  {...usePartialSection({ 
                    props: {current: (current ?? 0) + 1 },
                    mode: "replace",
                  })}
                >
                  Show More
                </button>
        </div>
    );
}