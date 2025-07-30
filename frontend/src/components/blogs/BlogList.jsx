// components/blogs/BlogList.js
export const BlogList = ({ blogs, onView, onEdit, onDelete, onLike, userRole, currentUserId }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No blogs found</h3>
        <p className="mt-1 text-sm text-gray-500">Start by creating your first blog post.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
          onLike={onLike}
          userRole={userRole}
          currentUserId={currentUserId}
        />
      ))}
    </div>
  );
};