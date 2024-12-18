export const tasks = [
  {
    roleTitle: "Data Engineer",
    deliverableTitle: "Data Pipeline Architecture",
    description:
      "Map out all data input sources and output destinations using Draw.io or LucidChart to create visual diagrams, while documenting the specifications in Confluence to ensure the team has a clear understanding of data flow.",
    tools: ["LucidChart", "Confluence"],
  },
  {
    roleTitle: "Data Engineer",
    deliverableTitle: "Data Pipeline Architecture",
    description:
      "Create comprehensive architecture diagrams using Mermaid or C4 modeling tools to visualize how data moves through the system, including transformation steps and storage points, which helps stakeholders understand the overall system design.",
    tools: ["Mermaid", "C4 Model"],
  },
  {
    roleTitle: "Data Engineer",
    deliverableTitle: "Data Pipeline Architecture",
    description:
      "Use dbt for data modeling and Apache Atlas for metadata management to define how data will be structured and stored, ensuring data consistency and making it easier for team members to understand data organization.",
    tools: ["dbt", "Apache Atlas"],
  },
  {
    roleTitle: "Data Engineer",
    deliverableTitle: "Data Pipeline Architecture",
    description:
      "Develop infrastructure-as-code using Terraform or CloudFormation to specify all necessary cloud resources, enabling automated and consistent environment setup across different stages of development.",
    tools: ["Terraform", "CloudFormation"],
  },
  {
    roleTitle: "Data Engineer",
    deliverableTitle: "Data Pipeline Architecture",
    description:
      "Set up Grafana dashboards connected to Prometheus metrics collection to track pipeline health and performance, allowing teams to quickly identify and respond to issues.",
    tools: ["Grafana", "Prometheus"],
  },
  {
    roleTitle: "Data Engineer",
    deliverableTitle: "ETL Framework Implementation",
    description:
      "Configure development environments using Docker containers managed by Kubernetes, ensuring all team members have consistent development setups and can easily replicate the production environment.",
    tools: ["Docker", "Kubernetes"],
  },
  {
    roleTitle: "Data Engineer",
    deliverableTitle: "ETL Framework Implementation",
    description:
      "Build data ingestion processes using Apache Airflow for orchestration and Apache Spark for large-scale data processing, enabling efficient handling of data from various sources.",
    tools: ["Apache Airflow", "Apache Spark"],
  },
  {
    roleTitle: "Data Engineer",
    deliverableTitle: "ETL Framework Implementation",
    description:
      "Develop data transformation rules using dbt for SQL transformations and Python with PySpark for complex processing, ensuring data is properly formatted and cleaned for downstream use.",
    tools: ["dbt", "Python", "PySpark"],
  },
  {
    roleTitle: "ML Engineer",
    deliverableTitle: "Model Architecture Design",
    description:
      "Use research tools like Papers with Code and arXiv to identify suitable model architectures, while documenting findings in Jupyter notebooks for reproducibility and team collaboration.",
    tools: ["Papers with Code", "arXiv", "Jupyter"],
  },
  {
    roleTitle: "ML Engineer",
    deliverableTitle: "Model Architecture Design",
    description:
      "Create initial model implementations using PyTorch or TensorFlow deep learning frameworks, establishing a foundation for future improvements and experimentation.",
    tools: ["PyTorch", "TensorFlow"],
  },
  {
    roleTitle: "ML Engineer",
    deliverableTitle: "Model Architecture Design",
    description:
      "Configure MLflow or Weights & Biases to track experiments, hyperparameters, and results, enabling systematic comparison of different approaches and model versions.",
    tools: ["MLflow", "Weights & Biases"],
  },
  {
    roleTitle: "MLOps Engineer",
    deliverableTitle: "Deployment Pipeline Setup",
    description:
      "Set up Jenkins or GitHub Actions to automate the testing and deployment process, ensuring that code changes are automatically validated and deployed through proper testing environments.",
    tools: ["Jenkins", "GitHub Actions"],
  },
  {
    roleTitle: "MLOps Engineer",
    deliverableTitle: "Deployment Pipeline Setup",
    description:
      "Create comprehensive test suites using PyTest for Python components and Jest for JavaScript interfaces, automatically validating both model performance and system functionality before deployment.",
    tools: ["PyTest", "Jest"],
  },
  {
    roleTitle: "MLOps Engineer",
    deliverableTitle: "Monitoring Framework",
    description:
      "Set up Prometheus to collect system-level metrics and custom application metrics, enabling comprehensive monitoring of the entire infrastructure.",
    tools: ["Prometheus", "Grafana"],
  },
  {
    roleTitle: "AI Engineer",
    deliverableTitle: "System Architecture",
    description:
      "Use C4 model visualization tools and Draw.io to create detailed architecture diagrams, clearly showing how different AI components interact within the system.",
    tools: ["C4 Model", "Draw.io"],
  },
  {
    roleTitle: "AI Engineer",
    deliverableTitle: "Integration Development",
    description:
      "Build REST APIs using FastAPI or Flask, creating efficient interfaces for model interaction and data processing.",
    tools: ["FastAPI", "Flask"],
  },
  {
    roleTitle: "Prompt Engineer",
    deliverableTitle: "Prompt Strategy Design",
    description:
      "Use LangChain or custom template engines to develop standardized prompt formats, ensuring consistency across different use cases.",
    tools: ["LangChain", "Python"],
  },
  {
    roleTitle: "AI Ethics Specialist",
    deliverableTitle: "Ethics Framework Development",
    description:
      "Develop comprehensive assessment templates using Notion or Confluence, standardizing the ethical review process across projects.",
    tools: ["Notion", "Confluence"],
  },
  {
    roleTitle: "AI Ethics Specialist",
    deliverableTitle: "Bias Detection and Mitigation",
    description:
      "Create custom analysis tools using AIF360 or Fairlearn to identify potential biases in model behavior and data.",
    tools: ["AIF360", "Fairlearn"],
  },
  {
    roleTitle: "ML Engineer",
    deliverableTitle: "Data Preprocessing Pipeline",
    description:
      "Implement robust data preprocessing pipelines using NumPy and Pandas, including feature engineering, normalization, and validation steps to ensure high-quality model inputs.",
    tools: ["NumPy", "Pandas"],
  },
  {
    roleTitle: "ML Engineer",
    deliverableTitle: "Model Training Pipeline",
    description:
      "Develop automated training pipelines using PyTorch Lightning or Keras, incorporating cross-validation, early stopping, and model checkpointing for reliable model development.",
    tools: ["PyTorch Lightning", "Keras"],
  },
  {
    roleTitle: "ML Engineer",
    deliverableTitle: "Model Evaluation Framework",
    description:
      "Create comprehensive evaluation scripts using Scikit-learn and custom metrics, ensuring thorough assessment of model performance across different scenarios and data subsets.",
    tools: ["Scikit-learn", "Python"],
  },
  {
    roleTitle: "MLOps Engineer",
    deliverableTitle: "Model Versioning System",
    description:
      "Implement DVC (Data Version Control) and Git LFS for managing model artifacts and large datasets, ensuring reproducibility and efficient collaboration.",
    tools: ["DVC", "Git LFS"],
  },
  {
    roleTitle: "MLOps Engineer",
    deliverableTitle: "Model Serving Infrastructure",
    description:
      "Set up model serving using TorchServe or TensorFlow Serving, with containerization and load balancing for scalable production deployment.",
    tools: ["TorchServe", "TensorFlow Serving", "Docker"],
  },
  {
    roleTitle: "MLOps Engineer",
    deliverableTitle: "A/B Testing Framework",
    description:
      "Develop infrastructure for A/B testing using tools like Optimizely or custom solutions, enabling systematic comparison of model versions in production.",
    tools: ["Optimizely", "Python"],
  },
  {
    roleTitle: "AI Engineer",
    deliverableTitle: "LLM Integration Framework",
    description:
      "Develop a robust framework using LangChain or LlamaIndex for integrating and managing multiple LLM providers, ensuring fallbacks and optimal prompt handling.",
    tools: ["LangChain", "LlamaIndex"],
  },
  {
    roleTitle: "AI Engineer",
    deliverableTitle: "Caching Infrastructure",
    description:
      "Implement efficient caching mechanisms using Redis or MongoDB to store API responses and intermediate results, optimizing performance and reducing API costs.",
    tools: ["Redis", "MongoDB"],
  },
  {
    roleTitle: "Prompt Engineer",
    deliverableTitle: "Prompt Testing Framework",
    description:
      "Create systematic testing frameworks for evaluating prompt effectiveness across different scenarios and edge cases, using custom evaluation metrics.",
    tools: ["Python", "Jupyter"],
  },
  {
    roleTitle: "Prompt Engineer",
    deliverableTitle: "Prompt Version Control",
    description:
      "Implement version control and documentation systems for prompts using Git and specialized metadata tracking, ensuring prompt evolution can be tracked and managed.",
    tools: ["Git", "YAML"],
  },
  {
    roleTitle: "AI Ethics Specialist",
    deliverableTitle: "Monitoring Dashboard",
    description:
      "Create dashboards using Streamlit or Dash to visualize key fairness metrics and model behavior patterns across different demographic groups.",
    tools: ["Streamlit", "Dash"],
  },
  {
    roleTitle: "AI Ethics Specialist",
    deliverableTitle: "Documentation Framework",
    description:
      "Develop standardized documentation templates using Model Cards and DataSheets for Datasets, ensuring transparent communication of model and data characteristics.",
    tools: ["Markdown", "Jupyter"],
  },
  {
    roleTitle: "AI Ethics Specialist",
    deliverableTitle: "Automated Ethics Checks",
    description:
      "Implement automated testing pipelines that check for common ethical issues, bias patterns, and fairness metrics as part of the CI/CD process.",
    tools: ["Python", "GitHub Actions"],
  },
];
