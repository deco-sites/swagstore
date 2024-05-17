export interface GithubResult {
  owner: string;
  repo: string;
  lastUpdate: string;
  lastMessage: string;
}

interface Props {
  owner: string;
  repo: string;
}

const getLastCommit = async (owner: string, repo: string) => {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits`,
    {
      headers: {
        "Accept": "application/vnd.github.v3+json",
      },
    },
  );

  if (response.status != 200) {
    return {
      owner,
      repo,
      lastUpdate: "2024-05-16",
      lastMessage: "hmmmmmmmmmm...",
    };
  }

  const lastCommit = (await response.json())[0];
  const commitMessage = lastCommit.commit.message;
  const commitDate = lastCommit.commit.author.date;
  return { owner, repo, lastUpdate: commitDate, lastMessage: commitMessage };
};

export default async function loader(props: Props): Promise<GithubResult> {
  return await getLastCommit(props.owner, props.repo);
}
