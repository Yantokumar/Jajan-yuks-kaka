"use client";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../lib/cart";
import { motion, AnimatePresence } from "framer-motion";

export function CartButton() {
  const { count, setOpen } = useCart();
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setOpen(true)}
      aria-label="Buka keranjang"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 bg-[#262320] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full grid place-items-center shadow-xl hover:bg-black active:bg-[#1A1816] transition-colors"
    >
      <ShoppingBag className="w-5 sm:w-6 h-5 sm:h-6" />
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            className="absolute -top-1 -right-1 bg-[#C84B31] text-white text-[11px] font-bold min-w-5 h-5 px-1 rounded-full grid place-items-center border-2 border-white"
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
