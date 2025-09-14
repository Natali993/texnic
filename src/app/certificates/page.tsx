"use client";
import { Layout } from '../../components/Layout';
import { CTASection } from '@/components/CTASection';
import { useState } from 'react';
import { HeroSection } from './HeroSection';
import { CertificatesGrid } from './CertificatesGrid';
import { ImageModal } from './ImageModal';

export default function PageCertificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <HeroSection />
        <CertificatesGrid setSelectedImage={setSelectedImage} />
        <div className="mb-16" />
        <CTASection title="Потрібна консультація з електромонтажних робіт?" description="Наші спеціалісти допоможуть підібрати оптимальне рішення для вашого проекту" />
      </div>
      <ImageModal imageSrc={selectedImage!} onClose={setSelectedImage} />
    </Layout>
  );
}