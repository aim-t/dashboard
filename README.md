# Angular Dashboard Project
This project is an Angular-based dashboard that fetches data from a Node.js server. The Node.js server uses Express and Nodemon for server management and Faker to generate fake data. The client side is built with Angular CLI and uses Bootstrap for styling.
#### Component Images
Getting data from the node server and displaying it in the table and navbar

![image](https://github.com/aim-t/dashboard/assets/45659768/76d42f4a-5b8f-4372-94d8-8c456343c120)

##### NOTES

###### For Server
- Using faker to generate fake data 
- faker.date.recent() for generating date in recent days, not years. Format it using toLocaleString(undefined, options). Not using undefined gives "2/24/2024" as output instead of "February 24, 2024". Needs more logic to convert into 24th February, 2024. 

###### For Client
- For getting data from Node to Angular, there was an error regarding dependency injection even after importing HttpClient and HttpClientModule in service and app root respectively. The solution is to add `provideHttpClient()` to the providers array in app.config.ts
- Also add DatePipe to the providers. (Used when formatting current time)

