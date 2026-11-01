/**
 * Single source of truth for portfolio content.
 *
 * EDITABLE FIELDS
 * ---------------
 * Everything marked with square brackets (for example "[Add company]") is a
 * placeholder. Replace it with verified information. No employer, date,
 * certification, metric or result has been invented anywhere in this file.
 */

export type IconName =
  | 'ship'
  | 'anchor'
  | 'route'
  | 'clock'
  | 'swap'
  | 'container'
  | 'file'
  | 'doc'
  | 'check'
  | 'shield'
  | 'code'
  | 'hash'
  | 'alert'
  | 'database'
  | 'gauge'
  | 'chart'
  | 'users'
  | 'link'
  | 'target'
  | 'layers'
  | 'flow'
  | 'app'
  | 'table'
  | 'grid'
  | 'spark'
  | 'wand'
  | 'prompt'
  | 'monitor'
  | 'mail'
  | 'cloud'
  | 'message'
  | 'briefcase'
  | 'pin'
  | 'arrow'
  | 'repeat'
  | 'search'
  | 'sliders'
  | 'play'

export interface Profile {
  name: string
  shortName: string
  tagline: string
  altTagline: string
  positioning: string
  heroDescription: string
  email: string
  linkedin: string
  linkedinLabel: string
  github: string
  githubLabel: string
  location: string
  resumeUrl: string
}

// Lives in public/. The build fails if this file is missing (scripts/check-resume.mjs).
const RESUME_FILE = 'RUFIN_REJIE_RESUME.pdf'

export const profile: Profile = {
  name: 'Rejie Rufin',
  shortName: 'REJIE RUFIN',
  tagline: 'From Operational Challenges to Smarter Digital Solutions.',
  altTagline: 'Freight Forwarding Expertise. Smarter Processes. Digital Innovation.',
  positioning:
    'Freight Forwarding & Shipping Operations Specialist | Process Improvement | Microsoft Power Apps | AI-Assisted No-Code Development',
  heroDescription:
    'I combine hands-on freight forwarding and shipping operations knowledge with process improvement, Microsoft Power Apps, and AI-assisted no-code development to design practical solutions for operational tracking, validation, workflow control, reporting, and business process improvement.',
  email: 'rejierufinxxxii@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rejie-rufin-837113147',
  linkedinLabel: 'linkedin.com/in/rejie-rufin-837113147',
  github: 'https://github.com/rejierufin',
  githubLabel: 'github.com/rejierufin',
  location: 'Philippines',
  resumeUrl: `${import.meta.env.BASE_URL}${RESUME_FILE}`,
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'skills', label: 'Skills' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'experience', label: 'Experience' },
  { id: 'lab', label: 'Innovation Lab' },
  { id: 'contact', label: 'Contact' },
]

export const heroIndicators = [
  'Freight Forwarding',
  'Ocean Operations',
  'Process Improvement',
  'Power Apps',
  'AI-Assisted Solutions',
]

export const aboutParagraphs = [
  'I am a freight forwarding operations specialist with extensive expertise in ocean freight processes, shipment documentation, manifest and EDI handling, operational validation, vessel monitoring, and pre-arrival controls.',
  'Alongside my operations expertise, I have knowledge of Microsoft Power Apps and AI-assisted no-code development, allowing me to explore new ways of transforming operational requirements into practical digital solutions.',
  'My approach starts with understanding the actual business process. I identify operational pain points, map workflows, define business rules and exceptions, and translate those requirements into trackers, dashboards, validation tools, control centers, and application prototypes.',
  'For me, technology is not the starting point. The operational problem is.',
]

export const aboutQuote = 'Understand the operation. Define the rules. Build the solution.'

export interface Capability {
  title: string
  blurb: string
  icon: IconName
  group: string
}

