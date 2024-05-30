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

export default function renderExample({ nodes, childs }: Props) {
  return <Fox nodes={nodes} childs={childs} name={Math.random() + ""} />;
}
