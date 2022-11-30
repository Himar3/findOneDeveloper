# ![]([https://1drv.ms/u/s!AvZ29iFbDKgts30XOOwTo52MBXZn?e=96ILCb](https://am3pap006files.storage.live.com/y4mLCqfL67qpWCBUOOqKY8Sez6BsVwXlV2JrJw9iAfEJtGkSxppKgPv_-F0hCGDsnilFh_YYpvEk_wAZjFFoEbJL3b5XmJSsOWOBmQVPbk9yv3_j2BO_hqyx19jee3PTGgZr1sY2LMybbC0yW8iLDnSAntJ0mb8O1HMbtR3NiCTiFBWzY7RYHnxzLM2gwFndyDhB1Hl82EAMeT5eqTNuxZzXGkQdkp5PU8ID4BJ7OXw5g4?encodeFailures=1&width=620&height=150))
# findOneDeveloper
Type: Project-3 Full Stack

Authors: @dearmascarlos @himar3

Description:


### ENDPOINTS

### AUTH Signup/Login

METHOD | ENDPOINT                    | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                           | RETURNS
-------|-----------------------------|-------|------|-----------------------|---------------------------------------|-----------------------------
POST   | /auth/signup                | -     | user | User Signup           | name, email, password                 | {msg: string, token: token }
POST   | /auth/login                 | -     | user | User Login            | email, password                       | {msg: string, token: token }


### User 

METHOD | ENDPOINT                    | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                           | RETURNS
-------|-----------------------------|-------|------|-----------------------|---------------------------------------|-----------------------------
GET    | /developers                 | -     | user | See all developers    |                                       | [{developers}]
GET    | /developers/:id             | YES   | user | See one developer     | id                                    | {developer} 
GET    | /profile                    | YES   | user | See own profile       |                                       | {own profile} 
PUT    | /profile                    | YES   | user | Edit own profile      | name, email, password, presentation, tech, image | {own profile} 
DELETE | /profile                    | YES   | user | Delete own profile    |                                       | {msg: string} 
DELETE | /profile/:id                | YES   | admin| Delete one profile    |                                       | {msg: string}


### Favourites 

METHOD | ENDPOINT                    | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                           | RETURNS
-------|-----------------------------|-------|------|-----------------------|---------------------------------------|-----------------------------
POST   | /favourites                 | YES   | user | Add developer to favourites|  id                              | {msg: string}
GET    | /favourites                 | YES   | user | See all my favourites |                                       | [{developers}]
DELETE | /favourites                 | YES   | user | Delete developer from favourites|  id                         | {msg: string}


### Projects 

METHOD | ENDPOINT                    | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                           | RETURNS
-------|-----------------------------|-------|------|-----------------------|---------------------------------------|-----------------------------
POST   | /profile/projects           | YES   | user | Create new project    | title, type, description, link, img/vid, tech, team | {project}
GET    | /projects                   | YES   | user | See all projects      |                                       | [{projects}]
GET    | /projects/:id               | YES   | user | See one projects      | id                                    | {projects}
GET    | /profile/projects           | YES   | user | See own projects      |                                       | [{projects}]
PUT    | /projects/:id/vote          | YES   | user | vote one project      | id                                    | {msg: string}
PUT    | /profile/projects/:id       | YES   | user | Edit own project      | id                                    | {projects}
DELETE | /profile/projects/:id       | YES   | user | Delete own project    | id                                    | {msg: string}
DELETE | /projects/:id               | YES   | admin| Delete one project    | id                                    | {msg: string}


### Proposal

METHOD | ENDPOINT                    | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                           | RETURNS
-------|-----------------------------|-------|------|-----------------------|---------------------------------------|-----------------------------
POST   | /profile/proposal           | YES   | user | Create new proposal   | title, type, description, tech, img/vid, requirements | {proposal}
GET    | /proposals                  | YES   | user | See all proposals     |                                       | [{proposal}]
GET    | /proposal/:id               | YES   | user | See one proposal      | id                                    | {proposal}
GET    | /profile/proposals          | YES   | user | Get own proposals     |                                       | {proposal}
PUT    | /profile/proposal/:id       | YES   | user | Edit own proposal     | title, type, description, tech, img/vid, requirements | {proposal}
PUT    | /proposal/:id               | YES   | user | Add candidature to proposal | id                              | {msg: string}
DELETE | /profile/proposal/:id       | YES   | user | Delete own proposal   | id                                    | {msg: string}
DELETE | /proposals/:id              | YES   | admin| Delete one proposal   | id                                    | {msg: string}

