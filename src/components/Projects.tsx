import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and secure payments.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features built with React and Socket.io.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    technologies: ['React', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'AI Chat Application',
    description: 'Modern chat application with AI integration, real-time messaging, and smart responses. Built with Next.js and integrated with OpenAI API.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma', 'Vercel'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with interactive charts and real-time analytics. Features responsive design and export capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Chart.js'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking interface with biometric authentication, transaction history, and budget tracking features.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    technologies: ['React Native', 'Node.js', 'JWT', 'Biometrics', 'AWS'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProjects = projects.filter(p => p.featured);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-primary-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing some of my best work in web development, 
            from e-commerce platforms to AI-powered applications.
          </p>
        </motion.div>

        {/* Featured Project Carousel */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl overflow-hidden hover-lift glow group"
          >
            <div className="grid lg:grid-cols-2">
              {/* Project Image */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <motion.img
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={featuredProjects[currentIndex]?.image}
                  alt={featuredProjects[currentIndex]?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  key={`content-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold mb-4 gradient-text">
                    {featuredProjects[currentIndex]?.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredProjects[currentIndex]?.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProjects[currentIndex]?.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="glass">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button className="glow-hover group">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="glass glass-hover">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass glass-hover"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass glass-hover"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden glass-hover hover-lift group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}