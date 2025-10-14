"use client";

import { useScrollSpy } from '@/hooks/useScrollSpy';

export function ScrollSpyManager() {
  // List all section IDs that you want to track
  useScrollSpy(['pillars', 'features', 'pricing', 'contact']);

  return null; // This component doesn't render anything
}
