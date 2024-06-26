import { BlogCard } from "../atoms/cards";

const blogs = [
  {
    content:
      "In this blog post, we explore the different ways to connect your iPhone to a laptop, providing step-by-step instructions for both Windows and macOS users.",
    title: "How to Connect Your iPhone to a Laptop",
    releaseDate: "2023-06-15",
    readTime: "5 min read",
    author: "Geaorge larens",
  },
  {
    content:
      "Learn how to fix the Green Screen of Death (GSoD) error in Windows 10 and 11 with our comprehensive guide, including troubleshooting steps and preventive measures.",
    title: "How to Fix Green Screen of Death (GSoD) Error in Windows 10 and 11",
    releaseDate: "2023-06-20",
    readTime: "7 min read",
    author: "Geaorge larens",
  },
  {
    content:
      "We review the latest iPhone 14 Pro Max, examining its powerful features, impressive performance, and overall value as a flagship smartphone.",
    title: "iPhone 14 Pro Max Review: Still Powerful and Flagship",
    releaseDate: "2023-07-01",
    readTime: "6 min read",
    author: "Geaorge larens",
  },
  {
    content: `Headphones have become an integral part of our daily lives, allowing us to enjoy music, podcasts, and calls with convenience and privacy. While most of us are familiar with their basic functions, there are several intriguing facts about headphones that might surprise you. In this article, we'll delve into eight things you probably didn't know about headphones, shedding light on their history, technology, and unique features.

    1-Stereo Sound PerceptionEver wondered how headphones manage to create a three-dimensional sound experience? This phenomenon is called binaural perception, which utilizes the slight time differences it takes for sound to reach each ear, thus tricking the brain into perceiving depth and direction in audio.
    
    2-Noise-Canceling Magic
    Noise-canceling headphones use a sophisticated technology that analyzes external sounds and emits an "anti-noise" signal to counteract them. This process results in the suppression of unwanted background noise, offering a peaceful listening experience even in bustling environments.
    
    3-Bone Conduction Technology
    Some headphones, particularly designed for sports and outdoor activities, employ bone conduction technology. Instead of covering or inserting into the ears, these headphones sit on your cheekbones and transmit sound vibrations through your bones directly to the inner ear, leaving your ears open to hear ambient sounds.
    
    4-Virtual Surround Sound
    High-end headphones offer virtual surround sound, which simulates a multi-speaker setup for a cinema-like experience. This is achieved by using advanced algorithms to manipulate audio signals, creating the illusion that sound is coming from various directions.
    
    5-Wired vs. Wireless
    While wireless headphones are incredibly convenient, wired headphones can still offer superior audio quality due to the lack of data compression and transmission loss associated with wireless technology.`,
    title: "5 Things You Probably Didn’t Know About Headphones",
    releaseDate: "2023-07-10",
    readTime: "4 min read",
    author: "Geaorge larens",
  },
  // Add more blog entries here if needed
];
const ListBlogPost = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {blogs.slice(0, 4).map((blog, index) => (
          <BlogCard
            className="col-span-6 min-w-full"
            title={blog.title}
            releaseDate={blog.releaseDate}
            readTime={blog.readTime}
            content={blog.content}
          />
        ))}
      </div>
    </>
  );
};
export default ListBlogPost;
