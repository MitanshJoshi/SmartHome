interface Payment {
    pay(amount: number): void;
}

class PayPal {
    makePayment(amount: number): void {
        console.log(`Paid ${amount} using PayPal.`);
    }
}

class CreditCard {
    makePayment(amount: number): void {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

export class PayPalAdapter implements Payment {
    private payPal: PayPal;

    constructor() {
        this.payPal = new PayPal();
    }

    pay(amount: number): void {
        this.payPal.makePayment(amount);
    }
}

export class CreditCardAdapter implements Payment {
    private creditCard: CreditCard;

    constructor() {
        this.creditCard = new CreditCard();
    }

    pay(amount: number): void {
        this.creditCard.makePayment(amount);
    }
}
