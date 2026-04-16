export const heroContent = {
  headline: "Credit risk is a signal\nprocessing problem.",
  subtext:
    "Five years governing PD models across a $3B+ commercial lending portfolio at PayPal. Extracting signals others overlook. Defending architecture in governance forums.",
  ctaPrimary: { label: "View Work", href: "#case-studies" },
  ctaSecondary: { label: "See Thought Process", href: "#philosophy" },
};

export const projects = [
  {
    title: "FFT-Based Periodicity Features",
    company: "PayPal",
    problem:
      "Standard merchant transaction aggregation masks cashflow volatility. Rolling averages destroy the temporal signal that predicts default.",
    insight:
      "FFT applied to daily deposit sequences isolates dominant business cycle frequency, normalising downstream RFM metrics beyond arbitrary calendar windows.",
    approach:
      "Engineered FFT-based feature pipeline over merchant transaction data. Features normalise RFM calculations to actual business cycles rather than monthly windows.",
    impact:
      "20 bps KS improvement in production PD models. Survived three rounds of MRM validation with no amendments.",
    metric: "20 bps KS",
    tags: ["XGBoost", "FFT", "Signal Engineering", "MRM", "Python"],
  },
  {
    title: "Multi-Horizon Delinquency Framework",
    company: "PayPal",
    problem:
      "The standard 30-DPD at 3-month horizon failed to capture adverse selection in specific merchant segments, leaving tail risk invisible.",
    insight:
      "Multi-window (3–12 month) monitoring reveals segment-specific risk patterns that single-horizon frameworks structurally cannot detect.",
    approach:
      "Proposed, challenged in Credit Risk Strategy Committee, and adopted a 3–12 month multi-window framework as production policy — not merely a model input.",
    impact:
      "18% early-stage delinquency reduction. Framework adopted as governance standard for US & UK commercial portfolios.",
    metric: "18% ↓ DPD",
    tags: ["Policy Architecture", "Champion-Challenger", "Risk Governance", "SQL"],
  },
  {
    title: "Open Banking PSD2 Integration",
    company: "PayPal UK",
    problem:
      "Thin-file commercial segments with structurally limited credit bureau history were being declined at disproportionate rates.",
    insight:
      "Recurring obligation detection and income stability metrics derived from Open Banking APIs provide stronger signals than bureau proxies for SME thin-file assessment.",
    approach:
      "Engineered transaction stability features from PSD2 Open Banking data — recurring obligations, income cadence, and cash-buffer ratios — supplementing bureau signals.",
    impact:
      "Expanded scorable population for UK commercial thin-file segments. Reduced false-positive rejection rates in underserved merchant categories.",
    metric: "Expanded Coverage",
    tags: ["Open Banking", "PSD2", "Feature Engineering", "LightGBM"],
  },
  {
    title: "Scorecard Suite — End-to-End Ownership",
    company: "Liquiloans",
    problem:
      "Required complete scorecard suite (application, risk, propensity) built and deployed with a team of 5 in under 9 months.",
    insight:
      "WoE/IV architecture combined with SHAP-driven explainability enables both MRM compliance and performance optimisation simultaneously.",
    approach:
      "Full ownership from WoE/IV architecture through champion-challenger deployment and PSI/CSI monitoring. Built fraud detection model using graph neural networks in parallel.",
    impact:
      "340 bps Gini improvement across scorecard suite. Nine-month development cycle including team formation.",
    metric: "340 bps Gini",
    tags: ["WoE/IV", "SHAP", "LightGBM", "PSI/CSI", "GNN", "Team Leadership"],
  },
  {
    title: "Zero-to-One Credit Architecture",
    company: "Jodo",
    problem:
      "Build complete credit decisioning infrastructure for a $500M education lending book without any historical default labels or existing data infrastructure.",
    insight:
      "Structural proxies from transaction data form viable base policy when labels are absent. Interest-split reconciliation logic can manage multi-lender syndication complexity.",
    approach:
      "Constructed ETL pipelines (AWS Glue, PySpark), engineered structural proxies from transaction behaviour, and developed multi-lender interest-split reconciliation from scratch.",
    impact:
      "$500M origination book operational from zero infrastructure. Full credit decisioning architecture delivered end-to-end.",
    metric: "$500M Book",
    tags: ["AWS Glue", "PySpark", "Zero-to-One", "ETL", "Credit Architecture"],
  },
];

export const philosophyItems = [
  {
    title: "Aggregation Destroys Temporal Signal",
    desc: "Credit defaults live in cashflow rhythm, not totals. FFT isolates dominant business cycle frequency that rolling averages systematically destroy. The signal is in the periodicity, not the sum.",
  },
  {
    title: "Bureau Data ≠ Transaction Data",
    desc: "Bureau measures past failure. Transaction data predicts future risk. They are complementary signals — not interchangeable substitutes. Confusing them produces models that are technically correct on flawed inputs.",
  },
  {
    title: "Model Risk is Infrastructure Risk",
    desc: "Technical correctness on flawed policy execution fails at governance reconciliation. MRM documentation is as critical as model performance. A model that cannot be defended is a model that cannot be deployed.",
  },
  {
    title: "Explainability is Governance Infrastructure",
    desc: "Defending single adverse decisions to regulators is operationally non-negotiable. SHAP-driven explainability is not a post-hoc addition — it is a first-principles architectural requirement in production lending systems.",
  },
];

export const experience = [
  {
    role: "Credit Risk Data Scientist",
    company: "PayPal",
    period: "Nov 2024 – Present",
    description:
      "Governs PD models across US & UK commercial portfolios ($3B+ AUM). Engineers FFT-based features from merchant transaction data. Integrates Open Banking PSD2 for thin-file assessment. Delivers Credit Risk Strategy Committee presentations and MRM documentation.",
    tags: ["XGBoost", "FFT", "Open Banking", "MRM", "PSD2"],
  },
  {
    role: "Senior Manager, Analytics — Risk & Data Science",
    company: "Liquiloans",
    period: "Feb 2024 – Oct 2024",
    description:
      "Led team of 5 across scorecard suite development (application, risk, propensity). Achieved 340 bps Gini improvement end-to-end. Built fraud detection model using graph neural networks. Developed multi-dimensional credit strategies (PD/EAD/LGD framework).",
    tags: ["LightGBM", "GNN", "WoE/IV", "SHAP", "PSI/CSI"],
  },
  {
    role: "Business Analyst — Strategy, Growth & Risk",
    company: "Jodo",
    period: "Oct 2022 – Dec 2023",
    description:
      "Built credit risk ML model for $500M education lending book from zero infrastructure. Engineered ETL pipelines (AWS Glue, PySpark). Developed automated reporting and product analytics for a multi-lender syndication model.",
    tags: ["AWS Glue", "PySpark", "Python", "SQL"],
  },
  {
    role: "Data Analyst — Data Science Consulting",
    company: "Accelera Eloquent",
    period: "Jan 2021 – Oct 2022",
    description:
      "Customer segmentation modelling and NLP-based review analysis. A/B testing and dashboard development across retail and eCommerce clients.",
    tags: ["Python", "NLP", "A/B Testing", "Tableau"],
  },
];

export const contactContent = {
  headline: "If you are building a serious lending business, we should talk.",
  subtext:
    "If you require models that capture reality rather than just report history — models that survive governance scrutiny and produce measurable portfolio outcomes — let's connect.",
  email: "shashishekhar.ds@gmail.com",
  availability: "UK · EU · Singapore · Canada",
  roleTarget: "Open to Senior Risk & Director positions",
};
