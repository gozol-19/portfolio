import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

function App() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/soeurngkosorl-cv.pdf'; // ✅ path to your CV
    link.setAttribute('download', 'soeurngkosorl-cv.pdf'); // ✅ download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: "✅ CV Download Started!",
      description: "Your CV should be downloading now.",
    });
  };


  const handleProjectClick = () => {
    toast({
      title: "🚧 Project details coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const skills = [
    { name: 'Frontend Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'UI/UX Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'Mobile Development', icon: Smartphone, color: 'from-green-500 to-emerald-500' },
    { name: 'Web Development', icon: Globe, color: 'from-orange-500 to-red-500' }
  ];

  const projects = [
        {
      title: 'Portfolio Website',
      description: 'Responsive portfolio showcasing creative work and projects',
      tech: ['HTML', 'css ', ' React.js'],
      image: 'Beautiful portfolio website with modern design and animations',
      image: '/image/kosorl.jpg',
      link: '#projects'

    },
        {
      title: 'Shoes Shop ',
      description: 'Shoes shop Online E-Commerce Website Only Front-end Use html css javascript boostrap',
      tech: ['HTML', 'css ', ' JavaScript'],
      image: 'Beautiful portfolio website with modern design and animations',
           image: '/image/shoes.webp',
      link: 'https://shoes-shop-gules-kappa.vercel.app/'
    },
        {
      title: 'Doll Shop',
      description: 'Online doll shop built with Html and CSS and javascript',
      tech: ['HTML', ' CSS','JAVASCRIPT'],
      image: '/image/8.jpg',
      link: 'https://kosorl.vercel.app/' // ✅ Your real hosted link
    },
    {
      title: 'Business Manager ',
      description: 'Crud Manage System  with Fake Database ',
      tech: ['Html', 'css', 'Next.js'],
      image: '/image/crud.jpg',
      link: 'https://business-manager-drab.vercel.app/'
    },




  ];

  return (
    <>
      <Helmet>
        <title> Soeurng Kosorl - Front-End Web Developer Portfolio</title>
        <meta name="description" content=" specializing in React, Node.js, and modern web technologies. View my projects and get in touch!" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Soeurng Kosorl
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex space-x-8"
              >
                <a href="#home" className="text-white hover:text-purple-400 transition-colors">Home</a>
                <a href="#about" className="text-white hover:text-purple-400 transition-colors">About</a>
                <a href="#projects" className="text-white hover:text-purple-400 transition-colors">Projects</a>
                <a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="relative inline-block mb-6">
                <img
                  className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500/50 shadow-2xl"
                  alt="Profile photo of Soeurng Kosorl"
                  src="/image/kosorl.jpg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
              </div>


              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Web Front-End
                </span>
                <br />
                <span className="text-white">Developer</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Crafting beautiful, functional web experiences with modern technologies and creative solutions
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
                >
                  Get In Touch
                </Button>
                <Button
                  onClick={handleDownloadCV}
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                I am Soeurng Kosorl, a fourth-year Management Information Systems student at SETEC
                Institute with a strong passion for Front-End Web Developer. I am eager to apply my skills in HTML,
                CSS, and JavaScript to real-world projects. Currently, I am seeking an internship to further
                enhance my technical abilities, gain practical experience, and contribute to meaningful projects.
                My goal is to continue growing as a developer and create innovative, user-friendly websites that have
                a positive impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Frontend Development</h3>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>HTML, CSS (Advanced) – Responsive layouts</li>
                    <li>JavaScript, React.js (Intermediate) – Interactive UIs</li>
                    <li>Next.js, Bootstrap (Beginner–Intermediate)</li>
                  </ul>
                </div>
              </motion.div>

              {/* Version Control */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Version Control</h3>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>GitHub, GitLab (Intermediate)</li>
                    <li>Code management & collaboration</li>
                  </ul>
                </div>
              </motion.div>

              {/* Backend Development */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Backend Development</h3>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>PHP, Laravel (Beginner)</li>
                    <li>Basic CRUD and routing</li>
                  </ul>
                </div>
              </motion.div>

              {/* Additional Skills */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-400 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Additional Skills</h3>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Photoshop, Illustrator (Advanced)</li>
                    <li>After Effects, Premiere Pro (Intermediate)</li>
                    <li>Cinema 4D (Intermediate)</li>
                  </ul>
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-400 to-emerald-500 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Soft Skills</h3>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>Time Management</li>
                    <li>Communication</li>
                    <li>Critical Thinking</li>
                  </ul>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Here are some of my recent projects that showcase my skills and passion for development
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        alt={`Screenshot of ${project.title}`}
                        src={project.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
              </p>

              <div className="flex justify-center space-x-6 mb-12">
                <div className="flex justify-center space-x-6 mb-12">
                  <motion.a
                    href="mailto:soeurngkosorl@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                  >
                    <Mail className="h-6 w-6 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://t.me/today_1jj"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <Smartphone className="h-6 w-6 text-white" />
                  </motion.a>
                </div>

                {/* <motion.a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleContactClick(); }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
                >
                  <Github className="h-6 w-6 text-white" />
                </motion.a> */}
              </div>

              <a
                href="https://t.me/today_1jj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg rounded-lg transition-all duration-300"
              >
                Start a Conversation
              </a>

            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2024 kosorl. Built with React & Tailwind CSS
            </p>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;