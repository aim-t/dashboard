# NOTES

- Using faker for generating fake data 
- faker.date.recent() for generating date in recent days, not years. Format it using toLocaleString(undefined, options). Not using undefined gives "2/24/2024" as output instead of "February 24, 2024". Needs more logic to convert into 24th February, 2024. 
