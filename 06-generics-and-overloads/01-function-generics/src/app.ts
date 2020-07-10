class Pizza {
    constructor(
        private name: string,
        private price: number
    ) {
    }
}

class List<T> {
    private list: T[] = [];

    addItem(item: T): void {
        this.list.push(item)
    }

    getList(): T[] {
        return this.list;
    }
}

const list = new List<Pizza>();

list.addItem(new Pizza('pepperoni', 15));
list.addItem(new Pizza('Razzle-Dazzle', 250));

interface Coupon {
    discount: number
}

const couponList = new List<Coupon>();

couponList.addItem({discount: 10});
