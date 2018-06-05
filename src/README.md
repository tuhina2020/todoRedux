Everything that changes in the app. (filtering, clicks) results in the change to the state object.

1. Everything that changes in the application including data and UI state is contained in the single object called "state"

2. State tree is read only. Any change needs an action to be dispatched by the component. Action is the minimal representation of state in the data (a plain JSON). it has a type property and the previous state. It returns the next state of the application. Ex: INCRMENT, DECREMENT, ADD_COUNTER, REMOVE_COUNTER, VISIBILITY.

A reducer is a pure function that takes the action to be dispatched, previious state and returns the next state of the app.

function reducer (state, action) {
	...
	returns state;
}

3. Impure functions : Ex: Anything that relies on the current time, random number generator,anything   	that depends on IO, Mutate the array

   Pure functions : deterministic and predictable. (REDUCERS ARE PURE FUNCTIONS)
   Given an input it always gives same output. no side effects (mutation). Avoid "shared state"

	USES OF FUNCTIONS
	mapping inputs to output via a function
	procedures : perform a sequence of steps
	IO : network requests, DB, user inputs, print to screen

	MAPPING : f(x) = 2x; => f(4) = 8. f(4) and 8 are the same. this is called referential transperency

4. Components are dumb entities, that do what they are told and return renderable output.
Reducers specify how the next state is specified based on current state and action. Reducers are pure functions. No mutations allowed.

Parallelism vs Concurrency
3 coffee machines and one queue in each
1 coffee machine and 2 queues of ppl waiting to drink coffee

Challenge is not learning a new language. Its about learning about the way of thinking, idioms.
Discuss problems and not tools.
How to make writing concurrent programs easy ?

