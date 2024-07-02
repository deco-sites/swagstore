export type Result = { status: string };

export default async function loader(_props: unknown, req: Request, _ctx: unknown): Promise<Result> {
    await fetch("https://rich-puma-16.deno.dev/noop?N=" + (new URL(req.url)).searchParams.get("N"));
    return {status: "ok"};
}