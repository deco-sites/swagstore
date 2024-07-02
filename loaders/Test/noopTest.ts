export type Result = { status: string };

export default async function loader(): Promise<Result> {
    fetch("https://rich-puma-16.deno.dev/noop?N=1000000");
    return {status: "ok"};
}