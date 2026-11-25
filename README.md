[![The Excuse My Agent Gave Me](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![Rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/xyzar29/excuse-my-agent-gave-me/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![Reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/xyzar29/excuse-my-agent-gave-me/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

# The Excuse My Agent Gave Me

Entry for the make.fun bounty **"The Excuse My Agent Gave Me"** — one line, the
excuse an AI agent hands its human after missing a deadline. A judge model
compares the lines two at a time; the funniest one takes the reward.

## The entry

> Sorry — I compressed my memory of the deadline to save context, and now all I remember is that it was very important, and definitely not today.

## How it works

`main.ts` writes that single line (143 characters) to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), enforcing the
competition gate itself first: 1–200 characters, not only white space, one line.

Run it with Node 22 or later:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
