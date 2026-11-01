import { Icon } from './Icon'

export function FlowRail({ steps, light = false }: { steps: string[]; light?: boolean }) {
  return (
    <ol className={`flow-rail${light ? ' flow-rail--light' : ''}`} aria-label="Workflow steps">
      {steps.map((step, index) => (
        <li className="flow-node-wrap" key={step}>
          <span className="flow-node">
            <span className="fn-index">{String(index + 1).padStart(2, '0')}</span>
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span className="flow-arrow" aria-hidden="true">
              <Icon name="arrow" size={13} />
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  )
}
