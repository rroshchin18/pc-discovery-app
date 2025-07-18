export const scenarioData = [
  {
    id: "ach-transfer-delays",
    title: "ACH Transfer Dispute Resolution Delays",
    description:
      "Customer disputes over ACH transfers are taking 12+ days to resolve, creating regulatory compliance risks and customer dissatisfaction.",
    difficulty: "Beginner",
    stakeholderCount: 8,
    estimatedTime: "15-20 min",
    learningTasks: 3,
    customerComplaint: {
      from: "sarah.johnson@email.com",
      subject: "Unresolved ACH Transfer Dispute - 15 Days and Counting",
      body: "I initiated a dispute for an unauthorized ACH transfer 15 days ago and still haven't received any resolution or meaningful updates. This is completely unacceptable for a financial institution. I've been a customer for 8 years and am seriously considering switching banks. The $847 is still missing from my account and no one can give me a timeline for resolution.",
    },
    complianceMemo: {
      title: "URGENT: ACH Dispute Resolution SLA Violations",
      from: "Compliance Team",
      content:
        "We are currently in violation of Regulation E requirements for ACH dispute resolution. Federal regulations require provisional credit within 10 business days, but our current average is 12.3 days. This exposes us to regulatory penalties and potential CFPB enforcement action. Immediate action required.",
    },
    metrics: [
      { label: "Average Resolution Time", value: "12.3 days", change: "↑ 3.1 days vs target" },
      { label: "Customer Complaints", value: "847", change: "↑ 156% this month" },
      { label: "Regulatory Violations", value: "23", change: "↑ from 0 last quarter" },
      { label: "Customer Satisfaction", value: "2.1/5", change: "↓ 1.8 points" },
    ],
    stakeholders: [
      { name: "Jennifer Martinez", role: "Fraud Operations Manager", department: "Risk" },
      { name: "Lisa Thompson", role: "AML Compliance Officer", department: "Compliance" },
      { name: "David Chen", role: "Customer Experience Lead", department: "CX" },
      { name: "Michael Rodriguez", role: "Platform Product Manager", department: "Product" },
      { name: "Amanda Foster", role: "Operations Manager", department: "Operations" },
      { name: "Robert Kim", role: "Technical Lead", department: "Engineering" },
      { name: "Rachel Green", role: "Legal Counsel", department: "Legal" },
      { name: "Patricia Wong", role: "Credit Risk Manager", department: "Risk" },
    ],
  },
  {
    id: "mobile-security-breach",
    title: "Mobile App Security Incident Response",
    description:
      "A security vulnerability in the mobile banking app has potentially exposed 2.3M customer accounts to unauthorized access attempts.",
    difficulty: "Advanced",
    stakeholderCount: 8,
    estimatedTime: "20-25 min",
    learningTasks: 3,
    customerComplaint: {
      from: "concerned.customer@email.com",
      subject: "Security Breach - My Account Compromised?",
      body: "I received a notification about suspicious login attempts on my mobile banking app. I'm extremely concerned about the security of my financial information. Has there been a data breach? What steps are you taking to protect my account? I need immediate answers and assurance that my money and personal information are safe.",
    },
    complianceMemo: {
      title: "CRITICAL: Mobile Security Incident - Regulatory Notification Required",
      from: "Information Security Team",
      content:
        "Security vulnerability discovered in mobile app authentication system. Potential exposure of 2.3M customer accounts. Must notify regulators within 72 hours per cybersecurity guidelines. Coordinated response required across all departments. Customer communications must be prepared immediately.",
    },
    metrics: [
      { label: "Potentially Affected Accounts", value: "2.3M", change: "Critical exposure level" },
      { label: "Unauthorized Login Attempts", value: "15,847", change: "↑ 2,340% spike detected" },
      { label: "App Store Rating", value: "2.8/5", change: "↓ 1.9 points today" },
      { label: "Customer Service Calls", value: "12,450", change: "↑ 890% vs normal" },
    ],
    stakeholders: [
      { name: "Jennifer Martinez", role: "Fraud Operations Manager", department: "Risk" },
      { name: "Lisa Thompson", role: "AML Compliance Officer", department: "Compliance" },
      { name: "David Chen", role: "Customer Experience Lead", department: "CX" },
      { name: "Michael Rodriguez", role: "Platform Product Manager", department: "Product" },
      { name: "Amanda Foster", role: "Operations Manager", department: "Operations" },
      { name: "Robert Kim", role: "Technical Lead", department: "Engineering" },
      { name: "Rachel Green", role: "Legal Counsel", department: "Legal" },
      { name: "Patricia Wong", role: "Credit Risk Manager", department: "Risk" },
    ],
  },
  {
    id: "credit-application-delays",
    title: "Credit Card Application Processing Bottlenecks",
    description:
      "Credit card applications are taking 12+ days to process instead of the target 2-3 days, impacting revenue and customer acquisition.",
    difficulty: "Intermediate",
    stakeholderCount: 8,
    estimatedTime: "18-22 min",
    learningTasks: 3,
    customerComplaint: {
      from: "frustrated.applicant@email.com",
      subject: "Credit Card Application - Still Pending After 2 Weeks",
      body: "I applied for your premium credit card 14 days ago and it's still showing as 'under review.' Your website said 2-3 business days. I've called three times and get different answers each time. This is ridiculous - I'm going to apply with your competitor who can approve applications instantly. You're losing customers with this slow process.",
    },
    complianceMemo: {
      title: "Credit Application Processing Delays - Revenue Impact Analysis",
      from: "Credit Risk Management",
      content:
        "Application processing delays are causing significant revenue loss. We're losing approximately $2.8M monthly in potential credit card revenue due to application abandonment. Processing times have increased from 2.3 days to 12.1 days average. Competitive disadvantage is severe as competitors offer instant approval.",
    },
    metrics: [
      { label: "Average Processing Time", value: "12.1 days", change: "↑ 9.8 days vs target" },
      { label: "Application Abandonment", value: "34%", change: "↑ 28% vs last quarter" },
      { label: "Monthly Revenue Loss", value: "$2.8M", change: "↑ $2.1M impact" },
      { label: "Competitor Advantage", value: "Instant", change: "vs our 12+ days" },
    ],
    stakeholders: [
      { name: "Jennifer Martinez", role: "Fraud Operations Manager", department: "Risk" },
      { name: "Lisa Thompson", role: "AML Compliance Officer", department: "Compliance" },
      { name: "David Chen", role: "Customer Experience Lead", department: "CX" },
      { name: "Michael Rodriguez", role: "Platform Product Manager", department: "Product" },
      { name: "Amanda Foster", role: "Operations Manager", department: "Operations" },
      { name: "Robert Kim", role: "Technical Lead", department: "Engineering" },
      { name: "Rachel Green", role: "Legal Counsel", department: "Legal" },
      { name: "Patricia Wong", role: "Credit Risk Manager", department: "Risk" },
    ],
  },
  {
    id: "digital-platform-outage",
    title: "Digital Banking Platform Outage",
    description:
      "The main digital banking platform experienced a 4-hour outage affecting 8.2M customers during peak usage hours.",
    difficulty: "Advanced",
    stakeholderCount: 8,
    estimatedTime: "20-25 min",
    learningTasks: 3,
    customerComplaint: {
      from: "angry.customer@email.com",
      subject: "4 Hour Outage - Completely Unacceptable",
      body: "Your entire banking system was down for 4 hours today during lunch time when I needed to make an urgent payment. I couldn't access my account, couldn't transfer money, couldn't pay bills. This is completely unacceptable for a major bank. I lost money because I couldn't complete a time-sensitive transaction. What are you going to do to compensate customers and prevent this from happening again?",
    },
    complianceMemo: {
      title: "URGENT: Platform Outage - Operational Risk Assessment",
      from: "Operations Risk Team",
      content:
        "4-hour platform outage affected 8.2M customers during peak hours. $47M in blocked transactions. Significant reputational damage and potential regulatory scrutiny. Root cause analysis required immediately. Business continuity plans need review. Customer compensation strategy needed.",
    },
    metrics: [
      { label: "Affected Customers", value: "8.2M", change: "100% of digital users" },
      { label: "Outage Duration", value: "4.2 hours", change: "Longest in 3 years" },
      { label: "Blocked Transactions", value: "$47M", change: "Critical business impact" },
      { label: "Social Media Mentions", value: "45,000", change: "↑ 12,000% negative sentiment" },
    ],
    stakeholders: [
      { name: "Jennifer Martinez", role: "Fraud Operations Manager", department: "Risk" },
      { name: "Lisa Thompson", role: "AML Compliance Officer", department: "Compliance" },
      { name: "David Chen", role: "Customer Experience Lead", department: "CX" },
      { name: "Michael Rodriguez", role: "Platform Product Manager", department: "Product" },
      { name: "Amanda Foster", role: "Operations Manager", department: "Operations" },
      { name: "Robert Kim", role: "Technical Lead", department: "Engineering" },
      { name: "Rachel Green", role: "Legal Counsel", department: "Legal" },
      { name: "Patricia Wong", role: "Credit Risk Manager", department: "Risk" },
    ],
  },
  {
    id: "regulatory-reporting-failure",
    title: "Automated Regulatory Reporting System Failure",
    description:
      "The automated system for generating critical regulatory reports has failed, risking compliance violations and regulatory penalties.",
    difficulty: "Advanced",
    stakeholderCount: 8,
    estimatedTime: "22-25 min",
    learningTasks: 3,
    customerComplaint: {
      from: "business.customer@company.com",
      subject: "Regulatory Reporting Delays Affecting Our Business",
      body: "We rely on your bank's regulatory reporting for our own compliance requirements. The delays in your BSA/AML reporting are now affecting our ability to meet our regulatory obligations. This is creating a cascade effect that could result in penalties for our business. We need immediate resolution and assurance this won't happen again.",
    },
    complianceMemo: {
      title: "CRITICAL: Regulatory Reporting System Failure - Immediate Action Required",
      from: "Chief Compliance Officer",
      content:
        "Automated regulatory reporting system has been generating incorrect BSA/AML reports for 6+ weeks. We are now in violation of multiple regulatory requirements. Potential penalties could exceed $50M. Manual reporting processes initiated but insufficient. System restoration is critical priority. Regulatory notifications may be required.",
    },
    metrics: [
      { label: "Reporting Accuracy", value: "23%", change: "↓ 77% from required 100%" },
      { label: "Compliance Violations", value: "47", change: "↑ from 0 baseline" },
      { label: "Potential Penalties", value: "$50M+", change: "Escalating daily" },
      { label: "Manual Processing Load", value: "340%", change: "↑ unsustainable levels" },
    ],
    stakeholders: [
      { name: "Jennifer Martinez", role: "Fraud Operations Manager", department: "Risk" },
      { name: "Lisa Thompson", role: "AML Compliance Officer", department: "Compliance" },
      { name: "David Chen", role: "Customer Experience Lead", department: "CX" },
      { name: "Michael Rodriguez", role: "Platform Product Manager", department: "Product" },
      { name: "Amanda Foster", role: "Operations Manager", department: "Operations" },
      { name: "Robert Kim", role: "Technical Lead", department: "Engineering" },
      { name: "Rachel Green", role: "Legal Counsel", department: "Legal" },
      { name: "Patricia Wong", role: "Credit Risk Manager", department: "Risk" },
    ],
  },
]
