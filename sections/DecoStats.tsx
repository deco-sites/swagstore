import type { GithubResult } from "../loaders/LastCommitGithub.ts";

export interface Props {
  github: GithubResult;
}

export default function (props: Props) {
  return (
    <div class="bg-gray-200 p-4 rounded-lg">
      <h2 class="text-xl font-bold mb-2">
        {props.github.owner} - {props.github.repo}
      </h2>
      <h3 class="text-lg">
        {props.github.lastMessage} / {props.github.lastUpdate}
      </h3>
    </div>
  );
}
