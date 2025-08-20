import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from './assets/components/Layout.assets';
import Home from './assets/components/Home.component/Home.component';
import ServicesSection from './assets/components/ServicesSection.component/ServicesSection.component';
import ContactForm from './assets/components/ContactForm.component/ContactForm.component';
import About from './Pages/about'; 
import OurPeople from './assets/components/AboutUs.component/OurTeamMembers';
import OurVision from './Pages/OurVision';
import OurValues from './Pages/OurValues';
import Testimonials from './Pages/Testimonials';
import Audit from './Pages/Audit';
import Taxation from './Pages/Taxation';
import Contactus from './Pages/Contactus';
import StatutoryAudit from './Pages/StatutoryAudit';
import FAQAccordion from './FAQAccordion';
import ConcurrentAudit from './assets/components/Concurrent.components/ConcurrentAudit.component';
import ForensicAudit from './assets/components/ForensicAudit.component/ForensicAudit.component';
import InventoryAudit from './assets/components/InventoryAudit.component';
import Blog from './Pages/Blog';
import Download from './Pages/Download';
import MysteryAudit from './Pages/MysteryAudit';
import RiskAssurance from "./Pages/RiskAssurance";
import AccountingBookkeeping from './Pages/AccountingBookkeeping';
import AntiMoneyLaundering from './Pages/AntiMoneyLaundering';
import CompanyIncorporation from './Pages/CompanyIncorporation';
import MergersAcquisitions from './Pages/MergersAcquisitions';
import SendQueryForm from './assets/components/SendQueryForm/SendQueryForm';
import InternalAudit from './Pages/InternalAudit';
import CorporateConsultancy from './Pages/CorporateConsultancy';
import SOPs from './assets/components/SOPs/SOPs';
import RiskControlMatrix from './assets/components/RiskControlMatrix/RiskControlMatrix';
import ManagementAudit from './Pages/ManagementAudit';
import VAT from './assets/components/ValueAddedTax/ValueAddedTax';
import SpecialAudit from './assets/components/SpecialAudit/SpecialAudit';
import CorporateTax from './assets/components/UAECorporateTax/CorporateTax';
import TransferPricing from './assets/components/TransferPricing/TransferPricing';
import TRCPage from './assets/components/TaxResidencyCertificate/TRC';
import AMLBanner from './assets/components/ONEforallbanner/AMLBanner';
import GlobalExpertiseBanner from './assets/components/GlobalExpertiseBanner/GlobalExpertiseBanner';
import DueDiligence from './Pages/DueDiligence';
import ValuationAdvisory from './Pages/ValuationAdvisory';
import RestructuringReorganization from './Pages/RestructuringReorganization';
import StrategicPlanning from './Pages/StrategicPlanning';
import FinancialBudgeting from './Pages/FinancialBudgeting';
import FixedAssetsManagement from './Pages/FixedAssetsManagement';
import TechnologyConsulting from './Pages/TechnologyConsulting';
import CFOServices from './Pages/CFOServices';
import GoldAudit from './Pages/GoldAudit';
import { SyringeIcon } from 'lucide-react';
import SystemAudit from './Pages/SystemAudit';
import TransactionAudit from './Pages/TransactionAudit';
import MeetOurCEO from './assets/components/AboutUs.component/MeetOurCEO';
import OurTeamMembers from './assets/components/AboutUs.component/OurTeamMembers';
import OurTeam from './Pages/OurTeam';
import Careers from './Pages/Careers';
import ReraAudit from './Pages/ReraAudit';
import SalesTaxCertificationAudit from './Pages/SalesTaxCertificationAudit';
import WhyChooseUs from './assets/components/WhyChooseUs/WhyChooseUs';
import AMLCFTPolicy from './Pages/AML/AMLCFTPolicy';
import InHouseAMLCompliance from './Pages/AML/InHouseAMLCompliance';
import AMLTraining from './Pages/AML/AMLTraining';
import AMLSoftwareSelection from './Pages/AML/AMLSoftwareSelection';
import AnnualAMLRiskAssessment from './Pages/AML/AnnualAMLRiskAssessment';
import AmlHealthCheck from './Pages/AML/AmlHealthCheck';
import AMLBusinessRiskAssessment from './Pages/AML/AMLBusinessRiskAssessment';
import AMLSoftwareValidation from './Pages/AML/AMLSoftwareValidation';
import AMLRegulatoryReporting from './Pages/AML/AMLRegulatoryReporting';
import KYCAndCDDServices from './Pages/AML/KYCAndCDDServices';
import Login from './AdminPanel/Login';
import Dashboard from './AdminPanel/Dashboard';




