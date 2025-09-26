import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const timelineItems = [
  {
    year: '2024',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovation Corp',
    icon: Briefcase,
    description: 'Leading development of scalable web applications using React, Next.js, and Node.js'
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd',
    icon: Briefcase,
    description: 'Built responsive web applications and RESTful APIs serving 100k+ users'
  },
  {
    year: '2020',
    title: 'Computer Science Degree',
    company: 'University of Technology',
    icon: GraduationCap,
    description: 'Graduated with honors, specializing in Software Engineering and Cybersecurity'
  },
  {
    year: '2019',
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    icon: Briefcase,
    description: 'Started my professional journey building modern web applications'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-primary-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer with 5+ years of experience creating 
            innovative digital solutions that drive business growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden hover-tilt glow">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -top-4 -right-4 glass p-4 rounded-lg"
            >
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 text-accent mr-2" />
                <span>San Francisco, CA</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 glass p-4 rounded-lg"
            >
              <div className="flex items-center text-sm">
                <Calendar className="w-4 h-4 text-accent mr-2" />
                <span>5+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text">My Journey</h3>
            
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex gap-4 group"
                >
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    {index < timelineItems.length - 1 && (
                      <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent mt-4" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="glass p-6 rounded-lg glass-hover group-hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-primary bg-primary/20 px-2 py-1 rounded">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                      <p className="text-accent mb-3">{item.company}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}