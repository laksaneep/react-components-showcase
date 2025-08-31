import { ComponentProp } from "@/types/components";

const PropsTabContent = ({ props }: { props: ComponentProp[] }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-foreground">Props Documentation</h3>
    <div className="space-y-4">
      {props?.map((prop, index) => (
        <div key={index} className="border-l-4 border-primary pl-4 py-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono font-bold text-primary">
              {prop.name}
            </span>
            <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground" style={{ borderRadius: 'var(--radius-sm)' }}>
              {prop.type}
            </span>
          </div>
          <p className="text-muted-foreground text-sm">{prop.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default PropsTabContent;
