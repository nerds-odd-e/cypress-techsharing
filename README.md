# Demo Project used to illustrate end-to-end testing with Cypress

## Backend REST API stack
- Java11 with Springboot built and run using Gradle. Datastore using in-memory database H2.

### Start backend (java spring-boot)
`gradle bootRun`
- backend REST API app will be started on [http://localhost:8080](http://localhost:8080)

### Test backend REST API with `httpie`
- List all seeded Groups in database: `http GET :8080/api/groups`
- Create a new Group: `http POST :8080/api/group name='Huawei Istanbul TechSharing' city=Istanbul country=Turkey`
- View the just created Group: `http :8080/api/group/5`
- Update address of above created tech sharing Group: `http PUT :8080/api/group/5 name='Huawei Istanbul TechSharing' city=Istanbul country=Turkey address=Saray`
- Delete the create tech sharing Group: `http DELETE :8080/api/group/5`

## Frontend web UI stack
- NodeJS 15.4 with ReactJS bundled, built and run using webpack.

### Setup frontend (webpack react)
`cd app && yarn`

### Start frontend webapp
`cd app && yarn start` [http://localhost:3000](http://localhost:3000)
