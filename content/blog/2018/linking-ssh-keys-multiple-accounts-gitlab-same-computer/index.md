+++
author = "Aswin Koliyot"
title = "Multiple SSH Keys, Same Computer"
description = "If you have multiple accounts on Gitlab (or any other host) and you want to be able to push to either of them from your computer using ssh, read on."

date = 2018-06-25T17:28:43+05:30

tags = [
  "quick-reference"
]
+++

Setting up ssh keys for multiple accounts on Gitlab.

The host can be anything you like, but keep in mind that you’ll need to update the 
url you use when cloning and such.

Personal: 
akoliyot
akoliyot@gmail.com
wherethebinaryLives34D#F
https://gitlab.com/akoliyot/my-personal-repo

Codinent:
akoliyot02
aswin@codinent.com
thisisHappening34#D
https://gitlab.com/akoliyot02/my-codinent-repo

ssh-keygen -t rsa -C “your_name@home_email.com”

git clone git@gitlab.com-akoliyot:akoliyot/my-personal-repo.git asdf
git clone git@github.com-user1:user1/your-repo-name.git your-repo-name_user1

me.gitlab.com
codinent.gitlab.com

ssh-keygen -t rsa -C “github-user1” -f “github-user1”
