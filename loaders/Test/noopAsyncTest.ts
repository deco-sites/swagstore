import { Result } from "./noopTest.ts";

export default async function loader(): Promise<Result> {
    await fetch("https://rich-puma-16.deno.dev/noop?N=1000000");
    return {status: "ok"};
}