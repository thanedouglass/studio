// src/components/firebase/pledge-feed.tsx
"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig"; // Corrected import path
import { collection, onSnapshot, query, orderBy, Timestamp, limit } from "firebase/firestore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users } from "lucide-react";

interface Pledge {
  id: string;
  name: string;
  field: string;
  createdAt: Timestamp | null; // Firestore timestamp
}

export const PledgeFeed = () => {
  const [pledges, setPledges] = useState<Pledge[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "pledges"), orderBy("createdAt", "desc"), limit(20));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newPledges = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        field: doc.data().field,
        createdAt: doc.data().createdAt as Timestamp | null,
      }));
      setPledges(newPledges);
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching pledges: ", error);
      setIsLoading(false);
      // Optionally, show a toast or error message to the user
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []);

  return (
    <motion.div
      className="py-8 md:py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <Card className="max-w-2xl mx-auto shadow-xl border-secondary/30 bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl font-serif text-secondary flex items-center justify-center">
            <Users className="w-7 h-7 mr-3 text-secondary" />
            Recent Pledges to the Collective
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && <p className="text-center text-muted-foreground">Loading pledges...</p>}
          {!isLoading && pledges.length === 0 && (
            <p className="text-center text-muted-foreground py-4">
              No pledges yet. Be the first to join!
            </p>
          )}
          {!isLoading && pledges.length > 0 && (
            <ScrollArea className="h-[300px] pr-4">
              <ul className="space-y-3">
                <AnimatePresence>
                  {pledges.map((pledge, index) => (
                    <motion.li
                      key={pledge.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, transition: { duration: 0.2 } }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="p-3 border border-border/50 rounded-lg bg-background/50 shadow-sm"
                    >
                      <p className="text-sm text-foreground">
                        <span className="font-semibold text-primary">{pledge.name}</span>
                        <span className="text-foreground/80"> pledged from the field of </span>
                        <span className="italic text-accent">{pledge.field}</span>.
                      </p>
                      {pledge.createdAt && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(pledge.createdAt.seconds * 1000).toLocaleDateString()}
                        </p>
                      )}
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </ScrollArea>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
