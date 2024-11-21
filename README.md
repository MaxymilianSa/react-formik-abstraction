# Multi-step form with the custom react-formik-hook

Live demo - [open](https://react-formik-abstraction.vercel.app/)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Naming Convention](#naming-convention)
- [Directory Structure](#directory-structure)
- [Install project](#install-project)
- [Todos](#todos)

## Technologies Used

- React
- Typescript
- Formik
- Yup

## Naming Convention

We will use a **kebab-case**. Kebab case is a programming variable naming convention where all letters are lowercase and words are separated by hyphens.

Here are some examples of kebab case: `component-name.tsx` and `other-component.tsx`.

## Component Structure Convention

When creating a component, we will follow the convention of splitting it into separate files for the controller, model, view, index, and stories. This helps in maintaining a clean and organized codebase.

Here is the structure:

- `component-name.controller.ts` - Contains the logic and state management for the component.
- `component-name.model.ts` - Defines the data structures and types used by the component.
- `component-name.view.tsx` - Contains the JSX and styling for the component.
- `component-name.stories.tsx` - Contains the Storybook stories for the component.
- `index.ts` - Exports the component and any related hooks or utilities.

## Directory Structure

- `src/@types` - module declarations
- `src/assets` - all media
- `src/components` - all components
- `src/theme` - theme configuration

## Prerequisites

- [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Install yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

## Install project

1. Clone repository
2. Run `yarn` to install project dependencies.
3. Run `yarn start` to run dev server or `yarn build` for production purposes.

## Todos

1. Add phone input variant
