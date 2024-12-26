"use client";
import React from "react";
import Image from "next/image";
import AuthoreCard from "@/components/AuthoreCard";
import CommentSection from "@/components/CommentSection";
import { format } from "date-fns";

// List of posts (with 1 to 15 IDs)
const posts = [
  {
    id: "1",
    title: "HTML Basics: Building the Web's Foundation",
    description:
      "Dive into the structure of webpages with HTML. Learn how to create content layouts and build the backbone of the internet. HTML (Hypertext Markup Language) is the core language used to create webpages. Think of it as the skeleton of a website, giving structure to the content...",
    date: "12/20/2024",
    image: "html.png",
  },
  {
    id: "2",
    title: "CSS Magic: Styling Your Web Projects",
    description:
      "CSS (Cascading Style Sheets) is what brings beauty to the web. CSS allows you to add styles to your website, including colors, fonts, and layout techniques that make your site visually appealing...",
    date: "12/21/2024",
    image: "css.png",
  },
  {
    id: "3",
    title: "JavaScript in Action: Dynamic Webpages",
    description:
      "JavaScript is a programming language that brings websites to life. It allows you to add interactivity, such as creating dynamic content and handling user actions...",
    date: "12/22/2024",
    image: "java.png",
  },
  {
    id: "4",
    title: "AI in Everyday Life",
    description:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's here, shaping the way we live, work, and interact with the world around us...",
    date: "12/23/2024",
    image: "ai.png",
  },
  {
    id: "5",
    title: "Responsive Design: Mobile-First Approach",
    description:
      "In today’s world, websites must work seamlessly across all devices, from desktop monitors to smartphones. A mobile-first approach to responsive web design ensures that your site will function well on all screen sizes...",
    date: "12/24/2024",
    image: "mobile.png",
  },
  {
    id: "6",
    title: "React.js: Crafting Modern UIs",
    description:
      "React.js is a powerful JavaScript library for building user interfaces, particularly for single-page applications. With React, you can break down complex UIs into small, reusable components...",
    date: "12/25/2024",
    image: "react.png",
  },
  {
    id: "7",
    title: "AI Ethics: Balancing Innovation and Responsibility",
    description:
      "Delve into the ethical challenges of AI development, ensuring technology benefits humanity as a whole. AI is advancing rapidly, but with innovation comes responsibility...",
    date: "12/26/2024",
    image: "Ai et.png",
  },
  {
    id: "8",
    title: "Node.js: Revolutionizing Backend Development",
    description:
      "Node.js is a powerful runtime environment that allows developers to build fast and scalable server-side applications using JavaScript...",
    date: "12/27/2024",
    image: "node.png",
  },
  {
    id: "9",
    title: "Understanding RESTful APIs",
    description:
      "APIs (Application Programming Interfaces) are the backbone of modern web development, allowing different systems to communicate with each other...",
    date: "12/28/2024",
    image: "rest.png",
  },
  {
    id: "10",
    title: "Machine Learning: A Beginner's Guide",
    description:
      "Machine learning is a subset of AI that allows systems to learn from data and improve over time without being explicitly programmed...",
    date: "12/29/2024",
    image: "ml.png",
  },
  {
    id: "11",
    title: "Cybersecurity in the Digital Age",
    description:
      "As we spend more time online, cybersecurity has become a critical issue. Cyberattacks, data breaches, and identity theft are all threats that can have severe consequences...",
    date: "12/30/2024",
    image: "cyb.png",
  },
  {
    id: "12",
    title: "Data Visualization with Python",
    description:
      "Data visualization is the art of representing data in a visual format, making complex datasets easier to understand...",
    date: "12/31/2024",
    image: "data.png",
  },
  {
    id: "13",
    title: "Cloud Computing: Transforming Storage",
    description:
      "Cloud computing has revolutionized the way we store and access data. By using remote servers hosted on the internet, businesses and individuals can store and access data without the need for physical storage devices...",
    date: "11/1/2024",
    image: "cc.png",
  },
  {
    id: "14",
    title: "Progressive Web Apps: The Future of Mobile",
    description:
      "Progressive Web Apps (PWAs) combine the best features of websites and mobile apps, providing a fast, reliable, and engaging user experience...",
    date: "10/2/2024",
    image: "ma.png",
  },
  {
    id: "15",
    title: "SEO Strategies for Developers",
    description:
      "Search Engine Optimization (SEO) is the process of optimizing a website to rank higher in search engine results pages...",
    date: "10/5/2024",
    image: "seo.png",
  },
];

// Corrected page props definition to match Next.js requirements
import { useRouter } from "next/router";

// Component for post props
const Post = () => {
  const { query } = useRouter(); // useRouter hook to get query params

  const postId = query.id as string; // Get the post ID from the URL

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Post Not Found</h2>
        <p className="mt-4 text-lg">Sorry, the post you're looking for doesn't exist. Please check the URL or go back to the homepage.</p>
      </div>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  const formattedDate = format(new Date(post.date), "MMMM dd, yyyy");

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>

      {post.image && (
        <Image
          src={`/${post.image}`}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <p>Posted on {formattedDate}</p>
      </div>

      <div className="mt-8">
        <AuthoreCard />
      </div>

      <div className="mt-10">
        <CommentSection postId={postId} />
      </div>
    </div>
  );
};

export default Post;
