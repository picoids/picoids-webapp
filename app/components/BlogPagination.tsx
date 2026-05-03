import Link from "next/link";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  pageHref: (page: number) => string;
};

/**
 * Server-rendered pagination — keeps crawlable <a href>, aria-current, nav landmark for SEO.
 */
export default function BlogPagination({
  currentPage,
  totalPages,
  pageHref,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="mt-12 flex justify-center" aria-label="Pagination">
      <div className="theme-pagination-panel">
        {currentPage <= 1 ? (
          <span className="theme-pagination-disabled" aria-disabled="true">
            Previous
          </span>
        ) : (
          <Link href={pageHref(currentPage - 1)} className="theme-pagination-link">
            Previous
          </Link>
        )}
        {pageNumbers.map((n) => (
          <Link
            key={n}
            href={pageHref(n)}
            className={
              n === currentPage
                ? "theme-pagination-link-current"
                : "theme-pagination-link"
            }
            aria-current={n === currentPage ? "page" : undefined}
          >
            {n}
          </Link>
        ))}
        {currentPage >= totalPages ? (
          <span className="theme-pagination-disabled" aria-disabled="true">
            Next
          </span>
        ) : (
          <Link href={pageHref(currentPage + 1)} className="theme-pagination-link">
            Next
          </Link>
        )}
      </div>
    </nav>
  );
}