const router = createBrowserRouter([
  // PUBLIC ROUTES WITH LAYOUT (Navbar/Footer)
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <ServicesSection /> },
      { path: '/contact', element: <ContactForm /> },
      { path: '/about', element: <About /> },
      { path: '/about/ourpeople', element: <OurPeople /> },
      { path: '/about/ourvision', element: <OurVision /> },
      { path: '/about/ourvalues', element: <OurValues /> },
      { path: '/about/testimonials', element: <Testimonials /> },
      { path: '/services/audit', element: <Audit /> },
      { path: '/services/taxation', element: <Taxation /> },
      { path: '/contact/dubai', element: <Contactus /> },
      { path: '/statutory-audit', element: <StatutoryAudit /> },
      { path: '/FAQAccordion', element: <FAQAccordion /> },
      { path: '/concurrent-audit', element: <ConcurrentAudit /> },
      { path: '/forensic-audit', element: <ForensicAudit /> },
      { path: '/inventory-audit', element: <InventoryAudit /> },
      { path: '/resources/blogs', element: <Blog /> },
      { path: '/resources/downloads', element: <Download /> },
      { path: '/mystery-audit', element: <MysteryAudit /> },
      { path: '/services/risk-assurance', element: <RiskAssurance /> },
      { path: '/services/AccountingBookkeeping', element: <AccountingBookkeeping /> },
      { path: '/services/AntiMoneyLaundering', element: <AntiMoneyLaundering /> },
      { path: '/services/corporate-consulting', element: <CorporateConsultancy /> }, 
      { path: '/services/CompanyIncorporation', element: <CompanyIncorporation /> },  
      { path: '/services/mergers-acquisitions', element: <MergersAcquisitions /> },
      { path: '/sendquaryform', element: <SendQueryForm /> },
      { path: '/internal-audit', element: <InternalAudit /> },
      { path: '/sops', element: <SOPs /> },
      { path: '/rcm', element: <RiskControlMatrix /> },
      { path: '/management-audit', element: <ManagementAudit /> },
      { path: '/VAT', element: <VAT /> },
      { path: '/services/special-audit', element: <SpecialAudit /> },
      { path: '/corporate-tax', element: <CorporateTax /> },
      { path: '/transfer-pricing', element: <TransferPricing /> },
      { path: '/Trc', element: <TRCPage /> },
      { path: '/AMLbanner', element: <AMLBanner /> },
      { path: '/GlobalExpertiseBanner', element: <GlobalExpertiseBanner /> },
      { path: '/Mergers-Acquisitions/due-diligence', element: <DueDiligence /> },
      { path: '/Mergers-Acquisitions/valuation-advisory', element: <ValuationAdvisory /> },
      { path: '/Mergers-Acquisitions/restructuring-reorganization', element: <RestructuringReorganization /> },
      { path: '/corporate-consulting/strategic-planning', element: <StrategicPlanning /> },
      { path: '/corporate-consulting/financial-budgeting', element: <FinancialBudgeting /> },
      { path: '/corporate-consulting/fixed-assets', element: <FixedAssetsManagement /> }, 
      { path: '/corporate-consulting/technology-consulting', element: <TechnologyConsulting /> },
      { path: '/corporate-consulting/cfo-services', element: <CFOServices /> }, 
      { path: '/gold-audit', element: <GoldAudit /> },
      { path: '/system-audit', element: <SystemAudit /> },
      { path: '/transaction-audit', element: <TransactionAudit /> },
      { path: '/meetourceo', element: <MeetOurCEO /> },
      { path: '/ourteammembers', element: <OurTeamMembers /> },
      { path: '/ourteam', element: <OurTeam /> },
      { path: '/careers', element: <Careers /> },
      { path: '/rera-audit', element: <ReraAudit /> },
      { path: '/sales-tax-certification-audit', element: <SalesTaxCertificationAudit /> },
      { path: '/whychooseus', element: <WhyChooseUs /> },
      { path: '/aml-cft-policy', element: <AMLCFTPolicy /> },
      { path: '/inhouseamlcompliance', element: <InHouseAMLCompliance /> },
      { path: '/AMLTraining', element: <AMLTraining /> },
      { path: '/AMLSoftwareSelection', element: <AMLSoftwareSelection /> },
      { path: '/AnnualAMLRiskAssessment', element: <AnnualAMLRiskAssessment /> },
      { path: '/AmlHealthCheck', element: <AmlHealthCheck /> },
      { path: '/AMLBusinessRiskAssessment', element: <AMLBusinessRiskAssessment /> },
      { path: '/AMLSoftwareValidation', element: <AMLSoftwareValidation /> },
      { path: '/AMLRegulatoryReporting', element: <AMLRegulatoryReporting /> },
      { path: '/KYCAndCDDServices', element: <KYCAndCDDServices /> },
    ],
  },

  // ADMIN ROUTES WITHOUT LAYOUT
  { path: '/Login', element: <Login /> },
  { path: '/admin/dashboard', element: <Dashboard /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
