
import { baseOptions } from '@/lib/layout.shared';
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template:
      "%s | Novaui - Free UI Components to build beautiful websites",
    default: "Novaui - Free UI Components to build beautiful websites",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        defaultOpenLevel: 1,

      }}
    >
      {children}
    </DocsLayout>
  );
}
