<h1>Sequoia landing page</h1>

<h2>Table of contents</h2>
<ul>
    <li>Overview</li>
    <li>Tech stack</li>
    <li>Key features</li>
    <li>Project structure</li>
    <li>Installation</li>
    <li>Future improvements</li>
</ul>

<h3>Overview</h3>
<p>Sequoia is a landing page for a fictional B2B marketing agency built with Next.js to demonstrate modern front-end development practices, responsive design, accessibility, and full-stack data integration, featuring modern Tailwind, version 4, utility styling and enhanced dynamic animations created with Motion (formally framer motion). The application components, built with React, have been designed with a strong focus on component reusability and maintainability in a modular architecture, the data for which is stored in a PostgreSQL database and retrieved via Prisma ORM, allowing content to be rendered dynamically. TypeScript is used throughout the project to provide strong type safety and improve developer experience. Accessibility was considered from the earliest stages of the design process. Care has been taken to ensure appropriate colour contrast, responsive layouts across different devices, semantic HTML and keyboard accessibility.
</p>

<h3>Tech stack</h3>

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visualstudiocode&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)

<h3>Key features</h3>
<h3>Next.js</h3>
<ul>
    <li><p><strong>Image optimisation - </strong>Utilised Next.js’s built‑in, performance‑optimised image component that automatically handles sizing, formats, lazy loading, and layout stability</p></li>
    <li><p><strong>Errors - </strong>To handle failed data retrival, I have utilised effective defensive UI design / resiliant rendering techniques meaning if the data for a module could not be fetched the module in question would be hidden, all other page modules would remain unaffected.</p></li>
</ul>

<h3>Typescript</h3>
<ul>
    <li><p><strong>Type alias - </strong>Created and maintained custom TypeScript type aliases using the type keyword</p></li>
    <li><p><strong>Strongly typed - </strong>Used strongly typed data throughout e.g. useState< ContactFormData></p></li>
    <li><p><strong>Prop types - </strong>Defined custom prop type aliases within components</p></li>
    <li><p><strong>Parameter types - </strong>Typed function parameters to enforce the structure of the expected incoming arguments</p></li>
    <li><p><strong>Function returns - </strong>Explicitly declared function return types e.g. void for improved code clarity and type safety</p></li>
    <li><p><strong>Array types - </strong>Used array typing (NewsArticle[]) to ensure collections only contain valid news article objects</p></li>
    <li><p><strong>Functions as props - </strong>Passed typed functions as props between parent and child components</p></li>
    <li><p><strong>Event handlers - </strong>Typed React event handlers (onClick)</p></li>
</ul>

<h3>React</h3>
<ul>
  <li><p><strong>Architecture - </strong>Built a component-based application architecture</p></li>
  <li><p><strong>Hooks - </strong>Managed application data with state hooks (useState, useEffect, etc)</p></li>
  <li><p><strong>Avoiding state mutation - </strong>Used state immutability patterns when updating arrays and objects</p></li>
  <li><p><strong>Spread operator - </strong>Amended state using the spread operator</p></li>
  <li><p><strong>Callback props - </strong>Used callback props to allow child components to trigger parent state updates</p></li>
  <li><p><strong>Reusable components - </strong>Built reusable components like AccordionItem and CarouselCard</p></li>
  <li><p><strong>Accessibility - </strong>Colour contrast, responsive layouts across different devices, semantic HTML and keyboard accessibility to ensure WCAG compliance</p></li>
  <li><p><strong>Conditional classes - </strong>Use of conditional class rendering ensured responsive design with dynamic styling</p></li>
</ul>

<h3>Prisma ORM & PostgreSQL</h3>
<ul>
    <li><p><strong>Relational - </strong>Designed and implemented a relational database schema using Prisma ORM</p></li>
    <li><p><strong>1 to 1 relationships - </strong>Creating one-to-many relationships between database models e.g. Accordion and accordion items</p></li>
    <li><p><strong>Foreign keys - </strong>Using foreign keys and Prisma @relation fields to maintain related table data</p></li>
    <li><p><strong>Primary keys - </strong>Defining primary keys with auto-incrementing IDs</p></li>
    <li><p><strong>Unique constraints - </strong>Using unique constraints (@unique) to enforce data uniqueness (e.g. page slugs)</p></li>
    <li><p><strong>Required vs optional fields - </strong>Defining optional and required fields to accurately model application data</p></li>
    <li><p><strong>Default values - </strong>Configuring default values (e.g. @default(now()) for timestamps and autoincrement() for IDs)</p></li>
    <li><p><strong>Ordered content - </strong>Modelling ordered collections of data using explicit ordering fields (carouselItem)</p></li>
    <li><p><strong>Normalised database design - </strong>Applied database normalization principles to reduce data duplication and create reusable content structures</p></li>
    <li><p><strong>Database queries - </strong>Queried a PostgreSQL database using Prisma ORM</p></li>
    <li><p><strong>DRY principles - </strong>Configured a reusable PrismaClient instance to avoid repeated client creation</p></li>
    <li><p><strong>PostgreSQL adapter - </strong>Connected Prisma to PostgreSQL using the Prisma PostgreSQL adapter (@prisma/adapter-pg in lib/prisma.ts)</p></li>
    <li><p><strong>Prisma query options - </strong>Used Prisma query options (orderBy) to retrieve sorted data</p></li>
    <li><p><strong>Prisma types - </strong>Utilised Prisma-generated TypeScript types for end-to-end type safety</p></li>
