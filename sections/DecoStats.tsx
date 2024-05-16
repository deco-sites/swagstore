import type { GithubResult } from "../loaders/LastCommitGithub.ts";

export interface Props {
  github: GithubResult;
}

export default function (props: Props) {
  return (
    <div>
      <h2>{props.github.owner} - {props.github.repo}</h2>
      <h3>{props.github.lastMessage} / {props.github.lastUpdate}</h3>
    </div>
  );
}
