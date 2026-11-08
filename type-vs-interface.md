# Type vs. Interface in TypeScript

## Introduction

Both `type` and `interface` can describe what an object should look like. They overlap, so its easier to use either one for a simple object.

```ts
interface Student {
  name: string;
  grade: number;
}

type StudentInfo = {
  name: string;
  grade: number;
};
```

These examples describe the same kind of object: one with a `name` and a `grade`.

## What is different?

The **interface** should be used when you are describing an object which can build on with `extends`:

```ts
interface Person {
  name: string;
}

interface Student extends Person {
  grade: number;
}
```

We should use **type** when we need something other than one object shape, such as a value that can be one of several choices:

```ts
type Grade = "A" | "B" | "C";
```

## Declaration merging

If TypeScript finds two interfaces with the same name in the same scope, it joins their fields together. This is called **declaration merging**:

```ts
interface School {
  name: string;
}

interface School {
  city: string;
}
```

Now a `School` needs both `name` and `city`. Merging can be useful when adding information to an interface provided by a library. It can also happen by accident, so we need to use clear, unique names. Type aliases do not merge: declaring the same type name twice causes an error.

## Which one should be used?

- The **interface** should be used for an object when we want to extend it or add fields to it later.
- The **type** should be used for choices such as `"A" | "B" | "C"`, or when we need a type that is not just one object shape.
- For a simple object, either is fine.

## Conclusion

Both options describe object shapes, but interfaces can be extended and merged, while types can describe more kinds of things.