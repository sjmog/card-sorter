"use client";

import { GlossaryTerm } from "../components/GlossaryTerm";

export const roles = {
  "Data Engineer": {
    description:
      "Builds and maintains the systems that collect, store, and prepare data for use by the team.",
    needs: [
      {
        what: "Training data requirements",
        from: ["ML Engineer", "AI Engineer"],
        usage: (
          <span>
            To design appropriate{" "}
            <GlossaryTerm term="data pipeline">data pipelines</GlossaryTerm> and{" "}
            <GlossaryTerm term="feature">feature</GlossaryTerm> processing
            workflows
          </span>
        ),
        example:
          "When building a recommendation system, the Data Engineer creates pipelines that merge user interactions from web, mobile, and in-store systems.",
        how: "They write ETL jobs using Apache Spark, implement data validation checks, and create automated workflows that maintain data freshness and quality.",
      },
      {
        what: "Data quality standards",
        from: ["AI Ethics Specialist"],
        usage: (
          <span>
            To implement{" "}
            <GlossaryTerm term="data validation">data validation</GlossaryTerm>{" "}
            and bias checking systems
          </span>
        ),
        example:
          "After identifying potential demographic bias, the Data Engineer adds automated checks to ensure balanced representation.",
        how: "They create validation rules in the processing pipeline, set up monitoring dashboards, and implement alerts for data drift detection.",
      },
    ],
    provides: [
      {
        what: "Processed datasets",
        to: ["ML Engineer", "AI Engineer"],
        usage: (
          <span>
            Clean, validated data for{" "}
            <GlossaryTerm term="model training">model training</GlossaryTerm>
          </span>
        ),
        example:
          "ML Engineers can now train models confidently because all data is properly formatted and validated.",
        how: "They maintain a feature store, document data lineage, and provide APIs for accessing the latest validated data.",
      },
      {
        what: "Data quality metrics",
        to: ["MLOps Engineer", "AI Ethics Specialist"],
        usage: "Monitoring and validation of data quality in production",
        example:
          "The MLOps team can trigger model retraining based on data quality metrics.",
        how: "They deploy monitoring systems, maintain metrics dashboards, and set up automated quality alerts.",
      },
    ],
  },

  "ML Engineer": {
    description:
      "Creates and optimizes traditional machine learning models for specific business problems.",
    needs: [
      {
        what: "Clean datasets",
        from: ["Data Engineer"],
        usage: (
          <span>
            Training data for building{" "}
            <GlossaryTerm term="model">models</GlossaryTerm>
          </span>
        ),
        example:
          "Using cleaned transaction data to build a fraud detection system.",
        how: "They access data through the feature store, validate distributions, and create training/test splits.",
      },
      {
        what: "Deployment infrastructure",
        from: ["MLOps Engineer"],
        usage: (
          <span>
            Resources for running models in{" "}
            <GlossaryTerm term="production">production</GlossaryTerm>
          </span>
        ),
        example:
          "Optimizing model performance based on production metrics and constraints.",
        how: "They profile resource usage, implement model compression, and adapt to infrastructure limitations.",
      },
    ],
    provides: [
      {
        what: "Trained models",
        to: ["MLOps Engineer"],
        usage: (
          <span>
            Production-ready{" "}
            <GlossaryTerm term="model artifact">model artifacts</GlossaryTerm>
          </span>
        ),
        example:
          "Delivering a fully trained recommendation model with documented performance characteristics.",
        how: "They package model files, specify resource requirements, and provide validation test cases.",
      },
      {
        what: "Performance metrics",
        to: ["AI Product Manager", "AI Ethics Specialist"],
        usage: "Model success and fairness measurements",
        example:
          "Providing detailed performance breakdowns across user segments.",
        how: "They generate evaluation reports, conduct A/B tests, and analyze model behavior.",
      },
    ],
  },

  "MLOps Engineer": {
    description:
      "Ensures ML systems run reliably in production through robust infrastructure and monitoring.",
    needs: [
      {
        what: "Model artifacts",
        from: ["ML Engineer", "AI Engineer"],
        usage: (
          <span>
            Validated models ready for{" "}
            <GlossaryTerm term="deployment">deployment</GlossaryTerm>
          </span>
        ),
        example:
          "Receiving a trained model with its dependencies and resource requirements.",
        how: "They validate model packages, check resource specifications, and verify integration requirements.",
      },
      {
        what: "Quality requirements",
        from: ["AI Ethics Specialist", "AI Product Manager"],
        usage: "Standards for model monitoring and maintenance",
        example:
          "Implementing monitoring based on fairness metrics and performance targets.",
        how: "They set up monitoring systems, create alerts, and establish maintenance procedures.",
      },
    ],
    provides: [
      {
        what: "Deployment platform",
        to: ["ML Engineer", "AI Engineer"],
        usage: (
          <span>
            Infrastructure for running models in{" "}
            <GlossaryTerm term="production">production</GlossaryTerm>
          </span>
        ),
        example: "Providing scalable infrastructure for serving ML models.",
        how: "They manage cloud resources, set up deployment pipelines, and maintain monitoring systems.",
      },
      {
        what: "Performance monitoring",
        to: ["AI Product Manager", "ML Engineer"],
        usage: "Real-time model behavior tracking",
        example: "Tracking model performance and resource usage in production.",
        how: "They collect metrics, generate reports, and maintain monitoring dashboards.",
      },
    ],
  },

  "AI Engineer": {
    description:
      "Develops advanced AI systems using cutting-edge techniques like deep learning and large language models.",
    needs: [
      {
        what: "Training infrastructure",
        from: ["MLOps Engineer"],
        usage: (
          <span>
            Resources for training{" "}
            <GlossaryTerm term="deep learning">deep learning</GlossaryTerm>{" "}
            models
          </span>
        ),
        example: "Setting up distributed training for a large language model.",
        how: "They configure GPU clusters, optimize training scripts, and manage model checkpoints.",
      },
      {
        what: "Training data",
        from: ["Data Engineer"],
        usage: "High-quality data for model development",
        example: "Using processed text data to train a language model.",
        how: "They validate data quality, create efficient data loading pipelines, and manage training datasets.",
      },
    ],
    provides: [
      {
        what: "AI models",
        to: ["MLOps Engineer", "Prompt Engineer"],
        usage: "Production-ready AI systems",
        example: "Delivering a trained language model for deployment.",
        how: "They optimize model architecture, validate performance, and provide deployment specifications.",
      },
      {
        what: "Technical guidance",
        to: ["AI Product Manager", "Prompt Engineer"],
        usage: "AI system capabilities and limitations",
        example:
          "Explaining what's technically possible with current AI models.",
        how: "They document model capabilities, provide examples, and suggest best practices.",
      },
    ],
  },
  "Prompt Engineer": {
    description:
      "Optimizes interactions with language models to achieve reliable, high-quality outputs.",
    needs: [
      {
        what: "Model capabilities",
        from: ["AI Engineer"],
        usage: (
          <span>
            Understanding of{" "}
            <GlossaryTerm term="language model">language model</GlossaryTerm>{" "}
            behavior and limitations
          </span>
        ),
        example:
          "Learning how a new model handles different types of instructions and contexts.",
        how: "They experiment with model behaviors, document limitations, and develop testing frameworks.",
      },
      {
        what: "Use case requirements",
        from: ["AI Product Manager"],
        usage: "Specific goals for AI system behavior",
        example:
          "Understanding the desired tone and style for a customer service AI.",
        how: "They analyze requirements, create evaluation criteria, and develop prompt templates.",
      },
    ],
    provides: [
      {
        what: "Prompt patterns",
        to: ["AI Engineer", "AI Product Manager"],
        usage: (
          <span>
            Optimized <GlossaryTerm term="prompt">prompts</GlossaryTerm> and
            interaction patterns
          </span>
        ),
        example:
          "Delivering a set of tested prompts for consistent AI responses.",
        how: "They create prompt libraries, document best practices, and provide usage guidelines.",
      },
      {
        what: "Behavior analysis",
        to: ["AI Ethics Specialist"],
        usage: "Model interaction patterns and edge cases",
        example: "Documenting unexpected model responses and potential risks.",
        how: "They conduct systematic testing, document edge cases, and analyze failure modes.",
      },
    ],
  },
  "AI Ethics Specialist": {
    description:
      "Ensures AI systems are developed and deployed responsibly with appropriate safeguards.",
    needs: [
      {
        what: "Model behavior data",
        from: ["ML Engineer", "Prompt Engineer"],
        usage: (
          <span>
            Information about{" "}
            <GlossaryTerm term="model bias">model bias</GlossaryTerm> and
            fairness
          </span>
        ),
        example:
          "Analyzing model performance across different demographic groups.",
        how: "They analyze performance metrics, conduct fairness assessments, and review interaction patterns.",
      },
      {
        what: "System architecture",
        from: ["AI Engineer", "MLOps Engineer"],
        usage: "Technical details of AI systems",
        example: "Understanding how model decisions are made and logged.",
        how: "They review system designs, assess control mechanisms, and evaluate monitoring capabilities.",
      },
    ],
    provides: [
      {
        what: "Ethics guidelines",
        to: ["AI Engineer", "Prompt Engineer"],
        usage: "Standards for responsible AI development",
        example: "Providing guidelines for preventing harmful model outputs.",
        how: "They develop evaluation frameworks, create testing protocols, and establish safety guidelines.",
      },
      {
        what: "Risk assessments",
        to: ["AI Product Manager", "MLOps Engineer"],
        usage: (
          <span>
            Analysis of potential{" "}
            <GlossaryTerm term="ai risk">AI risks</GlossaryTerm> and mitigations
          </span>
        ),
        example:
          "Identifying potential misuse scenarios and recommending safeguards.",
        how: "They conduct risk assessments, recommend controls, and develop incident response plans.",
      },
    ],
  },
  "AI Product Manager": {
    description:
      "Guides the development of AI products by balancing technical capabilities with business needs.",
    needs: [
      {
        what: "Technical capabilities",
        from: ["AI Engineer", "ML Engineer"],
        usage: "Understanding of AI system possibilities",
        example: "Learning what's possible with current language models.",
        how: "They review technical documentation, test prototypes, and assess feasibility.",
      },
      {
        what: "Ethics reports",
        from: ["AI Ethics Specialist"],
        usage: "Risk and fairness considerations",
        example: "Understanding potential impacts on different user groups.",
        how: "They review risk assessments, analyze impact reports, and plan mitigations.",
      },
    ],
    provides: [
      {
        what: "Product requirements",
        to: ["AI Engineer", "Prompt Engineer"],
        usage: "Clear goals for AI system development",
        example: "Specifying the desired behavior of a customer service AI.",
        how: "They create detailed specifications, success criteria, and acceptance tests.",
      },
      {
        what: "Success metrics",
        to: ["MLOps Engineer", "ML Engineer"],
        usage: (
          <span>
            Definition of{" "}
            <GlossaryTerm term="model performance">
              model performance
            </GlossaryTerm>{" "}
            targets
          </span>
        ),
        example:
          "Setting accuracy and latency requirements for production models.",
        how: "They define KPIs, establish performance thresholds, and create evaluation frameworks.",
      },
    ],
  },
};

