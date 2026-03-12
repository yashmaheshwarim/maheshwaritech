import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SoftwareSolutions from "./pages/SoftwareSolutions";
import ClinicManagement from "./pages/ClinicManagement";
import SchoolManagement from "./pages/SchoolManagement";
import TuitionManagement from "./pages/TuitionManagement";
import AttendanceManagement from "./pages/AttendanceManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/software-solutions" element={<SoftwareSolutions />} />
          <Route path="/clinic-management-system" element={<ClinicManagement />} />
          <Route path="/school-management-system" element={<SchoolManagement />} />
          <Route path="/tuition-management-system" element={<TuitionManagement />} />
          <Route path="/attendance-management-system" element={<AttendanceManagement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
