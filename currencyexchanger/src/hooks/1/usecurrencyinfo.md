Topic – Custom Hooks
1st Half: Setup and Why We Need Custom Hooks

When we start working with custom hooks, the first step is to create a new folder inside the src directory named hooks. Inside this folder, we will create a file for our custom hook.

At the top of this file, we will import the necessary hooks from React:

import { useState, useEffect } from "react";


Next, we will define a function to create our custom hook. We can pass an argument to this hook based on conditions, though it’s not always necessary. For example, here we’ll create a hook with one argument:

function useCurrencyInfo(currency)


This custom hook will return some data that it fetches from an API. The idea is simple: whenever we call this custom hook, it should trigger the API call. For this, we’ll use the useEffect hook, which allows us to execute side effects like API calls only when certain conditions are met.

Using useEffect for API Calls

The syntax for useEffect looks like this:

useEffect(() => {}, []);


Inside the parentheses, we write our fetch function that calls the API.

The square brackets are called the dependency array. They tell React when to re-run the effect. For example, if we put a variable inside the dependency array, the effect will re-run every time that variable changes.

Step-by-Step Process

Fetch Function
Inside the effect, we’ll use the fetch function to call our API URL and get the project data.

Method Chaining
We use .then() to handle the API response. This is called method chaining in JavaScript.

JSON Conversion
We convert the response into JSON format using a callback function:

(res) => res.json()


Permanent Storage with State
Since we want to store the API response permanently in our component, we use the useState hook. At the top of our custom hook, we declare:

const [data, setData] = useState({});


Now, in the .then() method, we can store the response in our state like this:

.then((res) => setData(res[currency]))


Here, currency represents the specific currency key we want (like usd or inr).

Debugging
If we are not sure about the exact data we’re getting, we can always use console.log(data) to check it.

Dependency Array

In our useEffect hook, we’ll pass the currency value into the dependency array. This means whenever the currency changes (for example, from INR to USD), the API will be called again automatically.

useEffect(() => {
  // fetch logic here
}, [currency]);

Returning Data

After completing all these steps, we’ll log the data and return it from our custom hook:

console.log(data);
return data;

Exporting the Hook

Finally, to use our custom hook in other files, we’ll export it like this:

export default useCurrencyInfo;

