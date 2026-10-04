class Counter{
    static totalIntances: number = 0;
    instanceId: number;

    constructor(){
        Counter.totalIntances++;
        this.instanceId = Counter.totalIntances
    }

    static getTotal(): number{
        return Counter.totalIntances
    }

}
