# Samaritan
Hi there! This is the repo for our submission to Global Hack 2016. I hope it can be of some use to you on your coding journey. :)

## Download Meteor
First off, you'll need to download the javascript framework [Meteor](https://www.meteor.com/). We used React for view rendering and Meteor allowed us to do all of our server side and client side development in the same language.

While we didn't end up creating an iOS or Android app, it's pretty straightforward with this program and totally worth exploring.

## Install Dependencies
This should look fairly familiar, but instead of the standard npm install, you'll use Meteor's version:
```
meteor npm install
```

## Dump Data in your Database
We used *mLab* for our database since we pushed our application to the Galaxy servers for the Hackathon. To make things work well, we did a _mongorestore_ to the remote database. You'll see the ReadMe.md file in `/dump/samaritan/`. Mongo automagically navigates the _dump_ folder, so it's easier if you just execute this command from the root of your project folder. 

#### Local
```
mongorestore
```

_There's an optional `--port` and `--db` flag you can add if you need it. If you've got stuff you want to protect, it may be a good idea to review the [mongorestore docs](https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/).

#### Remote
Here's what the command looks like for *mLab*:
```
mongorestore -h <location>.mlab.com:<port> -d meteorites -u <username> -p <password> dump/*
```

_Make sure you replace all of that with your endpoint and credentials._

## Running Locally
This one should be pretty easy. Run this from the root of your project file in the console.
```
meteor
```

## Publishing to Galaxy
One thing that's not in the repo is a _settings.json_ file. You'll need that. We didn't leave it here, because it carries credentials, but it should live in your root and look like this (with real stuff in it):
```
{
  "galaxy.meteor.com": {
   "env": {
     "MONGO_URL": "mongodb://<username>:<password>@<location>.mlab.com:<port>/<database>"
   }
 }
}
```

### Did I miss anything? Give me a holler. Thanks!