export const expertiseCapabilities: Capability[] = [
  {
    title: 'Ocean Freight Operations',
    blurb: 'The end-to-end movement of ocean shipments, from documentation and handover through to arrival.',
    icon: 'ship',
    group: 'Ocean & Vessel',
  },
  {
    title: 'Vessel & Voyage Monitoring',
    blurb: 'Following vessel schedules and voyage legs so the operational picture stays current.',
    icon: 'anchor',
    group: 'Ocean & Vessel',
  },
  {
    title: 'ETA & Port Call Monitoring',
    blurb: 'Watching arrival estimates and port calls so downstream planning starts from real dates.',
    icon: 'clock',
    group: 'Ocean & Vessel',
  },
  {
    title: 'Transshipment Validation',
    blurb: 'Checking connecting ports and routing legs for consistency before cargo is handed over.',
    icon: 'route',
    group: 'Ocean & Vessel',
  },
  {
    title: 'Import / Pre-Arrival Operations',
    blurb: 'Preparing inbound shipments before arrival so clearance activity begins with accurate data.',
    icon: 'container',
    group: 'Import & Documentation',
  },
  {
    title: 'Manifest & EDI Handling',
    blurb: 'Working with manifest and EDI message data used to move shipment information between parties.',
    icon: 'swap',
    group: 'Import & Documentation',
  },
  {
    title: 'Shipment Documentation',
    blurb: 'Preparing, checking, and aligning the document set required for each shipment.',
    icon: 'file',
    group: 'Import & Documentation',
  },
  {
    title: 'Bill of Lading Data Validation',
    blurb: 'Reviewing bill of lading details against shipment records for accuracy and consistency.',
    icon: 'doc',
    group: 'Import & Documentation',
  },
  {
    title: 'Manifest Data Validation',
    blurb: 'Cross-checking manifest details against shipment, party, and route information.',
    icon: 'check',
    group: 'Validation & Controls',
  },
  {
    title: 'Consignee & Notify Party Validation',
    blurb: 'Confirming party details and their consistency across documents and operational records.',
    icon: 'users',
    group: 'Validation & Controls',
  },
  {
    title: 'HS Code Data Validation',
    blurb: 'Reviewing commodity classification data for completeness and consistency.',
    icon: 'hash',
    group: 'Validation & Controls',
  },
  {
    title: 'Shipment Exception Handling',
    blurb: 'Identifying exceptions early and routing them to the right operational action.',
    icon: 'alert',
    group: 'Validation & Controls',
  },
  {
    title: 'Data Quality Control',
    blurb: 'Applying checks that keep shipment data usable for operations, controls, and reporting.',
    icon: 'shield',
    group: 'Validation & Controls',
  },
  {
    title: 'Process Controls',
    blurb: 'Building control points into the workflow so gaps are caught before they become issues.',
    icon: 'sliders',
    group: 'Validation & Controls',
  },
  {
    title: 'Operational Reporting',
    blurb: 'Turning daily operational activity into clear, repeatable reporting.',
    icon: 'chart',
    group: 'Coordination & Reporting',
  },
  {
    title: 'Stakeholder Coordination',
    blurb: 'Aligning internal teams and external parties around one version of the shipment status.',
    icon: 'message',
    group: 'Coordination & Reporting',
  },
]

export const controlCapabilities: Capability[] = [
  {
    title: 'Shipment Data Validation',
    blurb: 'Checking the fields that operational decisions depend on before work moves forward.',
    icon: 'check',
    group: '',
  },
  {
    title: 'Data Quality Control',
    blurb: 'Keeping records complete, consistent, and usable across teams and reports.',
    icon: 'shield',
    group: '',
  },
  {
    title: 'Operational Reporting',
    blurb: 'Presenting activity and exceptions in a format teams can act on.',
    icon: 'chart',
    group: '',
  },
  {
    title: 'Exception Identification',
    blurb: 'Surfacing mismatches, blockers, and missing information as early as possible.',
    icon: 'alert',
    group: '',
  },
  {
    title: 'Business Rule Validation',
    blurb: 'Encoding operational conditions so checks are applied the same way every time.',
    icon: 'sliders',
    group: '',
  },
  {
    title: 'Workflow Tracking',
    blurb: 'Knowing where a shipment, task, or document sits and who owns the next step.',
    icon: 'flow',
    group: '',
  },
  {
    title: 'Operational Dashboards',
    blurb: 'Designing views that answer the questions asked most often during the day.',
    icon: 'gauge',
    group: '',
  },
  {
    title: 'Data Reconciliation',
    blurb: 'Comparing sources and resolving differences before they reach the operation.',
    icon: 'swap',
    group: '',
  },
  {
    title: 'Productivity Monitoring',
    blurb: 'Structuring activity records so volume, categories, and handling time are visible.',
    icon: 'clock',
    group: '',
  },
  {
    title: 'Operational Control Design',
    blurb: 'Defining where checks belong in a process, and what happens when one fails.',
    icon: 'target',
    group: '',
  },
]

export const dataFlow = [
  { label: 'Data', caption: 'Shipment, manifest, voyage, and activity records.', icon: 'database' as IconName },
  { label: 'Validation', caption: 'Mandatory fields checked against defined rules.', icon: 'check' as IconName },
  {
    label: 'Exception Identification',
    caption: 'Gaps and mismatches surfaced with severity and owner.',
    icon: 'alert' as IconName,
  },
  {
    label: 'Operational Action',
    caption: 'The next step is clear, assigned, and recorded.',
    icon: 'target' as IconName,
  },
  { label: 'Reporting', caption: 'Outcomes captured for review and improvement.', icon: 'chart' as IconName },
]

