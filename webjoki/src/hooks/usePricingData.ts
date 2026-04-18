'use client';

import { useState, useEffect, useMemo } from 'react';
import { JOKI_PACKAGES } from '@/data/dummyData';
import { JokiPackage, PackageCategory } from '@/types';

/**
 * Custom hook to simulate fetching pricing data from an API.
 * Supports filtering by category and simulates loading state.
 */
export function usePricingData(initialCategory: PackageCategory = 'solo') {
  const [category, setCategory] = useState<PackageCategory>(initialCategory);
  const [isLoading, setIsLoading] = useState(true);
  const [packages, setPackages] = useState<JokiPackage[]>([]);

  useEffect(() => {
    setIsLoading(true);

    // Simulate API fetch delay
    const timer = setTimeout(() => {
      const filtered = JOKI_PACKAGES.filter((pkg) => pkg.category === category);
      setPackages(filtered);
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [category]);

  const allPackages = useMemo(() => JOKI_PACKAGES, []);

  const getPackageById = (id: string): JokiPackage | undefined => {
    return allPackages.find((pkg) => pkg.id === id);
  };

  return {
    packages,
    isLoading,
    category,
    setCategory,
    allPackages,
    getPackageById,
  };
}
