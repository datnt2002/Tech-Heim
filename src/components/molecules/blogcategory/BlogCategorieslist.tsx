const categories = [
  { category: "Technology Trends and News" },
  { category: "Gaming Insights" },
  { category: "Security and Privacy" },
  { category: "Tech Lifestyle and Productivity" },
  { category: "Product Spotlight" },
  { category: "How-to Guides and Tutorials" },
  { category: "Buying Guides and Tips" },
];

const BlogCategorieslist = () => {
  return (
    <div className="mt-4">
      <p className="font-medium text-xl">Categories</p>
      <div className="mt-6 gap-4 flex flex-col">
        {categories.map((category, index) => (
          <div className="font-light text-xl">{category.category}</div>
        ))}
      </div>
    </div>
  );
};
export default BlogCategorieslist;
