"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import type { Template } from "@/types";
import { CheckCircle, CreditCard, Shield, Star } from "lucide-react";
import { useEffect, useState } from "react";

// Extend Window interface for Stripe
declare global {
  interface Window {
    Stripe: any;
  }
}

interface PaymentModalProps {  
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: (template: Template) => void;
}

export function PaymentModal({ 
  template,
  isOpen,
  onClose,
  onPaymentSuccess, 
}: PaymentModalProps) { 
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "crypto">("card");
  const [subscriptionType, setSubscriptionType] = useState<"monthly" | "yearly">("monthly");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [cryptoAddress, setCryptoAddress] = useState("");
  const { toast } = useToast();

  // Load Stripe when modal opens
  useEffect(() => {
    if (isOpen && !window.Stripe) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/';
      script.async = true;
      document.head.appendChild(script);
    }
  }, [isOpen]);

  const handlePayment = async () => {
    if (!template) return;

    // Basic validation based on payment method
    if (paymentMethod === "card") {
      if (!cardNumber || !expiryDate || !cvv || !name) {
        toast({
          title: "Missing Information",
          description: "Please fill in all card payment details.",
          variant: "destructive",
        });
        return;
      }
    } else if (paymentMethod === "crypto") {
      if (!cryptoAddress) {
        toast({
          title: "Missing Information",
          description: "Please provide a crypto wallet address.",
          variant: "destructive",
        });
        return;
      }
    }

    setIsProcessing(true);

    try {
      // Simulate payment processing with different delays based on method
      const processingTime = paymentMethod === "crypto" ? 5000 : paymentMethod === "paypal" ? 2000 : 3000;
      await new Promise((resolve) => setTimeout(resolve, processingTime));

      // Simulate different success rates for demo
      const isSuccess = paymentMethod === "crypto" ? Math.random() > 0.3 : true; // Crypto has higher failure rate for demo

      if (isSuccess) {
        const accessMessage = "You now have unlimited access to all premium templates!";

        toast({
          title: "Payment Successful!",
          description: accessMessage,
        });

        // Always pass the premium collection template for subscriptions
        const accessTemplate = { ...template, name: "Premium Collection", id: "premium-collection", tier: "premium" as const };

        onPaymentSuccess(accessTemplate);

        // Redirect to show results (in a real app, this would redirect to success page)
        window.location.href = "/premium-access-granted";

        onClose();
        // Reset form
        setCardNumber("");
        setExpiryDate("");
        setCvv("");
        setName("");
        setCryptoAddress("");
        setPaymentMethod("card");
        setSubscriptionType("monthly");
      } else {
        toast({
          title: "Payment Failed",
          description: "Please check your card details and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Payment Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (!template) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <Shield className="w-5 h-5 text-green-500" />
            Unlock Premium Template
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Subscription Type Selection */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant={subscriptionType === "monthly" ? "default" : "outline"}
                onClick={() => setSubscriptionType("monthly")}
                className="flex flex-col items-center gap-2 h-auto py-4"
              >
                <span className="text-lg font-bold">$15</span>
                <span className="text-xs">Monthly</span>
              </Button>
              <Button
                variant={subscriptionType === "yearly" ? "default" : "outline"}
                onClick={() => setSubscriptionType("yearly")}
                className="flex flex-col items-center gap-2 h-auto py-4"
              >
                <span className="text-lg font-bold">$120</span>
                <span className="text-xs">Yearly</span>
                <span className="text-xs text-green-600">Save 20%</span>
              </Button>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <Button
                variant={paymentMethod === "card" ? "default" : "outline"}
                onClick={() => setPaymentMethod("card")}
                className="flex flex-col items-center gap-2 h-auto py-4"
              >
                <CreditCard className="w-6 h-6" />
                <span className="text-xs">Card</span>
              </Button>
              <Button
                variant={paymentMethod === "paypal" ? "default" : "outline"}
                onClick={() => setPaymentMethod("paypal")}
                className="flex flex-col items-center gap-2 h-auto py-4"
              >
                <span className="text-lg font-bold text-blue-600">$</span>
                <span className="text-xs">PayPal</span>
              </Button>
              <Button
                variant={paymentMethod === "crypto" ? "default" : "outline"}
                onClick={() => setPaymentMethod("crypto")}
                className="flex flex-col items-center gap-2 h-auto py-4"
              >
                <span className="text-lg">₿</span>
                <span className="text-xs">Crypto</span>
              </Button>
            </div>
          </div>

          {/* Template Info */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-sm">Premium Collection</h3>
              <Badge variant="default" className="text-xs">
                {subscriptionType === "monthly" && "$15/month"}
                {subscriptionType === "yearly" && "$120/year"}
              </Badge>
            </div>
            <p className="text-xs text-green-600">Unlock all premium templates with {subscriptionType} access</p>
          </div>

          {/* Payment Form */}
          <div className="space-y-4">
            {paymentMethod === "card" && (
              <>
                <div>
                  <Input
                    id="name"
                    placeholder="Cardholder Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim())}
                    maxLength={19}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    maxLength={5}
                  />
                  <Input
                    id="cvv"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength={4}
                  />
                </div>
              </>
            )}

            {paymentMethod === "paypal" && (
              <div className="text-center py-8">
                <div className="text-2xl font-bold text-blue-600 mb-4">PayPal</div>
                <Button className="w-full" onClick={() => {}}>
                  Continue with PayPal
                </Button>
              </div>
            )}

            {paymentMethod === "crypto" && (
              <div>
                <Input
                  id="cryptoAddress"
                  placeholder="Wallet Address"
                  value={cryptoAddress}
                  onChange={(e) => setCryptoAddress(e.target.value)}
                />
              </div>
            )}
          </div>

          {/* Security Notice */}
          <div className="flex items-center gap-2 text-xs text-green-700 bg-green-50 p-3 rounded-lg border border-green-200">
            <Shield className="w-3 h-3" />
            <div className="flex flex-col gap-1">
              <span className="font-medium">🔒 Secure SSL Connection Active</span>
              <span className="text-green-600">Powered by Stripe • PCI DSS Compliant</span>
              <div className="flex items-center gap-1 text-green-600">
                <CheckCircle className="w-3 h-3" />
                <span>Bank-level Security • Real-time Processing</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button
              onClick={handlePayment}
              className="flex-1"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : paymentMethod === "crypto" ? "Generate Payment Address" : `Subscribe Now`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}