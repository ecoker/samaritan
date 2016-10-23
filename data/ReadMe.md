## To Migrate into Mongo, execute this command from the root folder
mongoimport -h localhost:3001 --db meteor --collection shelters --type csv --headerline --file ./data/shelters.csv

## QUERIES

_FAMILY_
db.shelters.find({ $or: [ {"doesservefamilies":"true"}, {"servefamilies":"true"} ]})

_VET_
servesvetsonly
db.shelters.find({ $or: [ {"category":"vasystem"}, {"servesvetsonly":"true"} ]}

_WOMEN (18+)_
db.shelters.find({"servesinglewomengt18":"true"})

_WOMEN (Less than 18)_
db.shelters.find({"acceptfemales":"true"})

_MEN (18+)_
servemengt18

_MEN (Less than 18)_
db.shelters.find({"acceptmales":"true"})

_MEDICAL_
db.shelters.find({"healthServices": "true"})