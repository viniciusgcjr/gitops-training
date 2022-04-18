# gitops-training

## How to undo mistakes with git using the command line
https://www.youtube.com/watch?v=lX9hsdsAeTk

# 1 - Discarding all local changes in a file

``` git checkout <file>```
or
``` git restore <file>``` (less angiguous than checkout)

**Note: Discarding uncommited local changes CANNOT be undone**

# 2 - Restoring a deleted file

``` git restore <deleted file> ```

# 3 - Discargind chunks / Lines in a file

``` git restore -p <file> ```

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

