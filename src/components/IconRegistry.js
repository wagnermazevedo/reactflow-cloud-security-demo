import {
  siAmazonaws,
  siMicrosoftazure,
  siGooglecloud,
  siKubernetes,
  siDocker,
  siGithub,
  siGitlab,
  siTerraform,
  siJenkins,
  siPrometheus,
  siGrafana,
  siDatadog,
  siSplunk,
  siElastic,
  siSlack,
  siOpenai,
  siPaloaltonetworks,
  siCrowdstrike,
  siSnyk,
  siSonarqube,
  siVault,
  siOkta,
  siAuth0,
  siLinux,
  siRedhat,
  siMongodb,
  siPostgresql,
  siMysql,
  siRedis,
  siApachekafka,
  siRabbitmq,
  siNginx,
  siCloudflare,
} from 'simple-icons';

const simple = (value) => ({ type: 'simple', value });

const fallback = (shortLabel, bg, fg = '#111827') => ({
  type: 'fallback',
  shortLabel,
  bg,
  fg,
});

export const IconRegistry = {
  providers: {
    aws: simple(siAmazonaws),
    azure: simple(siMicrosoftazure),
    gcp: simple(siGooglecloud),
  },

  awsServices: {
    securityHub: fallback('SH', '#E8F1FE', '#1D4ED8'),
    guardDuty: fallback('GD', '#FEF3C7', '#92400E'),
    inspector: fallback('IN', '#F3E8FF', '#6B21A8'),
    config: fallback('CF', '#DBEAFE', '#1E40AF'),
    macie: fallback('MC', '#FCE7F3', '#9D174D'),
    iam: fallback('IAM', '#E5E7EB', '#111827'),
    lambda: fallback('λ', '#FFF7ED', '#C2410C'),
    eventBridge: fallback('EB', '#EEF2FF', '#4338CA'),
    cloudTrail: fallback('CT', '#ECFEFF', '#155E75'),
    cloudWatch: fallback('CW', '#FDF2F8', '#9D174D'),
    securityLake: fallback('SL', '#DCFCE7', '#166534'),
    organizations: fallback('ORG', '#F3F4F6', '#111827'),
    waf: fallback('WAF', '#FEE2E2', '#991B1B'),
    vpc: fallback('VPC', '#EFF6FF', '#1D4ED8'),
    ec2: fallback('EC2', '#FFF7ED', '#9A3412'),
    s3: fallback('S3', '#ECFCCB', '#3F6212'),
    eks: fallback('EKS', '#FEF3C7', '#92400E'),
    ecs: fallback('ECS', '#E0E7FF', '#3730A3'),
    fargate: fallback('FG', '#F3E8FF', '#6B21A8'),
    sns: fallback('SNS', '#FCE7F3', '#9D174D'),
    sqs: fallback('SQS', '#E0F2FE', '#075985'),
  },

  azureServices: {
    defenderForCloud: fallback('MDC', '#E0F2FE', '#075985'),
    sentinel: fallback('SEN', '#EEF2FF', '#3730A3'),
    entraId: fallback('ID', '#EDE9FE', '#5B21B6'),
    logicApps: fallback('LA', '#F0FDF4', '#166534'),
    functions: fallback('FN', '#FFF7ED', '#C2410C'),
    storage: fallback('ST', '#EFF6FF', '#1D4ED8'),
    aks: fallback('AKS', '#DBEAFE', '#1E40AF'),
    virtualMachines: fallback('VM', '#F3F4F6', '#111827'),
    keyVault: simple(siVault),
  },

  gcpServices: {
    securityCommandCenter: fallback('SCC', '#E0F2FE', '#075985'),
    cloudRun: fallback('CR', '#EEF2FF', '#3730A3'),
    cloudFunctions: fallback('CF', '#FFF7ED', '#C2410C'),
    gke: fallback('GKE', '#DBEAFE', '#1E40AF'),
    cloudArmor: fallback('ARM', '#FEE2E2', '#991B1B'),
    cloudLogging: fallback('LOG', '#ECFEFF', '#155E75'),
    iam: fallback('IAM', '#F3F4F6', '#111827'),
    storage: fallback('GCS', '#ECFCCB', '#3F6212'),
  },

  securityPlatforms: {
    paloAlto: simple(siPaloaltonetworks),
    crowdStrike: simple(siCrowdstrike),
    snyk: simple(siSnyk),
    sonarqube: simple(siSonarqube),
    datadog: simple(siDatadog),
    splunk: simple(siSplunk),
    elastic: simple(siElastic),
    cloudflare: simple(siCloudflare),
    okta: simple(siOkta),
    auth0: simple(siAuth0),
    slack: simple(siSlack),
    openai: simple(siOpenai),
  },

  containerDevSecOps: {
    kubernetes: simple(siKubernetes),
    docker: simple(siDocker),
    github: simple(siGithub),
    gitlab: simple(siGitlab),
    terraform: simple(siTerraform),
    jenkins: simple(siJenkins),
    prometheus: simple(siPrometheus),
    grafana: simple(siGrafana),
    vault: simple(siVault),
    nginx: simple(siNginx),
  },

  dataPlatforms: {
    kafka: simple(siApachekafka),
    rabbitmq: simple(siRabbitmq),
    mongodb: simple(siMongodb),
    postgresql: simple(siPostgresql),
    mysql: simple(siMysql),
    redis: simple(siRedis),
  },

  operatingSystems: {
    linux: simple(siLinux),
    redhat: simple(siRedhat),
  },
[O};

export const getIcon = (path) => {
  const parts = path.split('.');
  let current = IconRegistry;

  for (const part of parts) {
    current = current?.[part];
    if (!current) return null;
  }

  return current;
};
