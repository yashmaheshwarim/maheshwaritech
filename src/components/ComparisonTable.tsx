import { CheckCircle2 } from "lucide-react";

const softwares = [
  {
    name: "Clinic Management System",
    bestFor: "Hospitals & Clinics",
    link: "/clinic-management-system",
  },
  {
    name: "School Management System",
    bestFor: "Schools",
    link: "/school-management-system",
  },
  {
    name: "Tuition Management System",
    bestFor: "Coaching Classes",
    link: "/tuition-management-system",
  },
  {
    name: "Attendance Management System",
    bestFor: "Offices & Schools",
    link: "/attendance-management-system",
  },
];

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border/50 bg-card shadow-xl shadow-primary/5">
      <table className="w-full text-left whitespace-nowrap">
        <thead className="bg-muted/50 border-b border-border/50">
          <tr>
            <th className="px-6 py-4 font-heading font-semibold text-foreground">Software Solution</th>
            <th className="px-6 py-4 font-heading font-semibold text-foreground">Best For</th>
            <th className="px-6 py-4 font-heading font-semibold text-foreground text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {softwares.map((software) => (
            <tr key={software.name} className="hover:bg-muted/30 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="font-medium text-foreground">{software.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-muted-foreground">
                {software.bestFor}
              </td>
              <td className="px-6 py-4 text-right">
                <a 
                  href={software.link}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  View Details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
