import {Skills} from "~/data/skills";
import {Card} from "~/components/ui/card";
import {Badge} from "~/components/ui/badge";
import {ScrollArea} from "./ui/scroll-area";

const AboutMe = () => {
    return (
        <ScrollArea className="h-[calc(100vh-8rem)] w-full">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                    About Me
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Personal Info */}
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8">
                        <h3 className="text-2xl font-semibold text-white mb-6">Who I Am</h3>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Solution Architect and Senior Generalist Software Engineer with extensive
                                experience in designing and implementing enterprise solutions. Currently at
                                QPP a.s., where I architect technologies for projects like Qaron, Testing,
                                Automation, and Robotics using Angular, Spring Boot, and modern technologies.
                            </p>
                            <p>
                                My journey spans from fullstack development at companies like ČSOB, Telekom,
                                Aspecta and Synchronix to consulting roles where I've integrated complex
                                systems with IBM MQ, Apache Camel, and various payment gateways. I specialize
                                in creating solutions and integrations.
                            </p>
                            <p>
                                I thrive on solving complex integration challenges, from luxury limousine
                                booking systems to biometric applications, always focusing on delivering
                                robust, maintainable solutions that meet real business needs.
                            </p>
                        </div>
                    </Card>

                    {/* Quick Stats */}
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-8">
                        <h3 className="text-2xl font-semibold text-white mb-6">Quick Stats</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-400 mb-2">11+</div>
                                <div className="text-slate-300">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-400 mb-2">23+</div>
                                <div className="text-slate-300">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-pink-400 mb-2">175+</div>
                                <div className="text-slate-300">Technologies</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
                                <div className="text-slate-300">Client Satisfaction</div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Skills.map((skillGroup, index) => (
                        <Card
                            key={skillGroup.category}
                            className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6 hover:bg-slate-700/50 transition-colors animate-fade-in"
                            style={{animationDelay: `${index * 100}ms`}}
                        >
                            <div className="flex items-center mb-4">
                                <skillGroup.icon className="w-6 h-6 text-blue-400 mr-3"/>
                                <h4 className="text-lg font-semibold text-white">{skillGroup.category}</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="bg-slate-700 text-slate-200 hover:bg-slate-600"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </ScrollArea>
    );
};

export default AboutMe;