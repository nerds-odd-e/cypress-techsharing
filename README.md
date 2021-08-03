# Demo Project used to illustrate end-to-end testing with Cypress

## Backend REST API stack

- OpenJDK11/OpenJDK16 with Springboot built and run using Gradle. Datastore using in-memory database H2.

### Start backend (java spring-boot)

`./gradlew bootRun`

- backend REST API app will be started on [http://localhost:8080](http://localhost:8080)

### Test backend REST API with `httpie`

- List all seeded Groups in database: `http GET :8080/api/groups`
- Create a new Group: `http POST :8080/api/group name='Huawei Istanbul TechSharing' city=Istanbul country=Turkey`
- View the just created Group: `http :8080/api/group/5`
- Update address of above created tech sharing Group: `http PUT :8080/api/group/5 name='Huawei Istanbul TechSharing' city=Istanbul country=Turkey address=Saray`
- Delete the create tech sharing Group: `http DELETE :8080/api/group/5`

## Frontend web UI stack

- NodeJS 16.6.0 with Sveltekit bundled, built and run using Vite.

### Setup frontend ([vite](https://vitejs.dev) [sveltekit](https://kit.svelte.dev))

`cd app && npm install`

### Start frontend webapp

`cd app && npm run dev` [http://localhost:3000](http://localhost:3000)
