// generics


class Container<T> {
    constructor(private item: T) {
        
    }

    getItem(): T{
        return this.item
    }
}

// utility types


// partial

interface User{
    id: string,
    name: string
    age: number
    hobbies?: string
}

type userPartial = Partial<User>

// required

type userRequired = Required<User>

// readonly

type userReadyOnly = Readonly<User>

// pick
type userPick = Pick<User, "id" | "name">

// omit

type userOmit = Omit<User, "hobbies" | "age">

// Record
type newRecord = Record<string, string[]>

//Exclude

type AllTypes = string | number | boolean | null | undefined

type Primitives = Exclude<AllTypes, null | undefined>
// extract
type nullables = Extract<AllTypes, null | undefined>


//ReturnType

function getUser() {
  return {
    id: "1",
    name: "Alice",
    email: "alice@example.com"
  };
}

type User1 = ReturnType<typeof getUser>;

// Parameters

type parameters1 = Parameters<typeof getUser>

// mapped types

type Nullable<T> = {
    [P in keyof T]: T[P] | null
}





