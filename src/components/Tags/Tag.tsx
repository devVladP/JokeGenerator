import "./Tags.css";

interface TagProps {
  tag: string;
}

export default function Tag({ tag } : TagProps) {
  return <span className="joke-tag">{tag}</span>;
}
