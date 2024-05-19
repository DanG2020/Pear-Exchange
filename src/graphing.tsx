export class pSim {
    token: number
    uses: number
    shares: number
    portion: number
    traction: number
    prev: number
    stock: any
    mood: number
    lastTime: number
    init: any

    constructor(token:number, uses:number, shares:number, portion:number) {
        this.token = token;
        this.uses = uses;
        this.shares = shares;
        this.portion = portion;
        this.traction = 1;
        this.prev = 0;
        this.stock = [0, 0, 0].fill(this.token*this.uses/this.shares*this.portion);
        this.mood = 0;
        this.stock = this.stock.slice(0, 3)
        this.lastTime = 0;
        this.init = true;
    }
    update(){
        var now = new Date().getTime();
        if (now - this.lastTime < 1000 && this.init!=true) {
            return;
        } else {
            this.lastTime = now;
        }
        if (this.traction<22.5){
            this.traction+=0.05;
        }
        let inc = 0;
        if (this.stock[-1]-this.stock[-2]==this.stock[-2]-this.stock[-3]){
            inc = 0.25;
        } else if (this.stock[-1]-this.stock[-2]>this.stock[-2]-this.stock[-3]){
            inc = 0;
        } else {
            inc = -0.25;
        }
        let st = this.stock[this.stock.length-1];
        st+=Math.min(st/6, 20)*(2*inc+(0.25*this.mood)+(Math.random()-0.5)/2);
        st+=this.token*this.uses/this.shares*this.portion*this.traction/5;
        this.stock.push(st);
        
        this.mood = 0;
        if (this.stock[-1]-this.stock[-2]!=this.stock[-2]-this.stock[-3]){
            if (this.stock[-1]-this.stock[-2]>this.stock[-2]-this.stock[-3]){
                this.mood+=0.25;
            } else {
                this.mood-=0.25;
            }
        }
        if (this.stock[-1]-this.stock[-2]!=0){
            if (this.stock[-1]-this.stock[-2]>0){
                if (this.prev==1){
                    this.mood-=0.25;
                    this.prev = 0;
                } else {
                    this.mood+=0.25;
                    this.prev = 1;
                }
            } else {
                if (this.prev==-1){
                    this.mood+=0.25;
                    this.prev = 0;
                } else {
                    this.mood-=0.25;
                    this.prev = -1;
                }
            }
        }
    }
    gainUser(change:number){
        this.uses+=change;
    }
    render(){
        return this.stock;
    }
}
export class stonkystonk {
    value: number
    lastTime: number
    constructor(){
        this.value = 0
        this.lastTime = 0
    }
    add(){
        var now = new Date().getTime();
        if (now - this.lastTime < 1000) {
            return;
        } else {
            this.lastTime = now;
        }
        this.value+=1
    }
    r(){
        return this.value
    }
}