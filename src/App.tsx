import React from 'react';
import { BookOpen, Briefcase, Award, Code, Medal } from 'lucide-react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Section from './components/Section';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navigation />
      <Header />

      <main className="container mx-auto px-6 pb-16 max-w-6xl space-y-16">
        <Section title="Academic Details" icon={BookOpen} id="academics">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Current</h3>
              <p className="text-gray-300">CGPA: 9.45</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Intermediate</h3>
              <p className="text-gray-300">Narayana Junior College</p>
              <p className="text-gray-300">975 Marks (2022)</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Class X</h3>
              <p className="text-gray-300">B.P.DAV School</p>
              <p className="text-gray-300">10 CGPA (2020)</p>
            </div>
          </div>
        </Section>

        <Section title="Technical Skills" icon={Code} id="skills">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['C++', 'Java', 'SQL', 'Python', 'HTML + CSS', 'Data Structures', 'Cloud Computing', 'DBMS'].map((skill) => (
              <div key={skill} className="bg-gray-800/50 p-4 rounded-lg text-center hover:bg-gray-800/70 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Work Experience" icon={Briefcase} id="experience">
          <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
            <h3 className="text-xl font-semibold">AWS Data Engineering</h3>
            <p className="text-gray-400">AICTE, Amazon Web Services (AWS)</p>
            <p className="text-gray-400">Apr 2024 - Jun 2024</p>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>Practical experience in AWS Services like S3, Lambda and IAM</li>
              <li>Data Ingestion, Storage, and Transformation</li>
              <li>Data Analytics and Security Implementation</li>
              <li>Build Real-Time Data Applications</li>
            </ul>
          </div>
        </Section>

        <Section title="Projects" icon={Code} id="projects">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
              <h3 className="text-xl font-semibold">Blog Website</h3>
              <p className="text-gray-300">Full Stack Development</p>
              <p className="text-gray-400">Jun 2024</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
              <h3 className="text-xl font-semibold">Auction Alley</h3>
              <p className="text-gray-300">Web Application Development</p>
              <p className="text-gray-400">Nov 2024</p>
            </div>
          </div>
        </Section>

        <Section title="Leadership Roles" icon={Award} id="leadership">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
              <h3 className="text-xl font-semibold">Digital Marketing Head</h3>
              <p className="text-gray-300">The LIT Club</p>
              <p className="text-gray-400">Oct 2023 - Sep 2024</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
              <h3 className="text-xl font-semibold">Chairperson</h3>
              <p className="text-gray-300">IEEE Nanotechnology council SNIST</p>
              <p className="text-gray-400">Jun 2024 - Present</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
              <h3 className="text-xl font-semibold">Treasurer</h3>
              <p className="text-gray-300">IEEE Sensors council SNIST</p>
              <p className="text-gray-400">Jun 2024 - Present</p>
            </div>
          </div>
        </Section>

        <Section title="Certifications" icon={Medal} id="certifications">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Artificial Intelligence', org: 'Hewlett-Packard' },
              { name: 'AWS Data Engineering', org: 'AICTE NEAT' },
              { name: 'Google Android Developer', org: 'Google for Developers' },
              { name: 'Information Security', org: 'Infosys Springboard' },
              { name: 'SQL and Relational Databases', org: 'IBM' },
              { name: 'Chatbot Development', org: 'IBM' },
              { name: 'Software Testing', org: 'JP Morgan & Co' },
              { name: 'Power BI', org: 'PwC' }
            ].map((cert) => (
              <div key={cert.name} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
                <h3 className="text-xl font-semibold">{cert.name}</h3>
                <p className="text-gray-300">{cert.org}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;