export const processCapabilities: Capability[] = [
  {
    title: 'Workflow Design',
    blurb: 'Defining the sequence of steps, owners, and handoffs a process actually needs.',
    icon: 'flow',
    group: '',
  },
  {
    title: 'Process Mapping',
    blurb: 'Documenting how work really moves today, including the informal steps.',
    icon: 'grid',
    group: '',
  },
  {
    title: 'Process Standardization',
    blurb: 'Agreeing one approach so the same task is handled the same way.',
    icon: 'layers',
    group: '',
  },
  {
    title: 'Manual Process Reduction',
    blurb: 'Replacing repeated copy-paste and re-keying with structured inputs.',
    icon: 'repeat',
    group: '',
  },
  {
    title: 'Requirements Gathering',
    blurb: 'Turning operational conversations into clear, testable requirements.',
    icon: 'search',
    group: '',
  },
  {
    title: 'Business Rule Definition',
    blurb: 'Writing conditions and exceptions in language both operations and builders can use.',
    icon: 'sliders',
    group: '',
  },
  {
    title: 'Control Point Identification',
    blurb: 'Deciding where a check prevents the most rework downstream.',
    icon: 'target',
    group: '',
  },
  {
    title: 'Workflow Optimization',
    blurb: 'Removing unnecessary steps while protecting the controls that matter.',
    icon: 'gauge',
    group: '',
  },
  {
    title: 'Operational Problem Solving',
    blurb: 'Starting from the symptom, then tracing it back to the process cause.',
    icon: 'spark',
    group: '',
  },
  {
    title: 'Continuous Improvement',
    blurb: 'Reviewing outcomes and refining the workflow after it is in use.',
    icon: 'arrow',
    group: '',
  },
]

export const processStatement =
  'My approach to process improvement focuses on understanding how work is actually performed, identifying repetitive tasks and control gaps, defining the appropriate business rules, and exploring digital solutions that can make the workflow more structured and efficient.'

export interface SkillGroup {
  title: string
  caption: string
  icon: IconName
  skills: { name: string; note: string }[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Logistics & Freight Forwarding',
    caption: 'The operational foundation — ocean and air freight work performed day to day.',
    icon: 'ship',
    skills: [
      { name: 'Freight Forwarding Operations', note: 'Ocean, air, and import/export operational flow' },
      { name: 'Import Customs Manifest Processing', note: 'Preparation, validation, and submission' },
      { name: 'Shipping Documentation', note: 'Bill of lading, MAWB, HAWB, and shipping instructions' },
      { name: 'Customs Documentation', note: 'Import and export declarations and regulatory paperwork' },
      { name: 'Import & Export Coordination', note: 'Booking through to cargo uplift' },
      { name: 'Air & Sea Freight Documentation', note: 'Complete document sets across both modes' },
      { name: 'Shipment Tracking & Monitoring', note: 'Vessel, voyage, and arrival visibility' },
    ],
  },
  {
    title: 'Process & Digital Solutions',
    caption: 'How an operational requirement becomes a structured, working application concept.',
    icon: 'app',
    skills: [
      { name: 'Process Improvement', note: 'Finding and removing friction in daily workflows' },
      { name: 'Process Mapping', note: 'Steps, owners, decisions, and handoffs' },
      { name: 'Process Automation', note: 'Moving repeatable steps into structured tools' },
      { name: 'Workflow Automation', note: 'Rules and routing that replace manual follow-up' },
      { name: 'Data Validation', note: 'Field checks, rules, and exception paths' },
      { name: 'Microsoft Power Apps', note: 'Application prototyping and solution design' },
      { name: 'No-Code App Development', note: 'Fast, testable application concepts' },
      { name: 'AI-Assisted Development', note: 'Building working concepts from defined requirements' },
    ],
  },
  {
    title: 'Systems & Microsoft Tools',
    caption: 'The platforms and everyday tools used to run, track, and report operational work.',
    icon: 'grid',
    skills: [
      { name: 'e2m / e-Trade System', note: 'Import manifest processing and customs submission' },
      { name: 'Microsoft Excel', note: 'Operational trackers, validation, and reporting' },
      { name: 'Microsoft Word', note: 'Document preparation and correspondence' },
      { name: 'Microsoft Outlook', note: 'Operational correspondence and follow-ups' },
      { name: 'Microsoft Teams', note: 'Coordination and operational handoffs' },
    ],
  },
  {
    title: 'Professional Skills',
    caption: 'How the work is carried — ownership, accuracy, and coordination under deadlines.',
    icon: 'users',
    skills: [
      { name: 'Process Ownership', note: 'Accountability from first step to final submission' },
      { name: 'Continuous Improvement', note: 'Refining the process, not just completing the task' },
      { name: 'Attention to Detail', note: 'Accuracy in manifest and document data' },
      { name: 'Problem Solving', note: 'Resolving discrepancies before they delay cargo' },
      { name: 'Time Management', note: 'Working to time-sensitive regulatory deadlines' },
      { name: 'Communication Skills', note: 'Clear updates across teams and stakeholders' },
      { name: 'Cross-Functional Collaboration', note: 'Agents, carriers, brokers, and internal teams' },
      { name: 'Adaptability & Flexibility', note: 'Shifting priorities in live operations' },
    ],
  },
]

export type MockupVariant = 'dashboard' | 'records' | 'checklist' | 'form' | 'output'

