# Next.js Server Actions

## What is a Server Action?

A Server Action is a function that runs on the server and can be called from a React/Next.js component.

It is mainly used for server-side operations such as:

- Form submissions
- Creating data
- Updating data
- Deleting data
- Database operations

---

## Basic Example

```jsx
async function submitAction(formData) {
  "use server";

  const name = formData.get("name");

  console.log(name);
}

export default function Form() {
  return (
    <form action={submitAction}>
      <input name="name" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

## how it works

User submits form
       ↓
<form action={submitAction}>
       ↓
Server Action
       ↓
Server-side logic
       ↓
Database / API / other operation

## why server action use 

Form
 ↓
Server Action
 ↓
Database

## instead of

Form
 ↓
fetch("/api/users")
 ↓
API Route
 ↓
Database