</ul>

<h3>Tailwind (Version 4)</h3>
<ul>
  <li><p><strong>Themes - </strong>Defined custom tailwind theme variables in the global.css file making use of the new theme API and showing awareness of scoping rules.</p></li>
  <li><p><strong>Fonts - </strong>Ability to define the custom Google font tokens mapping them in to the HTML layer</p></li>
  <li><p><strong>Auto-generation of classes - </strong> Demonstrating an understanding of how tailwind auto-generates utility classes (e.g. defining --color-brand-900 generates text-brand-900, bg-brand-900 etc).</p></li>
  <li><p><strong>Custom tokens - </strong>Generated a custom colour palatte using themes to reflect business branding.</p></li>
  <li><p><strong>Extending default classes - </strong>While I have made use of tailwinds default breakpoints, this project also demonstrates an ability to extend those by created additional breakpoints.</p></li>
  <li><p><strong>Scalable architecture - </strong>Split layouts, typography or components in to seperate imported css modules for clarity.</p></li>
  <li><p><strong>Layer system - </strong>Demonstrates an understanding of how base and components differ in purpose and cascade.</p></li>
  <li><p><strong>Reusable classes - </strong>Where tailwind utility classes are used repeatedly, custom component classes are created to keep code DRY.</p></li>
  <li><p><strong>Responsive utilities - </strong>Ensuring a responsive layout and appearance with breakpoint classes.</p></li>
  <li><p><strong>Interative and accessible states - </strong>Use of tailwind psuedo classes to control hover or focus states for elements.</p></li>
</ul>

<h3>Motion</h3>
<ul>
  <li><p><strong>Variants - </strong>Defining motion variants for nested parent and child components.</p></li>
  <li><p><strong>Animation states - </strong>Defined hidden and visible states to control elements visibility.</p></li>
  <li><p><strong>Loading - </strong>Defined animations which triggered on page load (animate).</p></li>
  <li><p><strong>Scrolling - </strong>Defined animations which are triggered when the user scrolls to a specific point of a page (whileInView).</p></li>
  <li><p><strong>Frequency - </strong>Controlled the frequency of animations to prevent users being overloaded with repeated animations (use once)</p></li>
  <li><p><strong>Timing - </strong>Controlled the time it takes for an animation to complete and demonstrated the use of staggerChildren to vary initial animation states for multiple child elements in nested animations.</p></li>
  <li><p><strong>Effect variety - </strong>The landing page demonstrates modules which fade in to view or transition from an initial position to a different final postion on the page using the x and y axis.</p></li>
</ul>


<h3>Project structure</h3>
<p>The project structure highlights the architectural approach, folder organisation, and naming conventions that support a scalable and maintainable codebase.</p>

<div>
  <details>
    <summary><strong>public</strong></summary>
    <ul>
      <li>
        images
        <ul>
          <li>graph_mob.png</li>
        </ul>
      </li>
    </ul>
  </details>
  <details>
    <summary><strong>src</strong></summary>
    <ul>
      <li>
        app
        <ul>
          <li>global.css</li>
          <li>layout.tsx</li>
          <li>page.tsx</li>
        </ul>
          <li>
            components
            <ul>
                <li>
                  Accordion
                  <ul>
                    <li>AccordionItemComponent.tsx</li>
                    <li>AccordionMotionVariants.ts</li>
                  </ul>
                </li>
                <li>
                  Carousel
                  <ul>
                    <li>CarouselCardComponent.tsx</li>
                    <li>CarouselComponent.tsx</li>
                  </ul>
                </li>
                <li>logoScrollRowComponent.tsx</li>
                <li>...</li>
            </ul>
          </li>
          <li>
            lib
            <ul>
                <li>prisma.ts</li>
            </ul>
          </li>
          <li>
            modules
            <ul>
              <li>HeroModule.tsx</li>
              <li>...</li>
            </ul>
          </li>
          <li>
            services
            <ul>
              <li>getAccordion.ts</li>
              <li>...</li>
            </ul>
          </li>
          <li>
            styles
            <ul>
              <li>
                components
                <ul>
                  <li>button.css</li>
                  <li>...</li>
                </ul>
              </li>
              <li>
                layout
                <ul>
                  <li>container.css</li>
                  <li>...</li>
                </ul>
              </li>
              <li>
                typography
                <ul>
                  <li>base.css</li>
                  <li>...</li>
                </ul>
              </li>
            </ul>
          </li>
      </li>
    </ul>
  </details>  
</div>

<h3>Set up & Installation</h3>
<p>To clone and start the project open a command line terminal and run the following commands in the order provided:</p>
<ol>
  <li>git clone https://github.com/NorthernWolf22/Sequoia.git</li>
  <li>cd Sequoia</li>
  <li>npm install</li>
  <li>npm run dev</li>
</ol>

<h3>Future improvements</h3>
<ul>
  <li>Add a fallback page for invalid routes</li>
</ul>