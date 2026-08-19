# Beginner Git Command Guide

Complete each blank.

| Task | Command |
|---|---|
| Create a repository in a regular folder | `git init` |
| Inspect changed, staged, and untracked files | `git status` |
| Stage every current change | `git add .` |
| Create a commit with a message | `git commit -m "Describe the change"` |
| Display local branches | `git branch` |
| Create and move to a new branch | `git switch -c feature/example` |
| Combine another branch into the current branch | `git merge feature/example` |
| Temporarily store unfinished work | `git stash` |
| Restore the most recent stash | `git stash stash pop` |
| Download and combine remote changes | `git pull` |
| Send commits to GitHub | `git push` |
| Display a short commit history | `git log --oneline` |

## Short Responses

1. Why should `git init` not be used inside a GitHub Classroom repository?

A GitHub Classroom repository is already initialized as a Git repository when you clone or open it. Running git init inside an existing repository can reinitialize it or create a nested .git directory, which can corrupt the project's commit history, disconnect it from the remote GitHub repository, and cause issues with automated grading or submission.

2. What is the difference between `git add`, `git commit`, and `git push`?

git add, git commit, and git push represent the three distinct stages of saving and sharing code in Git. First, git add stages your modified files, marking them ready to be included in the next save. Next, git commit takes those staged changes and creates a permanent local snapshot in your repository's history along with a message describing what was changed. Finally, git push uploads all of your saved local commits from your computer up to the remote repository on GitHub so your work is safely backed up and accessible online.

3. Why are clear commit messages important?

Clear commit messages are important because they create an easy-to-read log of what changed in the project over time and why. They make it much easier for you and your teammates to navigate past updates, understand team contributions, troubleshoot bugs, and quickly find and revert specific changes if something breaks later on.
