import {Building, Calendar, GraduationCap, MapPin} from 'lucide-react';
import {Experiences} from "~/data/experiences";
import {EducationItems} from "~/data/educationItems";
import {Certifications} from "~/data/certifications";
import {Card} from "~/components/ui/card";
import {Badge} from "~/components/ui/badge";
import {ScrollArea} from './ui/scroll-area';

const Resume = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                Resume
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Experience */}
                <div className="lg:col-span-2">
                    <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <Building className="w-6 h-6 mr-3 text-blue-400"/>
                        Work Experience
                    </h3>
                    <div className="space-y-6">
                        {Experiences.map((exp, index) => (
                            <Card
                                key={index}
                                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6 animate-fade-in"
                                style={{animationDelay: `${index * 200}ms`}}
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                                        <p className="text-blue-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-slate-300 text-sm mt-2 md:mt-0 md:text-right">
                                        <div className="flex items-center justify-start md:justify-end mb-1">
                                            <Calendar className="w-4 h-4 mr-1"/>
                                            {exp.period}
                                        </div>
                                        <div className="flex items-center justify-start md:justify-end">
                                            <MapPin className="w-4 h-4 mr-1"/>
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-300 mb-4">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="bg-slate-700 text-slate-200"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Education & Certifications */}
                <div className="space-y-8">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                            <GraduationCap className="w-6 h-6 mr-3 text-purple-400"/>
                            Education
                        </h3>
                        <div className="space-y-4">
                            {EducationItems.map((edu, index) => (
                                <Card
                                    key={index}
                                    className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-4 animate-fade-in"
                                    style={{animationDelay: `${(index + 3) * 200}ms`}}
                                >
                                    <h4 className="font-semibold text-white text-sm">{edu.degree}</h4>
                                    <p className="text-purple-400 text-sm">{edu.school}</p>
                                    <div className="text-slate-300 text-xs mt-2">
                                        <div className="flex items-center mb-1">
                                            <Calendar className="w-3 h-3 mr-1"/>
                                            {edu.period}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="w-3 h-3 mr-1"/>
                                            {edu.location}
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-xs mt-2">{edu.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
                        <div className="space-y-2">
                            {Certifications.map((cert, index) => (
                                <Badge
                                    key={cert}
                                    variant="outline"
                                    className="w-full justify-start p-3 bg-slate-800/30 border-slate-600 text-slate-200 animate-fade-in"
                                    style={{animationDelay: `${(index + 5) * 100}ms`}}
                                >
                                    {cert}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;