interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface AuthorBioProps {
  author: Author;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <section
      className="rounded-lg bg-pale-green p-6"
      aria-label="About the author"
    >
      <div className="flex gap-4">
        <div
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-forest-green font-display text-lg font-bold text-white"
          aria-hidden="true"
        >
          {getInitials(author.name)}
        </div>

        <div>
          <p
            className="text-base font-bold font-display text-near-black"
          >
            {author.name}
          </p>
          <p
            className="mb-2 text-sm font-body text-amber"
          >
            {author.role}
          </p>
          <p
            className="text-sm leading-relaxed font-body text-near-black opacity-75"
          >
            {author.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