export const roleDifferences = {
  "Data Engineer": {
    "ML Engineer": "Focuses on data infrastructure and pipelines rather than building models. Works with raw data rather than training algorithms.",
    "MLOps Engineer": "Handles data quality and processing rather than model deployment. Builds data pipelines instead of deployment pipelines.",
    "AI Engineer": "Works with traditional data systems rather than AI models. Focuses on data preparation rather than model architecture.",
    "Prompt Engineer": "Manages data infrastructure rather than model interactions. Works with structured data rather than natural language.",
    "AI Ethics Specialist": "Implements data quality checks rather than ethical guidelines. Focuses on technical data integrity rather than ethical implications.",
    "AI Product Manager": "Handles technical data implementation rather than product strategy. Focuses on data systems rather than business requirements.",
  },
  "ML Engineer": {
    "Data Engineer": "Builds models rather than data infrastructure. Works with processed data rather than raw data pipelines.",
    "MLOps Engineer": "Develops models rather than deployment systems. Focuses on algorithm performance rather than operational reliability.",
    "AI Engineer": "Works with traditional ML rather than deep learning/LLMs. Uses established algorithms rather than cutting-edge AI techniques.",
    "Prompt Engineer": "Creates mathematical models rather than natural language prompts. Works with structured algorithms rather than language patterns.",
    "AI Ethics Specialist": "Optimizes for performance rather than ethical considerations. Focuses on technical metrics rather than societal impact.",
    "AI Product Manager": "Handles technical implementation rather than product strategy. Focuses on model development rather than business requirements.",
  },
  "MLOps Engineer": {
    "Data Engineer": "Manages model deployment rather than data pipelines. Focuses on operational reliability rather than data quality.",
    "ML Engineer": "Handles deployment rather than model development. Focuses on reliability rather than algorithm performance.",
    "AI Engineer": "Deploys models rather than developing them. Focuses on operations rather than model architecture.",
    "Prompt Engineer": "Manages infrastructure rather than model interactions. Works with system reliability rather than prompt design.",
    "AI Ethics Specialist": "Implements monitoring rather than ethical guidelines. Focuses on operational metrics rather than ethical implications.",
    "AI Product Manager": "Handles technical operations rather than product strategy. Focuses on reliability rather than business requirements.",
  },
  "AI Engineer": {
    "Data Engineer": "Develops AI models rather than data infrastructure. Works with model architecture rather than data pipelines.",
    "ML Engineer": "Works with advanced AI rather than traditional ML. Uses cutting-edge techniques rather than established algorithms.",
    "MLOps Engineer": "Develops models rather than deployment systems. Focuses on model architecture rather than operational reliability.",
    "Prompt Engineer": "Creates model architecture rather than interaction patterns. Works with technical implementation rather than prompt design.",
    "AI Ethics Specialist": "Optimizes for capability rather than ethical considerations. Focuses on technical advancement rather than societal impact.",
    "AI Product Manager": "Handles technical innovation rather than product strategy. Focuses on AI capabilities rather than business requirements.",
  },
  "Prompt Engineer": {
    "Data Engineer": "Designs model interactions rather than data systems. Works with natural language rather than structured data.",
    "ML Engineer": "Creates interaction patterns rather than algorithms. Works with language rather than mathematical models.",
    "MLOps Engineer": "Designs prompts rather than deployment systems. Focuses on model behavior rather than operational reliability.",
    "AI Engineer": "Optimizes interactions rather than model architecture. Works with existing models rather than developing new ones.",
    "AI Ethics Specialist": "Focuses on effectiveness rather than ethical implications. Works with practical usage rather than ethical guidelines.",
    "AI Product Manager": "Handles interaction design rather than product strategy. Focuses on model behavior rather than business requirements.",
  },
  "AI Ethics Specialist": {
    "Data Engineer": "Develops ethical guidelines rather than technical systems. Focuses on implications rather than implementation.",
    "ML Engineer": "Evaluates impact rather than performance. Focuses on fairness rather than technical metrics.",
    "MLOps Engineer": "Creates guidelines rather than systems. Focuses on ethics rather than operations.",
    "AI Engineer": "Assesses implications rather than capabilities. Focuses on impact rather than technical advancement.",
    "Prompt Engineer": "Evaluates ethical concerns rather than effectiveness. Works with guidelines rather than interaction patterns.",
    "AI Product Manager": "Handles ethical oversight rather than product strategy. Focuses on responsible AI rather than business goals.",
  },
  "AI Product Manager": {
    "Data Engineer": "Develops strategy rather than technical systems. Focuses on business rather than data infrastructure.",
    "ML Engineer": "Defines requirements rather than implementations. Focuses on value rather than technical performance.",
    "MLOps Engineer": "Sets goals rather than manages systems. Focuses on strategy rather than operations.",
    "AI Engineer": "Manages products rather than technical development. Focuses on business rather than AI capabilities.",
    "Prompt Engineer": "Defines objectives rather than interactions. Works with requirements rather than prompt design.",
    "AI Ethics Specialist": "Balances business needs with ethics rather than focusing solely on ethical implications.",
  },
};

