---
title: "Open Source Contributing"
metaTitle: "Open Source Contributing"
metaDescription: "Open Source Contributing"
---

## Configuring Global User

```bash
git config --global user.name <your name>
git config --global user.email <your email>
```

## Creating a pull request

1. Fork the repo using the `Fork` button on GitHub.
2. Clone the forked repo to your local device using `git clone <repo-location>`
3. Create a descriptive feature branch. (e.g. `correct-typos`, `add-feature-documentation`)
Run `git branch <branch-name>` followed by `git checkout <branch-name>`
Alternatively run `git checkout -b <branch-name>`
4. Add changes to a commit `git add -A`
5. Add a descriptive commit message `git commit -m "message"`
6. Run `git push --set-upstream origin <branch-name>` to push your current branch to the remote repo

At this point we can start thinking about creating a pull request, but first we'll have to sync up our fork to the original repo

1. Add the original repo as upstream `git remote add upstream https://github.com/original-owner-username/original-repository.git` (upstream is the name we're giving to the original repo)
2. Sync the repositories by running `git fetch upstream`, switch to main branch using `git checkout main` followed by `git merge upstream/main` to merge all recent commits to the original repo.
3. Now that we're synced up, we can go to GitHub and create a pull request with our feature branch against the original repo.

**Tip**: Change your default Git editor using `git config --global core.editor "vim"`

## Rebasing and updating PRs

You will want to rebase your commits in case you made a lot of smaller commits in a feature-branch, this way all of the small commits will be squashed into a single, descriptive commit.

1. To start, fetch the latest changes from the main repo `git fetch upstream`
2. Next run `git rebase -i HEAD~x`, where *x* is the number of commits in your branch. If however you don't know your exact amount of commits, you can run ``git rebase -i `git merge-base <feature-branch> main` ``. The `git merge-base` command will return a commit hash the can be used for your rebase.
3. You'll now be put in your text editor with a list of all commit on the feature-branch with the word *pick* in front of it, to squash the commits, replace *pick* with *squash* for all but the first commit. You've now squashed all commits into a single one.
4. If you want to reword one of your commits, you can also open the interactive rebase session and replace *pick* with *reword*, then change the commit message.
5. Once you're done rebasing, you can finalize the rebase by running `git rebase upstream/main`.
6. Because rebasing changes the history of your branch, you'll have to force-push to the repository `git push -f`. (Make sure that your `push.default` is `simple`: `git config --global push.default simple`)

**Tip**: `git log` will show all of the commits made to the repo, you can of course always pipe the output to show the most relevant information ;)

## Recovering lost commits

To recover a lost commit we can use the `git reflog` command which is short for **reference logs**. Reflog will output to stdout with all of your branch commits, prefixed with **commit-hash HEAD@{x}** where x is the commit number. You can use the commit hash to create a new branch using the relevant commit: `git checkout -b <new-feature-branch> <commit-hash>`.

## Aftermath of a PR

1. Sync your fork with the original repository

    ```bash
      git checkout main
      git pull --rebase upstream main
      git push -f origin main
    ```

2. Remove the local branch `git branch -d <feature-branch>`
3. Remove the remote branch `git push origin --delete <feature-branch>`
