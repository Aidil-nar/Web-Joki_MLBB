import React from 'react';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/data/jokiServices';
import JokiDetailPage from '@/components/sections/JokiDetailPage';

interface Props {
  params: {
    slug: string;
  };
}

// Force recompile to update jokiServices.ts data cache
export default function JokiServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <JokiDetailPage service={service} />;
}
