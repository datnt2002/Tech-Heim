import { useState } from "react";
import { Pagination } from "antd";
import { BlogCard } from "../../atoms/cards";

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
    content: `
Headphones have become an integral part of our daily lives, allowing us to enjoy music, podcasts, and calls with convenience and privacy. While most of us are familiar with their basic functions, there are several intriguing facts about headphones that might surprise you. In this article, we'll delve into eight things you probably didn't know about headphones, shedding light on their history, technology, and unique features.

**1-Stereo Sound Perception**

Ever wondered how headphones manage to create a three-dimensional sound experience? This phenomenon is called binaural perception, which utilizes the slight time differences it takes for sound to reach each ear, thus tricking the brain into perceiving depth and direction in audio.

**2-Noise-Canceling Magic**

Noise-canceling headphones use a sophisticated technology that analyzes external sounds and emits an "anti-noise" signal to counteract them. This process results in the suppression of unwanted background noise, offering a peaceful listening experience even in bustling environments.

**3-Bone Conduction Technology**

Some headphones, particularly designed for sports and outdoor activities, employ bone conduction technology. Instead of covering or inserting into the ears, these headphones sit on your cheekbones and transmit sound vibrations through your bones directly to the inner ear, leaving your ears open to hear ambient sounds.

**4-Virtual Surround Sound**

High-end headphones offer virtual surround sound, which simulates a multi-speaker setup for a cinema-like experience. This is achieved by using advanced algorithms to manipulate audio signals, creating the illusion that sound is coming from various directions.

**5-Wired vs. Wireless**

While wireless headphones are incredibly convenient, wired headphones can still offer superior audio quality due to the lack of data compression and transmission loss associated with wireless technology.

**6-The Evolution of Design**

Headphones have come a long way since their invention in the early 20th century. The first headphones, invented by Nathaniel Baldwin in 1910, were initially used by the U.S. Navy. Today, headphones come in a variety of styles, from over-ear and on-ear models to in-ear buds, each catering to different preferences and use cases.

**7-Health Implications**

While headphones provide an immersive audio experience, it's important to use them responsibly. Listening at high volumes for prolonged periods can lead to hearing damage. Experts recommend following the 60/60 rule: listening at 60% volume for no more than 60 minutes at a time to minimize the risk of hearing loss.

**8-Sustainable Innovations**

In response to growing environmental concerns, some headphone manufacturers are now focusing on sustainability. This includes using recycled materials, designing for easier repair and recycling, and reducing the use of harmful substances in the production process. These eco-friendly practices aim to lessen the environmental impact of headphone manufacturing.

In conclusion, headphones are more than just a tool for private listening. Their advanced technologies and innovative designs continue to evolve, enhancing our auditory experiences while also addressing health and environmental considerations. Next time you put on your headphones, take a moment to appreciate the incredible engineering and thought that goes into these everyday devices.
    `,
    title: "5 Things You Probably Didn’t Know About Headphones",
    releaseDate: "2023-07-10",
    readTime: "4 min read",
    author: "Geaorge larens",
  },
  // Add more blog entries here if needed
];
const ListRecentBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const blogsPerPage = 4;

  // Calculate the blogs to display for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const onPageChange = (page: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 300); // Match this duration with your CSS transition duration
  };

  return (
    <div>
      <div className="font-bold text-xl mt-5 mb-8">Recent Posts</div>
      <div
        className={`flex flex-col gap-4 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentBlogs.map((blog, index) => (
          <BlogCard
            key={index}
            mode="horizontal"
            className="shadow-md"
            title={blog.title}
            releaseDate={blog.releaseDate}
            readTime={blog.readTime}
            content={blog.content}
            author={blog.author}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          current={currentPage}
          pageSize={blogsPerPage}
          total={blogs.length}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ListRecentBlog;
