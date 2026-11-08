# Type Narrowing in TypeScript

## Introduction

Type narrowing means checking what kind of value we have before using it. When a value can be more than one type, these checks help TypeScript understand which type it is in each part of our code. Then we can use the right methods safely.

## Practical ways to narrow types

We can use `typeof` to check primitive values, such as strings and numbers:

```ts
function formatInput(value: string | number): string {
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    }
    return value.toFixed(2);
}
```

In the first part, TypeScript knows `value` is a string. If it is not a string, TypeScript knows it is a number, so we can use `toFixed()`.

We can use `instanceof` to check which class an object comes from:

```ts
function describeError(error: Error | Date): string {
    if (error instanceof Error) {
        return error.message;
    }
    return error.toISOString();
}
```

Here, TypeScript knows that `error` is an `Error` inside the `if`. Otherwise, it is a `Date`.

We can use the `in` operator to check whether an object has a certain property:

```ts
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function makeSound(animal: Cat | Dog): void {
    if ('meow' in animal) {
        animal.meow();
    } else {
        animal.bark();
    }
}
```

Because only a `Cat` has `meow`, TypeScript knows which kind of animal we have in each part.

## Conclusion

By checking a value before using it, we help TypeScript understand its type. This makes our code easier to follow and helps us use the right methods safely.
