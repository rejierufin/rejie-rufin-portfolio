
export interface MockSpec {
  title: string
  tag: string
  nav: string[]
  tiles?: { label: string; value: string; hint?: string }[]
  bars?: { label: string; pct: number }[]
  table?: { head: string[]; rows: string[][] }
  rules?: { label: string; state: 'ok' | 'warn' | 'bad'; note: string }[]
  fields?: { label: string; value: string; required?: boolean; full?: boolean; hint?: string }[]
  doc?: { heading: string; meta: string; lines: { k: string; v: string }[] }
  note?: string
}

const status = (value: string) => {
  const key = value.toLowerCase()
  if (/(ready|cleared|valid|closed|on track|matched|complete|ok)/.test(key)) return 'ok'
  if (/(exception|missing|block|invalid|open)/.test(key)) return 'bad'
  if (/(review|pending|warning|draft|hold)/.test(key)) return 'warn'
  return ''
}

export function Mockup({ spec }: { spec: MockSpec }) {
  return (
    <div className="mock" role="img" aria-label={`Concept interface mockup: ${spec.title}`}>
      <div className="mock-chrome">
        <span className="mock-dot mock-dot--r" />
        <span className="mock-dot mock-dot--y" />
        <span className="mock-dot mock-dot--g" />
        <span className="mock-name">{spec.tag}</span>
      </div>

      <div className="mock-body">
        <div className="mock-side">
          {spec.nav.map((item, index) => (
            <span key={item} className={`mock-nav${index === 0 ? ' is-active' : ''}`}>
              {item}
            </span>
          ))}
        </div>

        <div className="mock-main">
          <div className="mock-h">
            <h5>{spec.title}</h5>
            <span className="mock-tag">Concept</span>
          </div>

          {spec.tiles ? (
            <div className="mock-tiles">
              {spec.tiles.map((tile) => (
                <div className="mock-tile" key={tile.label}>
                  <span className="mt-label">{tile.label}</span>
                  <span className="mt-value">{tile.value}</span>
                  {tile.hint ? <span className="mt-hint">{tile.hint}</span> : null}
                </div>
              ))}
            </div>
          ) : null}

          {spec.bars ? (
            <div className="mock-bars">
              {spec.bars.map((bar) => (
                <div className="mock-bar" key={bar.label}>
                  <i style={{ height: `${bar.pct}%` }} />
                  <span>{bar.label}</span>
                </div>
              ))}
            </div>
          ) : null}

          {spec.table ? (
            <table className="mock-table">
              <thead>
                <tr>
                  {spec.table.head.map((cell) => (
                    <th key={cell}>{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {spec.table.rows.map((row, rowIndex) => (
                  <tr key={`${row[0]}-${rowIndex}`}>
                    {row.map((cell, cellIndex) => (
                      <td key={`${cell}-${cellIndex}`}>
                        {cellIndex === row.length - 1 && status(cell) ? (
                          <span className={`mock-status ${status(cell)}`}>{cell}</span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}

          {spec.rules ? (
            <div className="mock-rules">
              {spec.rules.map((rule) => (
                <div className="mock-rule" key={rule.label}>
                  <span className={`mr-ico ${rule.state}`} aria-hidden="true">
                    {rule.state === 'ok' ? '✓' : rule.state === 'warn' ? '!' : '×'}
                  </span>
                  <span>{rule.label}</span>
                  <span className={`mock-status ${rule.state}`} style={{ marginLeft: 'auto' }}>
                    {rule.note}
                  </span>
                </div>
              ))}
            </div>
          ) : null}

          {spec.fields ? (
            <div className="mock-fields">
              {spec.fields.map((field) => (
                <div className={`mock-field${field.full ? ' full' : ''}`} key={field.label}>
                  <label>
                    {field.label}
                    {field.required ? <span className="req"> *</span> : null}
                  </label>
                  <span className="mf-value">{field.value}</span>
                  {field.hint ? <span className="mf-hint">{field.hint}</span> : null}
                </div>
              ))}
            </div>
          ) : null}

          {spec.doc ? (
            <div className="mock-doc">
              <h6>{spec.doc.heading}</h6>
              <span className="md-meta">{spec.doc.meta}</span>
              {spec.doc.lines.map((line) => (
                <div className="md-row" key={line.k}>
                  <span>{line.k}</span>
                  <span>{line.v}</span>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mock-foot">
            <span>{spec.note ?? 'Illustrative concept interface'}</span>
            <span>Design preview</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const trackerNav = ['Overview', 'Vessels', 'Voyages', 'Port Calls', 'Weekly', 'History']
const controlNav = ['Queue', 'Validation', 'Exceptions', 'Evidence', 'Summary']
const tracerNav = ['Activity', 'Records', 'Dashboard', 'Export']
const detailsNav = ['Details', 'Rules', 'Output']

export const mockSpecs: Record<string, Record<string, MockSpec>> = {
  'vietnam-vessel-tracker': {
    dashboard: {
      title: 'Vessel Operations Overview',
      tag: 'vessel-tracker · concept',
      nav: trackerNav,
      tiles: [
        { label: 'Active voyages', value: '18', hint: 'this week' },
        { label: 'Port calls', value: '32', hint: 'tracked' },
        { label: 'ETA updates', value: '7', hint: 'logged' },
      ],
      bars: [
        { label: 'Mon', pct: 48 },
        { label: 'Tue', pct: 72 },
        { label: 'Wed', pct: 58 },
        { label: 'Thu', pct: 88 },
        { label: 'Fri', pct: 66 },
        { label: 'Sat', pct: 34 },
        { label: 'Sun', pct: 22 },
      ],
      table: {
        head: ['Vessel', 'Voyage', 'Port call', 'ETA', 'Status'],
        rows: [
          ['Vessel A', 'VOY-014', 'HCM → SGN', 'Tue 08:00', 'On track'],
          ['Vessel B', 'VOY-021', 'SGN → HPH', 'Wed 14:30', 'ETA revised'],
          ['Vessel C', 'VOY-033', 'DAD → HCM', 'Thu 06:15', 'Review'],
          ['Vessel D', 'VOY-041', 'HPH → SGN', 'Fri 11:40', 'On track'],
        ],
      },
    },
    records: {
      title: 'Weekly Vessel Records',
      tag: 'vessel-tracker · weekly',
      nav: trackerNav,
      table: {
        head: ['Vessel', 'Voyage', 'Port call', 'ETA', 'Next action'],
        rows: [
          ['Vessel A', 'VOY-014', 'HCM inbound', 'Tue 08:00', 'Confirm arrival'],
          ['Vessel B', 'VOY-021', 'SGN outbound', 'Wed 14:30', 'Update record'],
          ['Vessel C', 'VOY-033', 'DAD inbound', 'Thu 06:15', 'Check forecast'],
          ['Vessel D', 'VOY-041', 'HPH tranship', 'Fri 11:40', 'Validate route'],
          ['Vessel E', 'VOY-047', 'SGN inbound', 'Sat 19:20', 'Assign owner'],
        ],
      },
      rules: [
        { label: 'Weekly record submitted for VOY-014', state: 'ok', note: 'Logged' },
        { label: 'Forecast tasks generated for next week', state: 'ok', note: '6 tasks' },
        { label: 'ETA revision pending confirmation', state: 'warn', note: 'Review' },
      ],
      note: 'Weekly records · history preserved',
    },
    checklist: {
      title: 'Voyage Detail & History',
      tag: 'vessel-tracker · detail',
      nav: trackerNav,
      fields: [
        { label: 'Vessel', value: 'Vessel B', required: true },
        { label: 'Voyage no.', value: 'VOY-021', required: true },
        { label: 'Port call', value: 'SGN → HPH', required: true },
        { label: 'ETA (original)', value: 'Wed 09:00' },
        { label: 'ETA (revised)', value: 'Wed 14:30', required: true },
        { label: 'Status', value: 'ETA revised' },
      ],
      rules: [
        { label: 'ETA change recorded with timestamp', state: 'ok', note: 'Recorded' },
        { label: 'Previous ETA retained in history', state: 'ok', note: 'Kept' },
        { label: 'Arrival record attached before completion', state: 'warn', note: 'Pending' },
      ],
      note: 'History kept beside current status',
    },
  },
  'pre-arrival-control-center': {
    checklist: {
      title: 'Pre-Arrival Check Panel',
      tag: 'pre-arrival · validation',
      nav: controlNav,
      tiles: [
        { label: 'Blockers', value: '2', hint: 'must close' },
        { label: 'Warnings', value: '3', hint: 'logged' },
        { label: 'Readiness', value: '62%', hint: 'rules passed' },
      ],
      rules: [
        { label: 'Mandatory shipment fields complete', state: 'ok', note: 'Passed' },
        { label: 'Manifest data matches shipment record', state: 'ok', note: 'Passed' },
        { label: 'Consignee details match documents', state: 'bad', note: 'Block' },
        { label: 'Notify party present and consistent', state: 'bad', note: 'Block' },
        { label: 'Transshipment route has connecting vessel', state: 'warn', note: 'Warning' },
        { label: 'Evidence attached for closed check', state: 'warn', note: 'Pending' },
      ],
      note: 'Rule-by-rule validation',
    },
    records: {
      title: 'Shipment Control Queue',
      tag: 'pre-arrival · queue',
      nav: controlNav,
      table: {
        head: ['Shipment', 'Arrival', 'Open items', 'Owner', 'Readiness'],
        rows: [
          ['SHP-1042', 'Tue AM', '2 blockers', 'Owner A', 'Exception'],
          ['SHP-1043', 'Tue PM', '1 warning', 'Owner B', 'Review'],
          ['SHP-1044', 'Wed AM', '0', 'Owner A', 'Ready'],
          ['SHP-1045', 'Wed PM', '1 blocker', 'Owner C', 'Exception'],
          ['SHP-1046', 'Thu AM', '0', 'Owner B', 'Cleared'],
        ],
      },
      rules: [{ label: 'Blocking exceptions must close before ready', state: 'ok', note: 'Rule active' }],
      note: 'Queue filtered by readiness',
    },
    form: {
      title: 'Exception Resolution',
      tag: 'pre-arrival · exception',
      nav: controlNav,
      fields: [
        { label: 'Shipment', value: 'SHP-1042', required: true },
        { label: 'Exception type', value: 'Consignee mismatch', required: true },
        { label: 'Severity', value: 'Blocking', required: true },
        { label: 'Owner', value: 'Owner A', required: true },
        { label: 'Evidence attached', value: 'Corrected document', full: true },
        { label: 'Resolution note', value: 'Consignee corrected at source', full: true },
      ],
      rules: [
        { label: 'Evidence and note are required to close', state: 'ok', note: 'Enforced' },
        { label: 'Shipment re-validated after closure', state: 'warn', note: 'Queued' },
      ],
      note: 'Exception lifecycle',
    },
  },
  'icm-productivity-tracer': {
    form: {
      title: 'Activity Capture',
      tag: 'productivity · logging',
      nav: tracerNav,
      fields: [
        { label: 'Task category', value: 'Shipment validation', required: true },
        { label: 'Reference', value: 'SHP-1042' },
        { label: 'Start', value: '09:12', required: true },
        { label: 'End', value: '09:26', required: true },
        { label: 'Handling time', value: '14 min', hint: 'Derived from start / end', full: true },
        { label: 'Notes', value: 'Consignee detail correction', full: true },
      ],
      rules: [
        { label: 'Category must come from defined list', state: 'ok', note: 'Enforced' },
        { label: 'Record closes only with handling time', state: 'ok', note: 'Enforced' },
      ],
      note: 'Structured at entry',
    },
    dashboard: {
      title: 'Productivity Overview',
      tag: 'productivity · reporting',
      nav: tracerNav,
      tiles: [
        { label: 'Records today', value: '26', hint: 'logged' },
        { label: 'Avg handling', value: '12m', hint: 'derived' },
        { label: 'Categories', value: '6', hint: 'in use' },
      ],
      bars: [
        { label: 'Val', pct: 82 },
        { label: 'Doc', pct: 64 },
        { label: 'Man', pct: 51 },
        { label: 'Exc', pct: 73 },
        { label: 'Rpt', pct: 38 },
        { label: 'Coor', pct: 45 },
      ],
      note: 'Volume by task category',
    },
    records: {
      title: 'Records & Export',
      tag: 'productivity · export',
      nav: tracerNav,
      table: {
        head: ['Date', 'Category', 'Duration', 'Status'],
        rows: [
          ['Mon', 'Shipment validation', '14m', 'Closed'],
          ['Mon', 'Documentation', '22m', 'Closed'],
          ['Tue', 'Exception handling', '18m', 'Closed'],
          ['Tue', 'Reporting', '11m', 'Review'],
          ['Wed', 'Coordination', '09m', 'Closed'],
        ],
      },
      rules: [
        { label: 'Export mirrors active filters', state: 'ok', note: 'Active' },
        { label: 'Closed records need a reason to edit', state: 'ok', note: 'Enforced' },
      ],
      note: 'Reporting-ready output',
    },
  },
  'mandatory-details-generator': {
    form: {
      title: 'Guided Detail Input',
      tag: 'details · input',
      nav: detailsNav,
      fields: [
        { label: 'Movement type', value: 'Import', required: true },
        { label: 'Customer', value: 'Customer record', required: true },
        { label: 'Consignee', value: 'Consignee record', required: true },
        { label: 'Notify party', value: 'Notify party record' },
        { label: 'HS code', value: 'Provided', required: true },
        { label: 'Cargo description', value: 'Provided', required: true },
        { label: 'Conditional fields', value: 'Shown only when triggered', full: true, hint: 'Rule-based visibility' },
      ],
      rules: [
        { label: 'Mandatory fields complete for import', state: 'ok', note: 'Passed' },
        { label: 'Missing information listed before output', state: 'warn', note: '1 item' },
      ],
      note: 'Input once, output standardized',
    },
    output: {
      title: 'Standardized Output',
      tag: 'details · output',
      nav: detailsNav,
      doc: {
        heading: 'Mandatory Shipment Details',
        meta: 'Standard template · generated from source record',
        lines: [
          { k: 'Movement type', v: 'Import' },
          { k: 'Shipment reference', v: 'SHP-1042' },
          { k: 'Consignee', v: 'Customer / consignee record' },
          { k: 'Notify party', v: 'Notify party record' },
          { k: 'Commodity', v: 'Cargo description' },
          { k: 'HS code', v: 'Provided' },
          { k: 'Required documentation', v: 'Per movement type' },
        ],
      },
      rules: [
        { label: 'Fixed ordering applied', state: 'ok', note: 'Applied' },
        { label: 'Source record timestamp carried', state: 'ok', note: 'Included' },
      ],
      note: 'Consistency from structure',
    },
    checklist: {
      title: 'Pre-Generation Validation',
      tag: 'details · validation',
      nav: detailsNav,
      rules: [
        { label: 'Mandatory fields complete', state: 'ok', note: 'Passed' },
        { label: 'Conditional fields resolved', state: 'ok', note: 'Passed' },
        { label: 'Consignee and notify party differ correctly', state: 'warn', note: 'Check' },
        { label: 'HS code present for commodity', state: 'ok', note: 'Passed' },
        { label: 'Output template selected', state: 'ok', note: 'Default' },
        { label: 'Source values corrected at source', state: 'bad', note: 'Action' },
      ],
      note: 'Missing information summary',
    },
  },
}
