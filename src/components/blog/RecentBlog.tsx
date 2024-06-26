type Blog = {
  image: string;
  content: string;
  title: string;
  releaseDate: string;
  readTime: string;
};
const blogs: Blog[] = [
  {
    image: "path/to/image1.jpg",
    content:
      "In this blog post, we explore the different ways to connect your iPhone to a laptop, providing step-by-step instructions for both Windows and macOS users.",
    title: "How to Connect Your iPhone to a Laptop",
    releaseDate: "2023-06-15",
    readTime: "5 min read",
  },
  {
    image: "path/to/image2.jpg",
    content:
      "Learn how to fix the Green Screen of Death (GSoD) error in Windows 10 and 11 with our comprehensive guide, including troubleshooting steps and preventive measures.",
    title: "How to Fix Green Screen of Death (GSoD) Error in Windows 10 and 11",
    releaseDate: "2023-06-20",
    readTime: "7 min read",
  },
  {
    image: "path/to/image3.jpg",
    content:
      "We review the latest iPhone 14 Pro Max, examining its powerful features, impressive performance, and overall value as a flagship smartphone.",
    title: "iPhone 14 Pro Max Review: Still Powerful and Flagship",
    releaseDate: "2023-07-01",
    readTime: "6 min read",
  },
  {
    image: "path/to/image4.jpg",
    content:
      "Discover ten things you should never store in your smartphone to protect your privacy and ensure your personal data remains secure.",
    title: "10 Things You Should Never Store in Your Smartphone",
    releaseDate: "2023-07-10",
    readTime: "4 min read",
  },
  {
    image: "path/to/image5.jpg",
    content:
      "Find out how to prevent your laptop from turning off after closing the lid with our helpful tips and settings adjustments for both Windows and macOS.",
    title: "How to Prevent Your Laptop from Turning Off After Closing the Lid",
    releaseDate: "2023-07-15",
    readTime: "5 min read",
  },
  {
    image: "path/to/image6.jpg",
    content:
      "Learn five quick and easy ways to check the health of your graphics card in Windows 11, including built-in tools and third-party software recommendations.",
    title:
      "5 Quick and Easy Ways to Check the Health of Your Graphics Card in Windows 11",
    releaseDate: "2023-07-20",
    readTime: "5 min read",
  },
];

const RecentBlog = () => {
  return <></>;
};
export default RecentBlog;
