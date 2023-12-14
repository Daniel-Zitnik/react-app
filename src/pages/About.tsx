import React from 'react'
// styles
import '../styles/About.scss'

type Props = {}

const About = (props: Props) => {
    return (
        <div className='container about'>
            <h1>Programming in React</h1>
            <p>In the fast-evolving landscape of web development, React has emerged as a revolutionary force, transforming the way developers approach the creation of dynamic and interactive web pages. This essay explores the fundamental concepts and principles behind programming web pages in React, delving into its component-based architecture, JSX syntax, state management, and the overall impact on modern web development.</p>
            
            <h2>Component-Based Architecture</h2>
            <p>At the heart of React's paradigm is its component-based architecture. Instead of thinking about entire web pages, developers break down the user interface into modular components. Each component encapsulates a specific piece of functionality or visual element, fostering a modular and reusable code structure. This approach enhances maintainability and scalability, as changes to one component do not necessarily affect the others.</p>
            <p>Components in React can be either functional or class-based. Functional components are pure JavaScript functions that take in props (properties) and return JSX (JavaScript XML) to define the component's UI. Class-based components, on the other hand, can manage local state and have access to lifecycle methods.</p>

            <h2>JSX Syntax</h2>
            <p>React introduces JSX, a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. JSX makes the creation of components and the definition of their structure more intuitive. It looks similar to HTML but gets transpiled into JavaScript before being rendered in the browser.</p>

            <h2>State Management</h2>
            <p>In React, state represents data that can change over time and influences the rendering of components. State management is crucial for building interactive and dynamic web pages. The useState hook is a key feature that allows functional components to maintain and update their state.</p>

            <h2>React Router for Navigation</h2>
            <p>For building multi-page applications in React, developers commonly use React Router. This library facilitates the creation of routes, allowing users to navigate between different pages without the need for a full-page reload.</p>

            <h2>Conclusion</h2>
            <p>In conclusion, React has significantly impacted the landscape of web development by introducing a component-based approach, JSX syntax, and efficient state management. This library empowers developers to create modular, scalable, and interactive web pages with ease. As the web development ecosystem continues to evolve, React stands as a powerful tool shaping the future of modern web programming. Its emphasis on simplicity, reusability, and performance has made it a go-to choice for developers aiming to build sophisticated and responsive user interfaces on the web.</p>
        </div>
    )
}

export default About