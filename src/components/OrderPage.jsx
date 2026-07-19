import { useState } from "react";
import { useCart } from "../context/CartContext";

// this page shows the order basket and lets the customer
// compile their request, then send it via WhatsApp or email.
// there's no payment processing - this is a real request form
// that goes straight to the shop, same as phoning in an order.

export default function OrderPage() {
  const { cart, updateQty, removeItem, clearCart, total, SERVICE_CATALOG, addItem } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on collection/delivery");
  const [sent, setSent] = useState(false);

  // group the full catalog by category for the "add items" section
  const categories = SERVICE_CATALOG.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // build a WhatsApp message from the cart contents
  function buildMessage() {
    let msg = `Hi House of Laundry!\n\n`;
    msg += `Order request from: ${name || "Not provided"}\n`;
    msg += `Phone: ${phone || "Not provided"}\n\n`;
    msg += `Items:\n`;
    cart.forEach((item) => {
      msg += `• ${item.category} — ${item.name} × ${item.qty} = R${item.price * item.qty}\n`;
    });
    msg += `\nTotal estimate: R${total}\n`;
    msg += `Preferred payment method: ${paymentMethod}\n`;
    if (note) msg += `\nNote: ${note}\n`;
    msg += `\nPlease confirm availability, pricing and payment on collection/delivery. Thank you!`;
    return encodeURIComponent(msg);
  }

  function handleWhatsApp() {
    const url = `https://wa.me/27780263836?text=${buildMessage()}`;
    window.open(url, "_blank");
    setSent(true);
  }

  // mailto fallback - confirmed with owner via outreach
  function handleEmail() {
    const subject = encodeURIComponent("Laundry Order Request");
    const body = buildMessage();
    window.open(`mailto:sandile@houseoflaundry.co.za?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
  }

  return (
    <section className="pt-[100px] pb-28 bg-brand-silver-light dark:bg-brand-char-mid min-h-screen">
      <div className="max-w-[800px] mx-auto px-7">
        <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-brand-cyan block mb-3.5">
          Order Basket
        </span>
        <h1 className="font-display text-3xl font-semibold mb-2 dark:text-white">Your laundry request</h1>
        <p className="text-[#5B6870] dark:text-gray-400 text-[15px] font-light mb-10">
          Add items below, then send your request straight to the shop via WhatsApp or email. No payment needed here — they'll confirm pricing and arrange collection.
        </p>

        {/* add items section */}
        <div className="glass-panel rounded-[20px] p-6 mb-6">
          <h3 className="font-display font-semibold text-base mb-4 dark:text-white">Add items to your order</h3>
          {Object.entries(categories).map(([cat, items]) => (
            <div key={cat} className="mb-4">
              <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-brand-cyan dark:text-brand-cyan-soft mb-2">{cat}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => addItem(item.id)}
                    className="text-[12px] font-medium px-3 py-1.5 rounded-full border border-brand-silver-300 dark:border-gray-600 text-[#48555D] dark:text-gray-300 hover:bg-brand-cyan hover:border-brand-cyan hover:text-white transition-all"
                  >
                    {item.name} — R{item.price}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* current basket */}
        {cart.length > 0 ? (
          <div className="glass-panel rounded-[20px] p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-semibold text-base dark:text-white">Your items</h3>
              <button onClick={clearCart} className="text-[11px] text-red-500 hover:underline">
                Clear all
              </button>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-3 border-b border-brand-silver/60 last:border-0">
                <div>
                  <span className="text-[11px] text-brand-cyan font-semibold tracking-wide uppercase">{item.category}</span>
                  <p className="text-sm font-medium dark:text-white">{item.name}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="w-7 h-7 rounded-full border border-brand-silver-300 dark:border-gray-600 dark:text-white text-sm flex items-center justify-center hover:bg-brand-cyan hover:text-white hover:border-brand-cyan transition-all"
                  >
                    −
                  </button>
                  <span className="text-sm font-semibold w-6 text-center dark:text-white">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-7 h-7 rounded-full border border-brand-silver-300 dark:border-gray-600 dark:text-white text-sm flex items-center justify-center hover:bg-brand-cyan hover:text-white hover:border-brand-cyan transition-all"
                  >
                    +
                  </button>
                  <span className="text-sm font-semibold min-w-[60px] text-right dark:text-white">
                    R{item.price * item.qty}
                  </span>
                  <button onClick={() => removeItem(item.id)} className="text-red-400 text-xs ml-2 hover:text-red-600">
                    ✕
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-brand-silver-300">
              <span className="font-display font-semibold dark:text-white">Estimated total</span>
              <span className="font-display font-semibold text-xl text-brand-cyan">R{total}</span>
            </div>
          </div>
        ) : (
          <div className="glass-panel rounded-[20px] p-8 mb-6 text-center">
            <p className="text-[#9AA6AE] text-sm">Your basket is empty — add items above to get started.</p>
          </div>
        )}

        {/* contact details + send */}
        {cart.length > 0 && (
          <div className="glass-panel rounded-[20px] p-6">
            <h3 className="font-display font-semibold text-base mb-4 dark:text-white">Your details</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-[12.5px] font-semibold block mb-1.5 dark:text-gray-200">Your name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full bg-white/50 dark:bg-white/10 dark:text-white border border-brand-silver-300 dark:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm"
                />
              </div>
              <div>
                <label className="text-[12.5px] font-semibold block mb-1.5 dark:text-gray-200">Phone number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 072 123 4567"
                  className="w-full bg-white/50 dark:bg-white/10 dark:text-white border border-brand-silver-300 dark:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm"
                />
              </div>
            </div>

            {/* payment preference - no actual processing happens here,
                this just tells the shop how the customer intends to pay */}
            <div className="mb-4">
              <label className="text-[12.5px] font-semibold block mb-1.5 dark:text-gray-200">Preferred payment method</label>
              <div className="flex gap-2 flex-wrap">
                {["Cash on collection/delivery", "EFT", "Card"].map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setPaymentMethod(method)}
                    className={`text-[12.5px] font-medium px-4 py-2 rounded-full border transition-all ${
                      paymentMethod === method
                        ? "bg-brand-cyan border-brand-cyan text-white"
                        : "border-brand-silver-300 dark:border-gray-600 text-[#48555D] dark:text-gray-300 hover:border-brand-cyan"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#9AA6AE] italic mt-2">
                This is just your preference — the shop will confirm final pricing and take payment as normal on collection or delivery.
              </p>
            </div>

            <div className="mb-4">
              <label className="text-[12.5px] font-semibold block mb-1.5 dark:text-gray-200">Notes (optional)</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="Delivery address, pickup preference, etc."
                className="w-full bg-white/50 dark:bg-white/10 dark:text-white border border-brand-silver-300 dark:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm"
              />
            </div>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold text-[13px] hover:brightness-110 transition-all"
              >
                Send via WhatsApp
              </button>
              <button
                onClick={handleEmail}
                className="border border-brand-silver-300 dark:border-gray-600 px-6 py-3 rounded-full font-semibold text-[13px] text-[#48555D] dark:text-gray-300 hover:bg-brand-cyan hover:border-brand-cyan hover:text-white transition-all"
              >
                Send via Email
              </button>
            </div>

            {sent && (
              <p className="mt-4 text-sm text-brand-cyan font-medium">
                Request sent! The shop will confirm your order and arrange collection or delivery.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