export interface Project {
  id: string
  number: string
  name: string
  category: string
  shortCategory: string
  description: string
  keyAreas: string[]
  role: string
  overview: string
  challenge: string
  currentWorkflow: string[]
  painPoints: string[]
  approach: string[]
  businessRules: string[]
  solutionDesign: string
  features: string[]
  workflow: string[]
  tools: string[]
  contribution: string[]
  potentialValue: string[]
  lessons: string[]
  mockups: { variant: MockupVariant; title: string; caption: string }[]
  disclaimer: string
}

const conceptNote =
  'This is a solution concept and application prototype. It is presented as a design exercise, not as a deployed enterprise system.'

export const projects: Project[] = [
  {
    id: 'vietnam-vessel-tracker',
    number: '01',
    name: 'Vietnam Vessel Tracker',
    category: 'Ocean Freight Operations / Vessel Monitoring',
    shortCategory: 'Ocean Freight · Vessel Monitoring',
    description:
      'An operational vessel tracking and monitoring concept designed around vessel schedules, voyages, port calls, ETA information, weekly operational records, task forecasting, and operational visibility.',
    keyAreas: [
      'Vessel monitoring',
      'Voyage monitoring',
      'Port-call tracking',
      'ETA tracking',
      'Weekly operational records',
      'Task forecasting',
      'Historical records',
      'Operational dashboards',
    ],
    role:
      'Defined operational requirements, workflow behavior, business rules, dashboard requirements, and application logic, then used AI-assisted application development to prototype the solution.',
    overview:
      'A concept for a single operational workspace covering vessels, voyages, port calls, and ETA changes for Vietnam ocean freight activity. The design focuses on keeping weekly operational records and live schedule information in the same place, so upcoming work can be seen before it becomes urgent.',
    challenge:
      'Vessel schedules, port calls, and ETA details are usually reviewed across separate references and weekly records. When information lives in different places, building the current operational picture takes time and planning ahead depends on whoever last updated the file.',
    currentWorkflow: [
      'Vessel and voyage details are gathered from carrier schedules and internal references.',
      'Weekly operational records are maintained as schedules move.',
      'ETA and port-call information is reviewed across sources and reconciled by hand.',
      'Follow-ups and task forecasting are coordinated through messages and reminders.',
      'Historical context is looked up again whenever a vessel or voyage is revisited.',
    ],
    painPoints: [
      'Schedule changes are difficult to see in one place.',
      'Weekly records and live schedule checks sit apart from each other.',
      'Forecasting upcoming tasks relies on manual review.',
      'Historical context takes time to retrieve.',
      'Visibility depends on who last touched the record.',
    ],
    approach: [
      'Mapped the questions operators ask during a normal vessel week.',
      'Defined the fields each record needs: vessel, voyage, port call, ETA, status, and actions.',
      'Treated weekly records and history as part of the data model, not as an afterthought.',
      'Designed dashboard and table views around the questions asked most often.',
      'Prototyped the application using AI-assisted no-code development.',
    ],
    businessRules: [
      'A voyage record must reference a vessel and a voyage number.',
      'An ETA change keeps the previous value and the time it was updated.',
      'A port call cannot be marked complete without an arrival record.',
      'Forecast tasks are derived from expected arrival plus configured lead times.',
      'Historical records stay viewable without altering current status.',
    ],
    solutionDesign:
      'Vessel, voyage, port-call, and ETA information is recorded once and then read from dashboard, weekly, and history views. Forecast tasks are generated from expected arrivals and lead times instead of being rebuilt by hand each week.',
    features: [
      'Vessel monitoring',
      'Voyage monitoring',
      'Port-call tracking',
      'ETA tracking',
      'Weekly operational records',
      'Task forecasting',
      'Historical records',
      'Operational dashboards',
    ],
    workflow: [
      'Carrier schedule input',
      'Vessel & voyage record',
      'Port call & ETA update',
      'Validation checks',
      'Dashboard & forecast',
      'Weekly operational review',
    ],
    tools: [
      'Microsoft Power Apps (concept design)',
      'AI-assisted no-code application development',
      'Microsoft Excel data sources',
    ],
    contribution: [
      'Defined the operational requirements and the questions each view must answer.',
      'Specified the data fields, validation behavior, and history handling.',
      'Designed the dashboard, weekly record, and detail screen layouts.',
      'Wrote the business rules and exception behaviour for schedule changes.',
      'Built the prototype using AI-assisted application development.',
    ],
    potentialValue: [
      'One reference point for vessel and voyage status.',
      'Weekly records and live ETA information kept together.',
      'Earlier sight of upcoming operational tasks.',
      'Faster retrieval of historical voyage context.',
    ],
    lessons: [
      'Operational context matters more than the number of screens.',
      'History is an operational requirement, not an optional feature.',
      'Forecasting is only as good as the dates behind it.',
    ],
    mockups: [
      {
        variant: 'dashboard',
        title: 'Operational overview',
        caption: 'Vessel activity, ETA movement, and upcoming tasks in one view.',
      },
      {
        variant: 'records',
        title: 'Weekly vessel records',
        caption: 'Voyage, port call, ETA, status, and next action on a single row.',
      },
      {
        variant: 'checklist',
        title: 'Voyage detail & history',
        caption: 'Record history kept beside the current operational status.',
      },
    ],
    disclaimer: conceptNote,
  },
  {
    id: 'pre-arrival-control-center',
    number: '02',
    name: 'Pre-Arrival Control Center',
    category: 'Import Operations / Operational Control',
    shortCategory: 'Import Operations · Control',
    description:
      'A workflow and validation solution concept focused on pre-arrival shipment processing, business-rule-driven checks, operational exceptions, and shipment data validation.',
    keyAreas: [
      'Shipment pre-arrival validation',
      'Manifest validation',
      'Consignee validation',
      'Transshipment logic',
      'Exception handling',
      'Business-rule controls',
      'Operational evidence checks',
      'Mandatory shipment information',
    ],
    role:
      'Translated operational scenarios and validation requirements into structured decision rules and application workflows.',
    overview:
      'A concept for a control center that runs pre-arrival checks on inbound shipments before arrival handling begins. Every check is tied to a business rule, and every failed check becomes an exception with an owner, evidence requirement, and next action.',
    challenge:
      'Pre-arrival work depends on many small checks across manifest, consignee, transshipment, and documentary information. When those checks live in separate files and individual habits, exceptions surface late and the same gap is often discovered more than once.',
    currentWorkflow: [
      'Inbound shipment and manifest information is reviewed in operational systems and spreadsheets.',
      'Mandatory fields are checked by reading through the record.',
      'Consignee and notify party details are compared across documents.',
      'Transshipment routing is confirmed when a connecting port is involved.',
      'Exceptions are raised through messages and tracked informally until closed.',
    ],
    painPoints: [
      'Checks depend on individual habits rather than a defined rule set.',
      'Missing information is found late in the pre-arrival window.',
      'Exception status is hard to see across a batch of shipments.',
      'Evidence for a completed check is not always recorded.',
      'The same validation is repeated manually for similar shipments.',
    ],
    approach: [
      'Collected the pre-arrival scenarios handled most often and the fields they depend on.',
      'Split checks into mandatory-field validation, cross-field validation, and route logic.',
      'Defined severity levels so blockers are separated from warnings.',
      'Designed the exception lifecycle: raised, owner assigned, evidence attached, closed.',
      'Structured the checks as configurable rules rather than hard-coded steps.',
    ],
    businessRules: [
      'A shipment cannot pass pre-arrival control while a mandatory field is empty.',
      'Consignee and notify party details must match the supporting documents.',
      'A transshipment record requires a connecting port and a connecting vessel.',
      'Blocking exceptions must be closed before the shipment is marked ready.',
      'Closing an exception requires evidence and a recorded resolution note.',
      'Warning-level exceptions are logged without blocking progression.',
    ],
    solutionDesign:
      'A control-center layout with a shipment queue, a rule-by-rule check panel, an exception worklist, and a readiness summary. Each rule holds its severity, the field it validates, and the action it triggers, so validation behaviour can be adjusted without rebuilding the workflow.',
    features: [
      'Shipment pre-arrival validation',
      'Manifest validation',
      'Consignee validation',
      'Transshipment logic',
      'Exception handling',
      'Business-rule controls',
      'Operational evidence checks',
      'Mandatory shipment information',
    ],
    workflow: [
      'Inbound shipment record',
      'Rule-based validation',
      'Exception created with severity',
      'Owner action & evidence',
      'Re-validation',
      'Shipment marked pre-arrival ready',
    ],
    tools: [
      'Microsoft Power Apps (concept design)',
      'AI-assisted no-code application development',
      'Rule-based validation logic',
    ],
    contribution: [
      'Translated operational validation scenarios into explicit decision rules.',
      'Defined severity levels and the exception lifecycle.',
      'Designed the shipment queue, check panel, and exception worklist.',
      'Specified evidence capture and closure requirements.',
      'Mapped the re-validation path after an exception is resolved.',
    ],
    potentialValue: [
      'Consistent checks applied to every inbound shipment.',
      'Earlier visibility of missing or inconsistent information.',
      'Clear ownership of open exceptions.',
      'Recorded evidence for completed validations.',
    ],
    lessons: [
      'A rule is only useful if the exception path is defined too.',
      'Severity levels prevent a control center from becoming noise.',
      'Validation design has to match how documents actually arrive.',
    ],
    mockups: [
      {
        variant: 'checklist',
        title: 'Pre-arrival check panel',
        caption: 'Rule-by-rule results with severity and required action.',
      },
      {
        variant: 'records',
        title: 'Shipment control queue',
        caption: 'Readiness, open exceptions, and ownership per shipment.',
      },
      {
        variant: 'form',
        title: 'Exception resolution',
        caption: 'Evidence, resolution note, and re-validation trigger.',
      },
    ],
    disclaimer: conceptNote,
  },
  {
    id: 'icm-productivity-tracer',
    number: '03',
    name: 'ICM Productivity Tracer',
    category: 'Productivity / Operational Reporting',
    shortCategory: 'Productivity · Reporting',
    description:
      'An operational activity and productivity tracking solution designed to provide structured records of daily activities, task categories, handling time, and reporting.',
    keyAreas: [
      'Daily activity tracking',
      'Task categorization',
      'AHT monitoring',
      'Productivity records',
      'Operational reporting',
      'Data export',
    ],
    role:
      'Defined activity tracking requirements, reporting needs, operational categories, workflow behavior, and interface requirements.',
    overview:
      'A concept for capturing daily operational activity in a structured way: what was handled, under which category, how long it took, and what that means in reporting. The design replaces free-form notes with consistent categories and derived handling time.',
    challenge:
      'Activity records kept in free-form spreadsheets are difficult to compare. Categories drift between people, handling time is estimated after the fact, and reporting becomes a manual exercise in cleaning data before it can be read.',
    currentWorkflow: [
      'Daily activity is recorded in a spreadsheet at the end of a shift.',
      'Task descriptions are written freely, so similar work is named differently.',
      'Handling time is estimated from memory or from message timestamps.',
      'Weekly totals are rebuilt manually for reporting.',
      'Exports are reformatted before they can be shared.',
    ],
    painPoints: [
      'Inconsistent categories make comparison unreliable.',
      'Handling time is estimated rather than measured.',
      'Reporting requires manual cleaning first.',
      'Daily records are easy to complete inconsistently.',
      'Export formats differ from what the report needs.',
    ],
    approach: [
      'Defined a fixed but realistic task category list with operational definitions.',
      'Designed a quick-entry record so logging takes seconds, not minutes.',
      'Made handling time a derived value from start and end of handling.',
      'Built reporting views around volume, category mix, and average handling time.',
      'Aligned the exported data with the fields needed for reporting.',
    ],
    businessRules: [
      'Every record requires a task category from the defined list.',
      'A record cannot be closed without a start and end handling time.',
      'Average handling time is calculated from stored duration, not typed directly.',
      'Daily totals aggregate per user and per category.',
      'Exports reflect the active filters used on screen.',
      'Editing a closed record requires a reason to be recorded.',
    ],
    solutionDesign:
      'A lightweight activity logger with guided categories and derived handling time, paired with a productivity dashboard and a reporting export. Records are structured at entry so the reporting layer needs no manual preparation.',
    features: [
      'Daily activity tracking',
      'Task categorization',
      'AHT monitoring',
      'Productivity records',
      'Operational reporting',
      'Data export',
    ],
    workflow: [
      'Start task',
      'Select category & reference',
      'Handling time captured',
      'Record closed with notes',
      'Daily aggregation',
      'Reporting & export',
    ],
    tools: [
      'Microsoft Power Apps (concept design)',
      'AI-assisted no-code application development',
      'Microsoft Excel reporting output',
    ],
    contribution: [
      'Defined the activity categories and their operational definitions.',
      'Specified required fields, timing behaviour, and closure rules.',
      'Designed the entry screen, dashboard, and reporting layout.',
      'Defined the export structure and filter behaviour.',
      'Mapped how daily records aggregate into reporting.',
    ],
    potentialValue: [
      'Comparable activity data across users and days.',
      'Handling time captured consistently rather than estimated.',
      'Reporting available without manual cleaning.',
      'Clear picture of where operational time is spent.',
    ],
    lessons: [
      'Categories are a design decision, not a dropdown detail.',
      'Fast entry is what keeps data quality high.',
      'Reporting requirements belong in the data model from the start.',
    ],
    mockups: [
      {
        variant: 'form',
        title: 'Activity capture',
        caption: 'Guided category selection with derived handling time.',
      },
      {
        variant: 'dashboard',
        title: 'Productivity overview',
        caption: 'Volume, category mix, and average handling time.',
      },
      {
        variant: 'records',
        title: 'Records & export',
        caption: 'Filtered records with a reporting-ready export.',
      },
    ],
    disclaimer: conceptNote,
  },
  {
    id: 'mandatory-details-generator',
    number: '04',
    name: 'Mandatory Details Generator',
    category: 'Operational Data Standardization',
    shortCategory: 'Data Standardization',
    description:
      'A business-rule-driven solution concept designed to support the standardized generation and organization of required operational shipment information.',
    keyAreas: [
      'Required information',
      'Shipment/customer data',
      'Business rules',
      'Standardized output',
      'Data consistency',
      'Operational workflow support',
    ],
    role:
      'Defined the business requirements, input logic, decision conditions, required outputs, and workflow behavior.',
    overview:
      'A concept for assembling mandatory shipment details in a consistent order and format, driven by rules rather than by memory. The tool validates inputs, flags what is missing, and produces standardized output ready for operational use.',
    challenge:
      'Required shipment and customer details are collected from several sources and assembled by hand. Formatting varies between people, mandatory fields are sometimes discovered late, and the same information is re-typed for different outputs.',
    currentWorkflow: [
      'Required detail fields are recalled from templates and past examples.',
      'Shipment and customer information is copied from several sources.',
      'The output format is assembled manually for each request.',
      'Missing details are followed up after the output is drafted.',
      'Corrections are applied to the output rather than to the source record.',
    ],
    painPoints: [
      'Required fields depend on individual memory.',
      'Output formatting varies between requests.',
      'Missing information is found after drafting.',
      'The same data is re-keyed for different outputs.',
      'Corrections are applied in the wrong place, so sources drift.',
    ],
    approach: [
      'Listed the required details per shipment and movement type.',
      'Defined which fields are conditional, and on what condition.',
      'Designed a single structured input step with rule hints.',
      'Created a standardized output template with fixed ordering.',
      'Added a missing-information summary before output generation.',
    ],
    businessRules: [
      'A field marked mandatory for the selected movement type must be completed.',
      'Conditional fields appear only when their triggering condition is met.',
      'Output ordering and labelling follow one defined template.',
      'Missing information is listed before output is generated.',
      'Source values are corrected at source rather than in the output.',
      'Generated output carries the timestamp of the source record.',
    ],
    solutionDesign:
      'A guided input screen with conditional fields and rule hints, a validation summary, and a standardized output preview. Data is entered once and rendered into the required format, so consistency comes from structure rather than from proofreading.',
    features: [
      'Required information',
      'Shipment/customer data',
      'Business rules',
      'Standardized output',
      'Data consistency',
      'Operational workflow support',
    ],
    workflow: [
      'Select shipment type',
      'Conditional fields presented',
      'Mandatory validation',
      'Missing-info summary',
      'Standardized output generated',
      'Output copied / shared',
    ],
    tools: [
      'Microsoft Power Apps (concept design)',
      'AI-assisted no-code application development',
      'Rule-based conditional logic',
    ],
    contribution: [
      'Defined the mandatory and conditional field set.',
      'Wrote the decision conditions behind field visibility.',
      'Specified the standardized output template and ordering.',
      'Designed the validation and missing-information summary.',
      'Defined the input-to-output workflow behaviour.',
    ],
    potentialValue: [
      'Consistent output across requests and users.',
      'Fewer late discoveries of missing information.',
      'Less re-keying of the same shipment data.',
      'A single structured record behind each output.',
    ],
    lessons: [
      'Standardization starts with the input, not the template.',
      'Conditional rules keep a form short without hiding requirements.',
      'Correcting data at source prevents the same error returning.',
    ],
    mockups: [
      {
        variant: 'form',
        title: 'Guided detail input',
        caption: 'Conditional fields with rule hints and required markers.',
      },
      {
        variant: 'output',
        title: 'Standardized output',
        caption: 'One template, fixed ordering, consistent labelling.',
      },
      {
        variant: 'checklist',
        title: 'Pre-generation validation',
        caption: 'Missing and inconsistent details flagged before output.',
      },
    ],
    disclaimer: conceptNote,
  },
]

