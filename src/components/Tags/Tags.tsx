import Tag from "./Tag";
import "./Tags.css";

interface TagsProps {
  activeFlags: string[];
}

export default function Tags({ activeFlags }: TagsProps) {
  return (
    <div className="tags-container">
      {activeFlags.map((flag) => (
        <Tag key={flag} tag={flag} />
      ))}
    </div>
  );
}
