import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CompanyIntroduction from '@/components/CompanyIntroduction'
import OurAviationSolutions from '@/components/OurAviationSolutions'
import CertificationsApprovals from '@/components/CertificationsApprovals'
import GlobalPresence from '@/components/GlobalPresence'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CompanyIntroduction />
      <OurAviationSolutions />
      <CertificationsApprovals />
      <GlobalPresence />
      <Testimonials />
      <Footer />
    </main>
  )
}
