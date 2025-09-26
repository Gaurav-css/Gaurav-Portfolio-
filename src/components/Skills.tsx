import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
      { name: 'Tailwind CSS', level: 92, color: 'from-teal-500 to-green-500' },
      { name: 'Three.js/WebGL', level: 80, color: 'from-purple-500 to-pink-500' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js/Express', level: 88, color: 'from-green-500 to-emerald-500' },
      { name: 'Python/Django', level: 85, color: 'from-yellow-500 to-orange-500' },
      { name: 'PostgreSQL', level: 87, color: 'from-blue-700 to-indigo-600' },
      { name: 'MongoDB', level: 83, color: 'from-green-600 to-green-400' }
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker/Kubernetes', level: 82, color: 'from-blue-500 to-purple-600' },
      { name: 'AWS/GCP', level: 86, color: 'from-orange-500 to-red-500' },
      { name: 'Git/GitHub', level: 93, color: 'from-gray-700 to-gray-500' },
      { name: 'CI/CD Pipelines', level: 84, color: 'from-indigo-500 to-purple-500' }
    ]
  }
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 
  'MongoDB', 'Tailwind CSS', 'Three.js', 'Docker', 'AWS', 'Git'
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-primary-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern web technologies with a focus on performance, 
            security, and scalable architecture.
          </p>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              className="glass px-4 py-2 rounded-full text-sm font-medium glass-hover cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="glass p-8 rounded-2xl glass-hover group hover-lift"
            >
              <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.6 
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="relative">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, 
                            duration: 1, 
                            ease: "easeOut" 
                          }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        >
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 2, 
                              ease: "easeInOut" 
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}