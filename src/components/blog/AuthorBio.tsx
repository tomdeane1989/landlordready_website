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
      className="rounded-lg p-6"
      style={{ backgroundColor: 'var(--color-pale-green)' }}
      aria-label="About the author"
    >
      <div className="flex gap-4">
        <div
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
          style={{
            backgroundColor: 'var(--color-forest-green)',
            fontFamily: 'var(--font-display)',
          }}
          aria-hidden="true"
        >
          {getInitials(author.name)}
        </div>

        <div>
          <p
            className="text-base font-bold"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-near-black)',
            }}
          >
            {author.name}
          </p>
          <p
            className="mb-2 text-sm"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-amber)',
            }}
          >
            {author.role}
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-near-black)',
              opacity: 0.75,
            }}
          >
            {author.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