export const buildSteps = [
  {
    title: 'Identify the Problem',
    body: 'Understand repetitive work, operational pain points, risks, validation gaps, and manual processes.',
    icon: 'search' as IconName,
  },
  {
    title: 'Map the Workflow',
    body: 'Identify inputs, users, decisions, dependencies, exceptions, and expected outputs.',
    icon: 'flow' as IconName,
  },
  {
    title: 'Define Business Rules',
    body: 'Translate operational knowledge into structured conditions, validations, and application logic.',
    icon: 'sliders' as IconName,
  },
  {
    title: 'Design the Solution',
    body: 'Define screens, workflows, dashboards, controls, validations, and reporting requirements.',
    icon: 'grid' as IconName,
  },
  {
    title: 'Build with Digital Tools',
    body: 'Use Microsoft Power Apps or AI-assisted no-code development tools where appropriate to create and prototype solutions.',
    icon: 'app' as IconName,
  },
  {
    title: 'Test & Refine',
    body: 'Test operational scenarios, identify gaps, and continuously refine workflow and business-rule behavior.',
    icon: 'repeat' as IconName,
  },
]

export interface ExperienceRole {
  role: string
  company: string
  period: string
  location: string
  current?: boolean
  summary?: string
  responsibilities: string[]
}

// Taken directly from the resume: employers, titles, dates, locations, and duties.
export const experience = {
  themes: [
    'Customs Manifest Processing',
    'Freight Forwarding',
    'Import & Export Documentation',
    'Manifest / EDI Handling',
    'Regulatory Compliance',
    'Stakeholder Coordination',
    'Process Improvement',
  ],
  roles: [
    {
      role: 'Import Customs Manifest Specialist',
      company: 'Maersk Global Service Centre',
      period: 'November 27, 2023 — Present',
      location: 'Philippines',
      current: true,
      summary:
        'Preparing and submitting import customs manifests for shipments arriving in Vietnam and Cambodia, with accuracy, timeliness, and compliance as the operating standard.',
      responsibilities: [
        'Ensure the timely, accurate, and compliant preparation and submission of import customs manifests for shipments arriving in Vietnam and Cambodia.',
        'Achieve high accuracy and timely completion of customs manifest reports.',
      ],
    },
    {
      role: 'Senior Documentation Officer / IMPEX Coordinator',
      company: 'ATR International Freight Inc',
      period: 'August 2017 — November 24, 2023',
      location: 'Port Area Manila',
      summary:
        'Led end-to-end import air and sea manifest processing and submission through the e-Trade / e2m Customs System.',
      responsibilities: [
        'Led end-to-end import air and sea manifest processing and submission through the e-Trade / e2m Customs System, ensuring accurate and timely customs compliance.',
        'Collaborated with international agents, airlines, shipping lines, and customs brokers to resolve documentation discrepancies, amendments, and shipment exceptions.',
        'Oversaw air export shipments from booking through cargo uplift, and prepared key shipping documents including MAWB, HAWB, commercial invoices, packing lists, export declarations, and shipping instructions.',
        'Maintained accurate shipment data and documentation while meeting time-sensitive operational and regulatory requirements.',
      ],
    },
    {
      role: 'Liaison Officer',
      company: 'Inspira Prime International Corp.',
      period: 'August 2016 — May 2017',
      location: 'Quezon City',
      responsibilities: [
        'Led permit processing, renewals, registrations, and regulatory documentation with BIR, LGUs, and other government agencies.',
        'Coordinated with government offices, banks, and external stakeholders to ensure compliance and meet business requirements.',
      ],
    },
    {
      role: 'Administrative Staff',
      company: 'Municipal Treasurers Office',
      period: 'February 2016 — May 2016',
      location: 'Municipality of Isabel',
      responsibilities: [
        'Optimized financial documentation, payroll administration, employee records, data entry, and treasury reporting.',
        'Ensured accuracy and confidentiality of financial, tax-related, and employee records.',
      ],
    },
    {
      role: 'Census Area Supervisor',
      company: 'Philippine Statistics Authority',
      period: 'August 1 — 31, 2015',
      location: 'Tacloban City, Leyte',
      responsibilities: [
        'Led field operations and coordinated census activities to support accurate and timely data collection.',
        'Mentored and guided enumerators on data-gathering procedures and field protocols.',
        'Optimized collected data for accuracy and consistency, identifying discrepancies for timely resolution.',
      ],
    },
  ] as ExperienceRole[],
}

