//rest parameters

function sum(...numbers: number[]): number{
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sum(3, 6, 8))

// rest parameters should come last
function greetAll(greeting: string, ...names: string[]): string{
    return names.map(name => `${greeting} ${name}`).join(" ")
}

console.log(greetAll("Hello", "Johnny", "Bill"))


// mixed parameter types

function generateMessage(prefix: string, suffix: string = ".", ...words: string[]): string{
    return `${prefix} ${words.join(" ")}${suffix}`
}

console.log(generateMessage("Marahib", undefined, "ya", "jad"))
// typing union parameters

function NumStr(...items: (string | number)[]): void{
    items.forEach(item => {
        if(typeof item === "string"){
            console.log(`String: ${item}`)
        } else{
            console.log(`Number: ${item}`)
        }
    })
}


NumStr("hello", 67, "john", "doe", 90)



// tuple rest parameters

function sumMinTwo(...numbers: [number, number, ...number[]]): number{
    return numbers.reduce((total, numb) => total + numb, 0);
}

console.log(sumMinTwo(5, 7, 3))

// read only parameters

function display(...items: readonly string[]): void{
    console.log(items.join(", "))
}

display("john", "sammy", "jeremiah")

// function overloads: define multiple call signatures


function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string;



function format(value: string|number|boolean): string{
    if(typeof value === "boolean"){
        return value ? "yes": "no"
    } else if(typeof value === "number"){
        return `${value.toFixed(2)}`
    } else{
        return `${value}`
    }
}


console.log(format(1))
console.log(format(false))


function getValue(key: "name"): string;
function getValue(key: "age"): number;
function getValue(key: "active"): boolean;

function getValue(key: string): string|boolean|number{
    const data: Record<string, string | number | boolean> = {
        "name": "Amy",
        "age": 37,
        "active": true
    }
    return data[key]
}


console.log(getValue("name"))


// practice exercise


interface FetchOptions{
    method?: "GET"|"POST"|"PUT"|"DELETE"
    headers?: Record<string, string>
    body?:any
}



function fetch(url: string): Promise<Response>;

function fetch(url: string, options: FetchOptions): Promise<Response>

function fetch(url: string, method: "POST"|"PUT", body: any): Promise<Response>


function fetch(url: string, optionsOrMethod?: FetchOptions| "POST" | "PUT", body?: any){
    let method: string = "GET"
    let headers: Record<string, string> = {
        "Content-Type": "application/json"
    }
    let requestBody: any = undefined

    if(typeof optionsOrMethod === "object"){
        method = optionsOrMethod.method || "GET"
        headers = {...headers, ...optionsOrMethod.headers}
        requestBody = optionsOrMethod.body
    } else if(typeof optionsOrMethod === "string"){
        method = optionsOrMethod
        requestBody = body
    }
    console.log(`${method} ${url}`)
    console.log("Headers: ", headers)
    if(requestBody){
        console.log(body)
    }

    Promise.resolve({
        status: 200,
        data: {success: true}
    })
}
