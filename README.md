# gitops-training

## How to undo mistakes with git using the command line
https://www.youtube.com/watch?v=lX9hsdsAeTk

# 1 - Discarding all local changes in a file

``` git checkout <filename>```
or
``` git restore <filename>``` (less angiguous than checkout)

**Note: Discarding uncommited local changes CANNOT be undone**

# 2 - Restoring a deleted file

``` git restore <deleted file> ```

# 3 - Discargind chunks / Lines in a file

``` git restore -p <filename> ```

## Discard this hunk from worktree [y,n,q,a,d,s,e,?]?
y - discard this hunk from worktree
n - do not discard this hunk from worktree
q - quit; do not discard this hunk or any of the remaining ones
a - discard this hunk and all later hunks in the file
d - do not discard this hunk or any of the later hunks in the file
s - split the current hunk into smaller hunks
e - manually edit the current hunk
? - print help

# 4 - Discard all local changes

``` git restore . ```

# 5 - Fixing the last commit

git commit --amend -m "correct"

**--amend rewrites history! Never change history for commits that have already been pushed to a remote repository!**

# 6 - Reverting a commit in the middle

``` git revert <commit hash> ```

Note: git revert creates a new commit that reverts the effects of a specified commit

# 7 - Resseting to an old revision

```git reset --hard <commit hash>``` or ``` git reset --mixed <commit hash>```

**git reset sets your HEAD pointer to an older revision**

# 8 - Resetting a file to an old revision

```git restore  --source <commit hash> <filename> ```

=======

# 9 - Recovering deleted commits

```git reflog```
```git branch <branch name> <commit hash>```

# 10 - Recovering a deleted branch

```git reflog```
```git branch <branch name> <commit hash>```

# 11 - Moving a commit to a new branch

In case of you should have created a new branch before commiting:

c1 <-- c2 <-- c3 master/HEAD       (wrong)


c1 <-- c2 ------ master            (correct)
        |
        <--- c3 login/HEAD

```git branch <branch name>```
```git reset HEAD~1 --hard```

Note: HEAD~1 means one behind HEAD

# 12 - Moving a commit to a different branch

```git checkout <branch>```
```git cherry-pick <SHA>```
```git git checkout main```
```git reset HEAD~1 --hard```

# 13 - Editing old commit messages

```git rebase -i HEAD~3```
...then replace "pick" for **"reword"**   
...then rewrite the commit message.

# 14 - Deleting old commits

```git rebase -i HEAD~3```
...then replace "pick" for **"drop"**   

# 15 - Squashing multiple commits into one

```git rebase -i HEAD~3```
...then replace "pick" for squash
...then write new commit message

**Note:** This will merge the line with squash word and the one before it.

# 16 - Adding a change to an old commit

```git commit --fixup <SHA>```
```git rebase -i --autosquash HEAD~4```

