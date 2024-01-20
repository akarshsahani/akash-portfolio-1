'use client';
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
      image: '/work/3.png',
      category: 'gsap',
      name: 'Gain Strom',
      description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/4.png',
      category: 'next js',
      name: 'Food Website',
      description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/2.png',
      category: 'gsap',
      name: 'Gym & Fitness',
      description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/1.png',
      category: 'CSS Animation Effects',
      name: 'Particules Website',
      description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/4.png',
      category: 'next js',
      name: 'Canteen Website',
      description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/2.png',
      category: 'gsap',
      name: 'Little SPA',
      description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/1.png',
      category: 'CSS Animation Effects',
      name: 'UX Website',
      description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/3.png',
      category: 'gsap',
      name: 'Light Website',
      description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
      link: '/',
      codepen: '/',
  },
];

// Remove Category Duplicated
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, SetCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects'
    ? project
    : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={index}
                className='capitalize w-[162px] md:w-auto'
                >{category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects