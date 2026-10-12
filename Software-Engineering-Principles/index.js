
class OrderError extends Error{
    constructor(message, code, name, context = {}){
        this.message = message
        this.code = code
        this.context = context
        this.name = name
    }

    printError() {
        return `Error Message: ${this.message}\n Error Code: ${this.code}\n Error Context: ${this.context}\n Error Name: ${this.name}`
    }
}



function saveOrdertoDatabase(orderData){

    if(!orderData){
        throw new OrderError('Null data provided', 'NULL_DATA', 'SavingOrderError', {provided: orderData, expected: 'Data input'})
    }

    if(orderData.id < 0){
        throw new OrderError('Negative ID inputted', 'Negative_ID', 'SavingOrderError', {provided: orderData.id, expected:'Positive ID'})
    }




    try {
    db.orders.insert(orderData);
    } catch (error) {
        if(error instanceof OrderError){
            throw error
        }
    }
}


function processOrder(data) {
    if (!data || !data.items || data.items.length === 0 || !data.email) {
        return { error: "Invalid data" };
    }
    
    let totalNumberofOrders = 0;
    let 
    for (let i = 0; i < data.items.length; i++) {
        if (!data.items[i].price || !data.items[i].id) {
            return { error: "Invalid item" };
        }
        totalNumberofOrders += data.items[i].price * (data.items[i].quantity || 1);
    }
    

    if (data.coupon) {
        if (data.coupon === "SAVE10") {
            totalNumberofOrders = totalNumberofOrders * 0.9;
        } else if (data.coupon === "SAVE20") {
            totalNumberofOrders = totalNumberofOrders * 0.8;
        }
    }
    
    totalNumberofOrders = totalNumberofOrders * 1.08; // tax
    
    if (totalNumberofOrders > 100) {
        totalNumberofOrders = totalNumberofOrders - 10; // free shipping
    }
    
    const orderData = {
        id: Math.random().toString(),
        items: data.items,
        totalNumberofOrders: Math.round(totalNumberofOrders * 100) / 100,
        email: data.email,
        date: new Date()
    };
    
    // Save to database
    saveOrdertoDatabase(orderData)
    
    // Send email

    
    return { success: true, order: orderData };
}


