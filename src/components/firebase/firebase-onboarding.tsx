// src/components/firebase/firebase-onboarding.tsx
"use client";

import { useState } from "react";
import { db } from "@/firebaseConfig"; // Corrected import path
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const FirebaseOnboarding = () => {
  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !field.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter both your name and field of study.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    try {
      await addDoc(collection(db, "pledges"), {
        name: name.trim(),
        field: field.trim(),
        createdAt: serverTimestamp(),
      });
      toast({
        title: "Pledge Submitted!",
        description: "Thank you for joining The Nexus Research Collective.",
      });
      setName("");
      setField("");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "Submission Error",
        description: "Could not submit your pledge. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="text-center my-12 md:my-16 p-6 bg-card rounded-xl shadow-xl border border-primary/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <h3 className="text-3xl font-serif font-semibold text-primary mb-8 text-glow">
        Join the Collective Movement
      </h3>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div className="space-y-2 text-left">
          <Label htmlFor="name" className="text-foreground/80 font-sans">Your Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="e.g., Ada Lovelace"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 bg-background/70 border-primary/50 focus:border-primary"
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2 text-left">
          <Label htmlFor="field" className="text-foreground/80 font-sans">Your Field of Study / Interest</Label>
          <Input
            id="field"
            type="text"
            placeholder="e.g., Computational Biology, Quantum Physics"
            value={field}
            onChange={(e) => setField(e.target.value)}
            className="mt-1 bg-background/70 border-primary/50 focus:border-primary"
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          variant="default"
          size="lg"
          className="w-full font-semibold border-2 border-primary text-primary-foreground bg-primary rounded-xl px-8 py-3
                     hover:bg-primary/90 hover:shadow-glow-primary
                     shadow-glow-primary transition-all duration-300 ease-in-out group"
          disabled={isLoading}
        >
          {isLoading ? "Pledging..." : "Pledge to The Nexus"}
        </Button>
      </form>
    </motion.div>
  );
};
