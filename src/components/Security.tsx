import { motion } from 'framer-motion';
import { Shield, Lock, Zap, CheckCircle, Eye, Database } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Secure Code Practices',
    description: 'Following OWASP guidelines and security best practices in every line of code. Regular security audits and vulnerability assessments.',
    features: ['Input Validation', 'SQL Injection Prevention', 'XSS Protection', 'CSRF Protection']
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Implementing robust encryption, secure authentication, and compliance with privacy regulations like GDPR and CCPA.',
    features: ['End-to-End Encryption', 'Secure Authentication', 'Privacy Compliance', 'Data Minimization']
  },
  {
    icon: Zap,
    title: 'Performance & Reliability',
    description: 'Building high-performance applications with 99.9% uptime, optimized loading times, and scalable architecture.',
    features: ['Load Balancing', 'CDN Integration', 'Caching Strategies', 'Error Monitoring']
  },
  {
    icon: Eye,
    title: 'Security Monitoring',
    description: 'Real-time security monitoring with automated threat detection and incident response protocols.',
    features: ['24/7 Monitoring', 'Intrusion Detection', 'Automated Alerts', 'Incident Response']
  },
  {
    icon: Database,
    title: 'Secure Infrastructure',
    description: 'Deploying on secure cloud platforms with proper network segmentation, firewalls, and access controls.',
    features: ['Cloud Security', 'Network Isolation', 'Access Control', 'Regular Backups']
  },
  {
    icon: CheckCircle,
    title: 'Compliance & Auditing',
    description: 'Ensuring compliance with industry standards and maintaining detailed audit logs for transparency.',
    features: ['SOC 2 Compliance', 'Audit Logging', 'Penetration Testing', 'Code Reviews']
  }
];

const certifications = [
  { name: 'AWS Certified Security', level: 'Specialty' },
  { name: 'CISSP', level: 'Certified' },
  { name: 'CEH', level: 'Certified Ethical Hacker' },
  { name: 'CompTIA Security+', level: 'Verified' }
];

export default function Security() {
  return (
    <section id="security" className="py-20 lg:py-32 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trust & <span className="gradient-primary-text">Security</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Security isn't an afterthought—it's built into every layer of my development process. 
            Your data and users deserve the highest level of protection.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-2xl glass-hover hover-lift group"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 glow-hover">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-success flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + itemIndex * 0.05, duration: 0.4 }}
                    className="flex items-center text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 gradient-text">Security Certifications</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl glass-hover text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4 group-hover:border-primary-glow transition-colors">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{cert.name}</h4>
                <p className="text-sm text-accent">{cert.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 glass p-8 rounded-2xl"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-primary-text mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-primary-text mb-2">0</div>
              <div className="text-muted-foreground">Security Breaches</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-primary-text mb-2">&lt;2s</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-primary-text mb-2">24/7</div>
              <div className="text-muted-foreground">Monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}