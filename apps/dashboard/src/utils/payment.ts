import Razorpay from "razorpay";

export class PaymentInstance {
  private key_id: string;
  private key_secret: string;
  private instance: Razorpay;

  constructor(key_id: string, key_secret: string) {
    this.key_id = key_id;
    this.key_secret = key_secret;

    this.instance = new Razorpay({
      key_id: this.key_id,
      key_secret: this.key_secret,
    });
  }

  // You can add a getter for the instance if needed
  getRazorpayInstance(): Razorpay {
    return this.instance;
  }
}
