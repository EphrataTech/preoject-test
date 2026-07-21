import type { Idea } from "./types";

export interface IdeaListProps {
  list: Idea[];
}

function IdeaList({ list }: IdeaListProps) {
  if (list.length === 0) {
    return (
      <p className="status-message">
        No ideas yet. Be the first to submit one!
      </p>
    );
  }

  return (
    <ul className="idea-list">
      {list.map((idea) => (
        <li key={idea._id} className="idea-card">
          <h3>{idea.title}</h3>
          <p>{idea.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default IdeaList;