export interface EducationEntry {
  degree: string
  school: string
  period: string
}

export const education: EducationEntry[] = [
  {
    degree: 'Bachelor of Science in Shipping Management',
    school: 'Palompon Institute of Technology',
    period: 'June 2011 — March 2015',
  },
]

export const valueEquation = {
  inputs: ['Freight Forwarding Knowledge', 'Process Understanding', 'Business Rules', 'Power Apps & AI-Assisted Tools'],
  result: 'Practical Digital Solutions',
  supporting:
    'My advantage is not simply knowing digital tools. It is understanding operational workflows and being able to translate real-world business requirements into structured solution concepts.',
}

export interface LabProject {
  name: string
  type: string
  description: string
  icon: IconName
  tags: string[]
}

export const labProjects: LabProject[] = [
  {
    name: 'Orbit Philippines Marketplace',
    type: 'Marketplace concept',
    description:
      'AI-assisted marketplace application concept exploring digital listings, user interaction, and marketplace workflows.',
    icon: 'grid',
    tags: ['Listings', 'User interaction', 'Marketplace workflow'],
  },
  {
    name: 'Mang Dado',
    type: 'Service marketplace concept',
    description: 'A service marketplace concept designed around customer and service-provider interactions.',
    icon: 'users',
    tags: ['Service requests', 'Provider interaction'],
  },
  {
    name: 'Lost & Found Social Platform',
    type: 'Social platform concept',
    description:
      'A social-style platform concept designed around posting, discovering, and connecting lost-and-found information.',
    icon: 'search',
    tags: ['Posting', 'Discovery', 'Connection'],
  },
  {
    name: 'iSchuFed TV',
    type: 'AI video workflow concept',
    description: 'An AI-assisted short-form video workflow concept exploring story-to-video creation.',
    icon: 'play',
    tags: ['Story to video', 'Short-form content'],
  },
]

export const contact = {
  title: "Let's Connect",
  text: "I'm interested in opportunities where freight forwarding expertise, process improvement, and digital innovation come together.",
  openness:
    'Open to opportunities in Freight Forwarding, Operations, Process Improvement, Digital Transformation, and Business Application Solutions.',
}
