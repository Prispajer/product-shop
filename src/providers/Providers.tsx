import React from "react";
import { SearchProvider } from "../context/SearchContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/query";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>{children}</SearchProvider>
    </QueryClientProvider>
  );
}
