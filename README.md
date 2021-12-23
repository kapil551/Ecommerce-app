# Learning Redux by building an E-commerce Site

0. Understande Redux Lifecycle/ Redux Data Flow:

    - https://dev.to/oahehc/redux-data-flow-and-react-component-life-cycle-11n

0. Overview:

    - React.js is a libarary that wraps around the HTML, CSS, and JavaScript.

    - React.js only re-renders the component which is being updated by passing props or state update.

    - Redux is a global state management library.

    - Redux prevents the problem of prop drilling.

    - Redux wraps the entire react application with a global store.

    - This global store can be accessed by or updated by any component at any level of the react tree.

    - It also spilts the global store into different "slices".

    - Pull information from global store using "selectors".

    - Push information into the global store using "dispatch action".

1. React Essentials/Core Concepts:

    - State Management:

        - https://redux.js.org/tutorials/essentials/part-1-overview-concepts#state-management

    - Redux expects that all state updates are done "immutably":
    
        - https://redux.js.org/tutorials/essentials/part-1-overview-concepts#immutability

        - https://daveceddia.com/react-redux-immutability-guide/
    
    - Terminology:

        - Actions:

            - https://redux.js.org/tutorials/essentials/part-1-overview-concepts#actions

        - 

        - 

        - 

    - useSelector hook in react-redux:

        - Pull information from global store using "selectors".
    
    - useDispatch() hook in react-redux:

        - Push information into the global store using "dispatch action"


1. Imp Links:

    - npx create-react-app ecommerce-app --template redux


    - https://create-react-app.dev/docs/getting-started/

    - https://redux.js.org/introduction/getting-started

    - https://redux.js.org/tutorials/quick-start

    - Create a Redux Store:

        - https://redux.js.org/tutorials/quick-start#create-a-redux-store
    
    - Installing tailwindcss:

        - https://tailwindcss.com/docs/guides/create-react-app