export const glossaryTerms = {
  model: {
    definition: "A computer system trained on data to perform specific tasks",
    example:
      "A recommendation model suggests products based on past purchases.",
  },
  "data pipeline": {
    definition:
      "Automated system for collecting, processing, and delivering data",
    example: "The pipeline processes new customer data every night.",
  },
  feature: {
    definition:
      "Individual measurable property used as input for machine learning",
    example: "Customer age and purchase history are features in the model.",
  },
  "model training": {
    definition: "Process of teaching a model to make predictions from data",
    example: "Model training took three days using the latest dataset.",
  },
  production: {
    definition: "Live environment where AI systems serve real users",
    example: "The model was moved to production after testing.",
  },
  deployment: {
    definition: "Process of making an AI system available for use",
    example: "Model deployment includes testing and monitoring setup.",
  },
  "deep learning": {
    definition: "Machine learning using neural networks with many layers",
    example: "Deep learning powers the image recognition system.",
  },
  "language model": {
    definition: "AI system trained to understand and generate human language",
    example: "The chatbot uses a language model to respond to questions.",
  },
  prompt: {
    definition: "Instructions given to an AI system to guide its response",
    example: "The prompt tells the AI how to format its output.",
  },
  "model bias": {
    definition: "Systematic errors in model behavior affecting certain groups",
    example: "Testing revealed bias in the hiring model's recommendations.",
  },
  "ai risk": {
    definition: "Potential negative impacts of AI system deployment",
    example: "Privacy concerns are a key AI risk to address.",
  },
  "model performance": {
    definition: "Measures of how well an AI system achieves its goals",
    example: "The model achieved 95% accuracy on test data.",
  },
};
