export interface Props {
  nodes: number;
  childs: number;
}

const Fox = (
  { nodes, childs, name }: { nodes: number; childs: number; name: string },
) => (
  <>
    {childs
      ? (
        <div className="fox-container">
          {[...Array(nodes)].map((_, index) => (
            <Fox
              nodes={nodes}
              childs={childs - 1}
              name={`Fox ${name} ${childs} ${index + 1}`}
            />
          ))}
        </div>
      )
      : <span>{`${nodes} ${childs} ${name}`}</span>}
  </>
);

export async function loader(props: Props, req: Request) {
  const sleep = parseInt((new URL(req.url)).searchParams.get("sleep") ?? "1");
  await new Promise((resolve) => setTimeout(resolve, sleep * 1000));
  return props;
}

export default function renderExample({ nodes, childs }: Props) {
  return <Fox nodes={nodes} childs={childs} name={Math.random() + ""} />;
}
