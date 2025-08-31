import { PROPS_TABS_TABLE_TITLE } from "@/constants";
import { ComponentProp } from "@/types/components";

const PropsTabContent = ({ props }: { props: ComponentProp[] }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-foreground">
      Props Documentation
    </h3>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border ">
            {PROPS_TABS_TABLE_TITLE.map((title) => {
              return (
                <th className="text-left py-3 px-4 font-semibold text-foreground">
                  {title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props?.map((prop, index) => (
            <tr key={index} className="border-b border-border last:border-b-0">
              <td className="py-3 px-4">
                <span className="font-mono font-bold text-primary">
                  {prop.name}
                </span>
              </td>
              <td className="py-3 ">
                <span className="text-xs px-2 py-1 text-muted-foreground font-mono text-start text-wrap">
                  {prop.type}
                </span>
              </td>
              <td className="py-3 text-muted-foreground text-sm text-start text-wrap">
                {prop.description}
              </td>
              <td className="py-3 px-4">
                <span className="font-mono text-sm text-muted-foreground">
                  {prop.defaultValue || "-"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PropsTabContent;
