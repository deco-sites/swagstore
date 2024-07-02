export type Result = { status: string };

export type Props = {count: number}; 
export default async function loader(props: Props): Promise<Result> {
    fetch("https://rich-puma-16.deno.dev/noop?N=" + props.count);
    return {status: "ok"};
}